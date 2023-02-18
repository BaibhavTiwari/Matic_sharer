require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: process.env.REACT_APP_KEY,
      accounts:[process.env.REACT_APP_PRIVATE_KEY]
    }, 
  },
};