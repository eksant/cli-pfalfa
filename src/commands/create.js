const moment = require('moment')
const { cli } = require('cli-ux')
const { prompt } = require('inquirer')
const { Command, flags } = require('@oclif/command')
const { api, msg, db } = require('../utils')

const categories = ['High-Rish', 'Game', 'Gambling', 'Exchange', 'Finance', 'Social', 'Art', 'Tools', 'Others']

class CreateCommand extends Command {
  async run() {
    const user = await db.read()
    const { flags } = this.parse(CreateCommand)

    var name = flags.name
    var category = flags.category
    var description = flags.description
    var logoUrl = flags.logoUrl
    if (user === undefined) return this.log(msg.error('Please login first!'))
    if (category !== undefined && categories.indexOf(category) < 0)
      return this.log(msg.error(`Please choice one category DApp (${categories.join(',')})`))

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

    if (category === undefined) {
      const res = await prompt({
        type: 'list',
        choices: categories,
        name: 'category',
        message: 'Category DApp?',
        required: true,
        validate: async input => {
          if (input === '') return this.log(msg.fail('Category DApp is required!'))
          return true
        },
      })
      category = res.category
    }

    if (description === undefined) {
      const res = await prompt({
        type: 'input',
        name: 'description',
        message: 'Description DApp?',
        required: false,
      })
      description = res.description !== '' ? res.description : null
    }

    if (logoUrl === undefined) {
      const res = await prompt({
        type: 'input',
        name: 'logoUrl',
        message: 'Logo DApp (Url)?',
        required: false,
      })
      logoUrl = res.logoUrl !== '' ? res.logoUrl : null
    }

    api
      .post(api.host.pfalfa, 'dapps', { podName: name, category, description, logoUrl }, user.pubkey)
      .then(async resp => {
        const { success, message, data } = resp
        if (!success) return this.log(msg.fail(message))

        return cli.table([data], {
          name: { header: 'DApp Name' },
          category: { minWidth: 10 },
          logoUrl: { header: 'Logo Url' },
          ipPublic: { header: 'IP Public' },
          port: { minWidth: 5 },
          dappStatus: { header: 'Status' },
          dappCreated: { header: 'Created At', get: row => moment(row.dappCreated).format('DD MMM YYYY hh:mm:ss') },
        })
      })
      .catch(error => {
        return this.log(msg.error(error))
      })
  }
}

CreateCommand.flags = {
  name: flags.string({ char: 'n', description: 'DApps name (required)' }),
  category: flags.string({ char: 'c', description: `category DApp (${categories.join(',')})` }),
  description: flags.string({ char: 'd', description: 'description DApp' }),
  logoUrl: flags.string({ char: 'l', description: 'logo DApp' }),
}

CreateCommand.description = `create DApps in Pfalfa Community`

module.exports = CreateCommand
