require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url:'https://goerli.infura.io/v3/99453d03151f437c94076ea56b955ce8',    
      accounts:['d6072d71019098e120bb24684792d97eb0ffcb45b5c25c7d80c66e2f5834a9db']
    }, 
  },
};