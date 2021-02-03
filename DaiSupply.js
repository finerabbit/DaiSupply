const Web3 = require('web3');
require('dotenv').config();
const web3 = new Web3('https://mainnet.infura.io/v3/' + process.env.API_KEY);

const vatAddr = '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B';
const abi = [{
  "inputs": [],
  "name": "debt",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "type": "function"
}];

const vat = new web3.eth.Contract(abi, vatAddr);

vat.methods.debt().call().then(
  supply => console.log(supply/Math.pow(10,45))
);



const erc20daiAddr = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const ercabi = [{
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{"name": "", "type": "uint256"}],
  "type": "function"
}];

const erc20dai = new web3.eth.Contract(ercabi, erc20daiAddr);
erc20dai.methods.totalSupply().call().then(
  supply => console.log(supply/Math.pow(10,18))
);
