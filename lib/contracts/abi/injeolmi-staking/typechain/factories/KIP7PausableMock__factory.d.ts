import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP7PausableMock, KIP7PausableMockInterface } from "../KIP7PausableMock";
export declare class KIP7PausableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP7PausableMock>;
    getDeployTransaction(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP7PausableMock;
    connect(signer: Signer): KIP7PausableMock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405160408062001763833981018060405260408110156200003357600080fd5b50805160209182015190916200006f907f01ffc9a70000000000000000000000000000000000000000000000000000000090620000ee811b901c565b62000087636578737160e01b620000ee60201b60201c565b6200009833620001bd60201b60201c565b6005805460ff19169055620000d47f4d5507ff00000000000000000000000000000000000000000000000000000000620000ee602090811b901c565b620000e682826200020f60201b60201c565b5050620004d1565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200018057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b620001d88160046200032e60201b62000f1e1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b0382166200028557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b620002a181600354620003d260201b62000fa81790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620002d691839062000fa8620003d2821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6200034082826200044e60201b60201c565b15620003ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6000828201838110156200044757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006001600160a01b038216620004b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620017416022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61126080620004e16000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635c975abb116100ad5780638456cb59116100715780638456cb59146102f9578063a9059cbb14610301578063b88d4fde1461032d578063dd62ed3e146103f3578063eb7955491461042157610121565b80635c975abb146102775780636b2c0f551461027f5780636ef8d66d146102a557806370a08231146102ad57806382dc1ec4146102d357610121565b8063329daf90116100f4578063329daf90146101dd5780633f4ba83a146101e7578063423f6cef146101ef57806342842e0e1461021b57806346fbf68e1461025157610121565b806301ffc9a714610126578063095ea7b31461016157806318160ddd1461018d57806323b872dd146101a7575b600080fd5b61014d6004803603602081101561013c57600080fd5b50356001600160e01b0319166104dc565b604080519115158252519081900360200190f35b61014d6004803603604081101561017757600080fd5b506001600160a01b0381351690602001356104fb565b610195610560565b60408051918252519081900360200190f35b61014d600480360360608110156101bd57600080fd5b506001600160a01b03813581169160208101359091169060400135610566565b6101e56105cd565b005b6101e5610616565b6101e56004803603604081101561020557600080fd5b506001600160a01b0381351690602001356106f6565b6101e56004803603606081101561023157600080fd5b506001600160a01b03813581169160208101359091169060400135610714565b61014d6004803603602081101561026757600080fd5b50356001600160a01b0316610734565b61014d61074d565b6101e56004803603602081101561029557600080fd5b50356001600160a01b0316610756565b6101e5610762565b610195600480360360208110156102c357600080fd5b50356001600160a01b031661076b565b6101e5600480360360208110156102e957600080fd5b50356001600160a01b0316610786565b6101e56107d6565b61014d6004803603604081101561031757600080fd5b506001600160a01b0381351690602001356108b0565b6101e56004803603608081101561034357600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561037e57600080fd5b82018360208201111561039057600080fd5b803590602001918460018302840111640100000000831117156103b257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061090e945050505050565b6101956004803603604081101561040957600080fd5b506001600160a01b038135811691602001351661096a565b6101e56004803603606081101561043757600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561046757600080fd5b82018360208201111561047957600080fd5b8035906020019184600183028401116401000000008311171561049b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610995945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60055460009060ff161561054f5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61055983836109ea565b9392505050565b60035490565b60055460009060ff16156105ba5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6105c5848484610a00565b949350505050565b6105d633610734565b61061457604051600160e51b62461bcd0281526004018080602001828103825260308152602001806111596030913960400191505060405180910390fd5b565b61061f33610734565b61065d57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806111596030913960400191505060405180910390fd5b60055460ff166106b75760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6005805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b610710828260405180602001604052806000815250610995565b5050565b61072f8383836040518060200160405280600081525061090e565b505050565b600061074760048363ffffffff610a5716565b92915050565b60055460ff1690565b61075f81610ac1565b50565b61061433610ac1565b6001600160a01b031660009081526001602052604090205490565b61078f33610734565b6107cd57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806111596030913960400191505060405180910390fd5b61075f81610aca565b6107df33610734565b61081d57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806111596030913960400191505060405180910390fd5b60055460ff161561086e5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6005805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60055460009060ff16156109045760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6105598383610b12565b610919848484610566565b5061092684848484610b1f565b61096457604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061112b602e913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61099f83836108b0565b506109ac33848484610b1f565b61072f57604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061112b602e913960400191505060405180910390fd5b60006109f7338484610c58565b50600192915050565b6000610a0d848484610d4a565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610a4d918691610a48908663ffffffff610e9416565b610c58565b5060019392505050565b60006001600160a01b038216610aa157604051600160e51b62461bcd0281526004018080602001828103825260228152602001806111f06022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61075f81610ed6565b610adb60048263ffffffff610f1e16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b60006109f7338484610d4a565b6000610b33846001600160a01b0316610fa2565b610b3f575060016105c5565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b83811015610bbc578181015183820152602001610ba4565b50505050905090810190601f168015610be95780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610c0b57600080fd5b505af1158015610c1f573d6000803e3d6000fd5b505050506040513d6020811015610c3557600080fd5b50516001600160e01b031916600160e11b634e8c46110214915050949350505050565b6001600160a01b038316610ca057604051600160e51b62461bcd0281526004018080602001828103825260238152602001806112126023913960400191505060405180910390fd5b6001600160a01b038216610ce857604051600160e51b62461bcd02815260040180806020018281038252602181526020018061110a6021913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610d9257604051600160e51b62461bcd0281526004018080602001828103825260248152602001806111cc6024913960400191505060405180910390fd5b6001600160a01b038216610dda57604051600160e51b62461bcd0281526004018080602001828103825260228152602001806111896022913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054610e03908263ffffffff610e9416565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610e38908263ffffffff610fa816565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061055983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611005565b610ee760048263ffffffff61109f16565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b610f288282610a57565b15610f7d5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b6000828201838110156105595760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000818484111561109757604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561105c578181015183820152602001611044565b50505050905090810190601f1680156110895780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6110a98282610a57565b6110e757604051600160e51b62461bcd0281526004018080602001828103825260218152602001806111ab6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b4950373a207472616e7366657220746f20746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820a5e293c54921d87072a5f751acbf09bb59b3e349dedf812b63c99b0248cfb4410029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): KIP7PausableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7PausableMock;
}
//# sourceMappingURL=KIP7PausableMock__factory.d.ts.map