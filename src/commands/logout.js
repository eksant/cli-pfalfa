const { Command } = require('@oclif/command')
const { msg, db } = require('../utils')

class LogoutCommand extends Command {
  async run() {
    const user = await db.read()
    if (user === undefined) return this.log(msg.success('You are already logout Pfalfa Identity Hub'))

    const userRemove = await db.destroy()
    return this.log(userRemove ? msg.success('Logout Pfalfa Identity Hub') : msg.error('Fail logout Pfalfa Identity Hub'))
  }
}

LogoutCommand.description = `logout from Pfalfa Identity Hub`

module.exports = LogoutCommand
