const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main () {
  // Initialize IPFS
  const ipfsOptions = { repo : './ipfs' }
  const ipfs = await IPFS.create(ipfsOptions)

  // Initialize OrbitDB
  const orbitdb = await OrbitDB.createInstance(ipfs)
}

main()