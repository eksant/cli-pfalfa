const moment = require('moment')
const { cli } = require('cli-ux')
const { prompt } = require('inquirer')
const { Command, flags } = require('@oclif/command')
const { api, msg, db } = require('../utils')

class StatusCommand extends Command {
  async run() {
    const user = await db.read()
    const { flags } = this.parse(StatusCommand)

    var name = flags.name
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

    api
      .get(api.host.pfalfa, 'dapps', user.pubkey)
      .then(async resp => {
        const { success, message, data } = resp
        if (!success) return this.log(msg.fail(message))
        const items = data.filter(f => f.name === name)
        if (items.length < 1) return this.log(msg.fail('DApp not found!'))

        return cli.table(items, {
          name: { header: 'DApp Name' },
          category: { minWidth: 10 },
          ipPublic: { header: 'IP Public', get: row => (row.ipPublic ? row.ipPublic : '') },
          gunDb: { header: 'Gun DB', get: row => (row.gunDb ? row.gunDb : '') },
          ipfsUrl: { header: 'DApp Public', get: row => (row.ipfsUrl ? row.ipfsUrl : '') },
          dappStatus: { header: 'Status' },
          dappCreated: { header: 'Created At', get: row => moment(row.dappCreated).format('DD MMM YYYY hh:mm:ss') },
        })
      })
      .catch(error => {
        return this.log(msg.error(error))
      })
  }
}

StatusCommand.flags = {
  name: flags.string({ char: 'n', description: 'DApps name (required)' }),
}

StatusCommand.description = `status DApps in Pfalfa Community`

module.exports = StatusCommand
