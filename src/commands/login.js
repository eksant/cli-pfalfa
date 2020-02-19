const { cli } = require('cli-ux')
const { prompt } = require('inquirer')
const { Command, flags } = require('@oclif/command')
const { api, msg, db } = require('../utils')

class LoginCommand extends Command {
  async run() {
    const { flags } = this.parse(LoginCommand)
    var email = flags.email
    var passphare = flags.passphare

    if (email === undefined) {
      const res = await prompt({
        type: 'input',
        name: 'email',
        message: 'Your email?',
        required: true,
        validate: async input => {
          if (input === '') return this.log(msg.fail('Email is required!'))
          return true
        },
      })
      email = res.email
    }

    if (passphare === undefined) {
      const res = await prompt({
        type: 'password',
        name: 'passphare',
        message: 'Your passphare?',
        required: true,
        validate: async input => {
          if (input === '') return this.log(msg.fail('Passphare/password is required!'))
          return true
        },
      })
      passphare = res.passphare
    }

    api
      .post(api.host.pfalfa, 'auth/login', { email, passphare })
      .then(async resp => {
        const { success, message, data } = resp
        if (!success) return this.log(msg.fail(message))

        const val = { email: data.email, pubkey: data.pub }
        db.write(val)

        return cli.table([val], {
          email: { minWidth: 25 },
          pubkey: { header: 'Public Key', get: row => row.pubkey },
        })
      })
      .catch(error => {
        return this.log(msg.error(error))
      })
  }
}

LoginCommand.flags = {
  email: flags.string({ char: 'e', description: 'developer email (required)' }),
  passphare: flags.string({
    char: 'p',
    description: 'developer passphare/password (required)',
  }),
}

LoginCommand.description = `login to Pfalfa Identity Hub`

module.exports = LoginCommand
