require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = "e7d46c4d6a81289ba43963d827f5c89d773a361baa1b1e023ca81e020341cf9b"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-endpoints.superfluid.dev/mumbai",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-rpc.com/",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
