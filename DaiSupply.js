const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/<INFURA_ID>');

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
