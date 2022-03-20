const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main () {
  // Create IPFS instance
  const ipfsOptions = { repo : './ipfs' }
  const ipfs = await IPFS.create(ipfsOptions)

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs)

  // Define new database options
  const options = {
    // Give write access to ourselves
    accessController: {
      write: [orbitdb.identity.id]
    }
  }

  // Create database instance
  const db = await orbitdb.docstore('docstore.test', options)

  // Log address of the new database
  const address = db.address.toString()
  console.log(address)

  // Log full identity of the new database
  const identity = db.identity
  console.log(identity.toJSON())
}

main()