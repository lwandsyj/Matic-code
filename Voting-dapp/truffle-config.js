const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
// Go to settings ->security and privacy
const mnemonic = "WRITE_MY_OWN_MNEMOIC_FROM_METAMASK.".toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
