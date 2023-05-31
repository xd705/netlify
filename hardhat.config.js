require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();


task("accounts", "prints the list of accounts", async (taskargs,hre) =>{
const accounts = await hre.ether.getSigner();

for (const account of accounts){
  console.log(account.address);
}
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.REACT_APP_SEPOLIA_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
      gas: 30000000
    }
  },
  etherscan: {
    apiKey: {
      sepolia: 'FKKYM6KRDH3D6IYMYVAUSHJQPWXJNQXDAG'
    }
  },
  
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     goerli: {
//       url: process.env.REACT_APP_GOERLI_RPC_URL,
//       accounts: [process.env.REACT_APP_PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
//   },
// };