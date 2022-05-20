var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = '405402f603783df9db4197f37f3bb54b36e2a19f402655dddfa4231d1027ab67';               //YOUR WALLET KEY

module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },

  // ropsten: {
  //   provider: function() {
  //     return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/a25d5b4f89c74a369820c40c0c80f6db")
  //   },
  //   network_id: "3",
  //   gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
  // },

  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};
