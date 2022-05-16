var Contract = require('web3-eth-contract');
//Contract.setProvider('ws://localhost:8546');
Contract.defaultAccount='0xdd2fd4581271e230360230f9337d5c0430bf44c0';
var contract = new Contract([
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "mem",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "percent",
          "type": "uint256"
        }
      ],
      "name": "updateData",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "mem",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "percent",
          "type": "uint256"
        }
      ],
      "name": "addBeneficiary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddrBeneficiaries",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "mem",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDeath",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lefttime",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "mess",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "mem",
          "type": "address"
        }
      ],
      "name": "getPercentAddress",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRemain",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "mem",
          "type": "address"
        }
      ],
      "name": "rmBeneficiary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rollUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "testament",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "turnDeath",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_mount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],0xe7f1725e7734ce288f8367e1bb143e90bb3f0512);
Contract.methods.getOwner();