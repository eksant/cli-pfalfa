const { cli } = require('cli-ux')
const { Command } = require('@oclif/command')
const { msg, db } = require('../utils')

class ProfileCommand extends Command {
  async run() {
    const user = await db.read()
    if (user === undefined) return this.log(msg.error('Please login first!'))

    return cli.table([user], {
      email: { minWidth: 25 },
      pubkey: { header: 'Public Key', get: row => row.pubkey },
    })
  }
}

ProfileCommand.description = `get Pfalfa Identity Hub Profile`

module.exports = ProfileCommand
