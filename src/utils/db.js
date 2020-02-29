const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')

const dbPath = path.join(__dirname, '../../bin')
const dbFile = `${dbPath}/pfalfa.json`

async function write(payload) {
  return await jsonfile
    .writeFile(dbFile, payload, { spaces: 2, EOL: '\r\n' })
    .then(resp => resp)
    .catch(() => undefined)
    // .catch(error => console.error('jsonfile : ', error))
}

async function read() {
  return await jsonfile
    .readFile(dbFile, { spaces: 2, EOL: '\r\n' })
    .then(resp => resp)
    .catch(() => undefined)
    // .catch(error => console.error('jsonfile : ', error))
}

async function destroy() {
  try {
    fs.unlinkSync(dbFile)
    return true
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = db = { write, read, destroy }
