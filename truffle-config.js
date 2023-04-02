const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config({ path: '.env'});

const { INFURA_GOERLI, INFURA_SEPOLIA, PROVIDER_BSC, PROVIDER_BSC_TESTNET, ETHSKAN } = process.env;
const MNEMONIC = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_GOERLI),
      network_id: 5,
      gas: 29000000
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_SEPOLIA),
      network_id: 11155111,
      gas: 29000000
    },
    bsc: {
      provider: () => new HDWalletProvider(MNEMONIC, PROVIDER_BSC),
      network_id: 56,
      gas: 29000000
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(MNEMONIC, PROVIDER_BSC_TESTNET),
      network_id: 97,
      gas: 29000000
    },
  },
  mocha: {
    enableTimeouts: false,
    reporter: 'eth-gas-reporter',
    reporterOptions : {
        currency: 'USD',
        onlyCalledMethods: 'true',
        showTimeSpent: 'true'
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: ETHSKAN
  },
  compilers: {
    solc: {
      // Fetch exact version from solc-bin (default: truffle's version)
      version: "0.8.19",
    }
  },
};
