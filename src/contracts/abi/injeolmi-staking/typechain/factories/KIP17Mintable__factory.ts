/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP17Mintable, KIP17MintableInterface } from "../KIP17Mintable";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200002a6301ffc9a760e01b6200007160201b60201c565b620000426380ac58cd60e01b6200007160201b60201c565b62000053336200014060201b60201c565b6200006b63eab83e2060e01b6200007160201b60201c565b620002b9565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200010357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b6200015b8160056200019260201b620011861790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620001a482826200023660201b60201c565b156200021157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b03821662000299576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200184e6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61158580620002c96000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb465146102ac578063aa271e1a146102da578063b88d4fde14610300578063e985e9c5146103c6576100ea565b806370a0823114610246578063983b2d561461027e57806398650275146102a4576100ea565b806323b872dd116100c857806323b872dd1461019157806340c10f19146101c757806342842e0e146101f35780636352211e14610229576100ea565b806301ffc9a7146100ef578063081812fc1461012a578063095ea7b314610163575b600080fd5b6101166004803603602081101561010557600080fd5b50356001600160e01b0319166103f4565b604080519115158252519081900360200190f35b6101476004803603602081101561014057600080fd5b5035610413565b604080516001600160a01b039092168252519081900360200190f35b61018f6004803603604081101561017957600080fd5b506001600160a01b038135169060200135610478565b005b61018f600480360360608110156101a757600080fd5b506001600160a01b038135811691602081013590911690604001356105a5565b610116600480360360408110156101dd57600080fd5b506001600160a01b0381351690602001356105fd565b61018f6004803603606081101561020957600080fd5b506001600160a01b03813581169160208101359091169060400135610659565b6101476004803603602081101561023f57600080fd5b5035610674565b61026c6004803603602081101561025c57600080fd5b50356001600160a01b03166106d1565b60408051918252519081900360200190f35b61018f6004803603602081101561029457600080fd5b50356001600160a01b031661073c565b61018f61078f565b61018f600480360360408110156102c257600080fd5b506001600160a01b038135169060200135151561079a565b610116600480360360208110156102f057600080fd5b50356001600160a01b0316610869565b61018f6004803603608081101561031657600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561035157600080fd5b82018360208201111561036357600080fd5b8035906020019184600183028401116401000000008311171561038557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061087c945050505050565b610116600480360360408110156103dc57600080fd5b506001600160a01b03813581169160200135166108d7565b6001600160e01b03191660009081526020819052604090205460ff1690565b600061041e82610905565b61045c57604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806114cd602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061048382610674565b9050806001600160a01b0316836001600160a01b031614156104ef5760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061050b575061050b81336108d7565b61054957604051600160e51b62461bcd0281526004018080602001828103825260378152602001806114f86037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6105af3382610922565b6105ed57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806113fa6030913960400191505060405180910390fd5b6105f88383836109c9565b505050565b600061060833610869565b61064657604051600160e51b62461bcd0281526004018080602001828103825260308152602001806113816030913960400191505060405180910390fd5b6106508383610b13565b50600192915050565b6105f88383836040518060200160405280600081525061087c565b6000818152600160205260408120546001600160a01b0316806106cb57604051600160e51b62461bcd0281526004018080602001828103825260288152602001806113d26028913960400191505060405180910390fd5b92915050565b60006001600160a01b03821661071b57604051600160e51b62461bcd02815260040180806020018281038252602981526020018061147c6029913960400191505060405180910390fd5b6001600160a01b03821660009081526003602052604090206106cb90610c4a565b61074533610869565b61078357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806113816030913960400191505060405180910390fd5b61078c81610c4e565b50565b61079833610c96565b565b6001600160a01b0382163314156107fb5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b60006106cb60058363ffffffff610cde16565b6108878484846105a5565b61089384848484610d48565b6108d157604051600160e51b62461bcd02815260040180806020018281038252603081526020018061144c6030913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b600061092d82610905565b61096b57604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061152f602b913960400191505060405180910390fd5b600061097683610674565b9050806001600160a01b0316846001600160a01b031614806109b15750836001600160a01b03166109a684610413565b6001600160a01b0316145b806109c157506109c181856108d7565b949350505050565b826001600160a01b03166109dc82610674565b6001600160a01b031614610a2457604051600160e51b62461bcd0281526004018080602001828103825260288152602001806114a56028913960400191505060405180910390fd5b6001600160a01b038216610a6c57604051600160e51b62461bcd02815260040180806020018281038252602381526020018061135e6023913960400191505060405180910390fd5b610a758161112b565b6001600160a01b0383166000908152600360205260409020610a9690611166565b6001600160a01b0382166000908152600360205260409020610ab79061117d565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610b715760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610b7a81610905565b15610bcf5760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020610c0e9061117d565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b5490565b610c5f60058263ffffffff61118616565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b610ca760058263ffffffff61120a16565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b038216610d2857604051600160e51b62461bcd02815260040180806020018281038252602281526020018061142a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000806060610d5f866001600160a01b0316611274565b610d6e576001925050506109c1565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dfa578181015183820152602001610de2565b50505050905090810190601f168015610e275780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310610e8f5780518252601f199092019160209182019101610e70565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ef1576040519150601f19603f3d011682016040523d82523d6000602084013e610ef6565b606091505b508051919350915015801590610f3657508051600160e11b630a85bd01029060208084019190811015610f2857600080fd5b50516001600160e01b031916145b15610f46576001925050506109c1565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fd2578181015183820152602001610fba565b50505050905090810190601f168015610fff5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106110675780518252601f199092019160209182019101611048565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146110c9576040519150601f19603f3d011682016040523d82523d6000602084013e6110ce565b606091505b50805191935091501580159061110e57508051600160e01b636745782b02906020808401919081101561110057600080fd5b50516001600160e01b031916145b1561111e576001925050506109c1565b5060009695505050505050565b6000818152600260205260409020546001600160a01b03161561078c57600090815260026020526040902080546001600160a01b0319169055565b805461117990600163ffffffff61127a16565b9055565b80546001019055565b6111908282610cde565b156111e55760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6112148282610cde565b61125257604051600160e51b62461bcd0281526004018080602001828103825260218152602001806113b16021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b3b151590565b60006112bc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506112c3565b9392505050565b6000818484111561135557604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561131a578181015183820152602001611302565b50505050905090810190601f1680156113475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058203aff3545d9500b89242eda43214fdc70e1e6663d10fae378b6523924f0a0bea00029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

export class KIP17Mintable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17Mintable> {
    return super.deploy(overrides || {}) as Promise<KIP17Mintable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP17Mintable {
    return super.attach(address) as KIP17Mintable;
  }
  connect(signer: Signer): KIP17Mintable__factory {
    return super.connect(signer) as KIP17Mintable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17MintableInterface {
    return new utils.Interface(_abi) as KIP17MintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17Mintable {
    return new Contract(address, _abi, signerOrProvider) as KIP17Mintable;
  }
}
