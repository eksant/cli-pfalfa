const moment = require('moment')
const { cli } = require('cli-ux')
const { Command } = require('@oclif/command')
const { api, msg, db } = require('../utils')

class ListCommand extends Command {
  async run() {
    const user = await db.read()
    if (user === undefined) return this.log(msg.error('Please login first!'))

    api
      .get(api.host.pfalfa, 'dapps', user.pubkey)
      .then(resp => {
        const { success, message, data } = resp
        if (!success) return this.log(msg.fail(message))

        return cli.table(data, {
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

ListCommand.description = `list existing DApps`

module.exports = ListCommand
