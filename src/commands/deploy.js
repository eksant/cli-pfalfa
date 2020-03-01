const fs = require('fs')
const path = require('path')
const moment = require('moment')
const { cli } = require('cli-ux')
const { prompt } = require('inquirer')
const { Command, flags } = require('@oclif/command')
const { api, msg, db } = require('../utils')

class DeployCommand extends Command {
  async run() {
    const user = await db.read()
    const { flags } = this.parse(DeployCommand)

    var name = flags.name
    var file = flags.file
    if (user === undefined) return this.log(msg.error('Please login first!'))

    if (name === undefined) {
      const res = await prompt({
        type: 'input',
        name: 'name',
        message: 'DApp name (lowercase, no space)?',
        required: true,
        validate: async input => {
          if (input === '') return this.log(msg.fail('DApp name is required!'))
          return true
        },
      })
      name = res.name
    }

    if (file === undefined) {
      const res = await prompt({
        type: 'input',
        name: 'file',
        message: 'Full path of zip file DApp?',
        required: true,
        validate: async input => {
          if (input === '') return this.log(msg.fail('Zip file DApp is required!'))
          return true
        },
      })
      file = res.file
    }

    fs.readFile(file, async error => {
      if (error) return this.log(msg.error(error.message))
      if (path.extname(file) !== '.zip') return this.log(msg.error('File DApp must be compressed with extension zip'))

      api
        .get(api.host.pfalfa, 'dapps', user.pubkey)
        .then(async resp => {
          const { success, message, data } = resp
          if (!success) return this.log(msg.fail(message))

          const items = data.filter(f => f.name === name)
          const item = items.length > 0 ? items[0] : null
          if (!item) return this.log(msg.fail(`DApp ${name} not found`))

          cli.action.start('Processing deploy DApp')
          api
            .upload(api.host.pfalfa, `ipfs/upload/${item.id}`, file, user.pubkey)
            .then(resp => {
              const { success, message } = resp
              if (!success) return this.log(msg.fail(message))

              api
                .get(api.host.pfalfa, 'dapps', user.pubkey)
                .then(resp => {
                  const { success, message, data } = resp
                  if (!success) return this.log(msg.fail(message))
                  const items = data.filter(f => f.name === name)
                  if (items.length < 1) return this.log(msg.fail(`DApp ${name} not found`))

                  return cli.table(items, {
                    name: { header: 'DApp Name' },
                    // category: { minWidth: 10 },
                    ipPublic: { header: 'IP Public', get: row => (row.ipPublic ? row.ipPublic : '') },
                    gunDb: { header: 'Gun DB', get: row => (row.gunDb ? row.gunDb : '') },
                    ipfsUrl: { header: 'DApp Public', get: row => (row.ipfsUrl ? row.ipfsUrl : '') },
                    dappStatus: { header: 'Status' },
                    // dappCreated: { header: 'Created At', get: row => moment(row.dappCreated).format('DD MMM YYYY hh:mm:ss') },
                  })
                })
                .finally(() => cli.action.stop())
                .catch(error => {
                  return this.log(msg.error(error))
                })
            })
            .catch(error => {
              return this.log(msg.error(error))
            })
        })
        .catch(error => {
          return this.log(msg.error(error))
        })
    })
  }
}

DeployCommand.flags = {
  name: flags.string({ char: 'n', description: 'dApps name (required)' }),
  file: flags.string({ char: 'f', description: 'full path of zip file (required)' }),
}

DeployCommand.description = `deploy DApp to Pfalfa IPFS Gateway`

module.exports = DeployCommand
