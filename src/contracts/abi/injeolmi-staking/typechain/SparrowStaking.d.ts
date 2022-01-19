/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SparrowStakingInterface extends ethers.utils.Interface {
  functions: {
    "initialSIjmAmountPerId()": FunctionFragment;
    "totalNFTs()": FunctionFragment;
    "ijm()": FunctionFragment;
    "initialized()": FunctionFragment;
    "nft()": FunctionFragment;
    "withdrawReward(uint256)": FunctionFragment;
    "withdrawableReward(uint256)": FunctionFragment;
    "initialIjmAmount()": FunctionFragment;
    "nftSIjmAmount(uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "sIjm()": FunctionFragment;
    "baseDepositedIjm()": FunctionFragment;
    "nftSIjmInitialized(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialSIjmAmountPerId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "totalNFTs", values?: undefined): string;
  encodeFunctionData(functionFragment: "ijm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawableReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialIjmAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftSIjmAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sIjm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baseDepositedIjm",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftSIjmInitialized",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "initialSIjmAmountPerId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalNFTs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ijm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialIjmAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftSIjmAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sIjm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseDepositedIjm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftSIjmInitialized",
    data: BytesLike
  ): Result;

  events: {
    "Initialize(address,uint256)": EventFragment;
    "WithdrawReward(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawReward"): EventFragment;
}

export type InitializeEvent = TypedEvent<
  [string, BigNumber] & {
    initializer: string;
    initialSIjmAmountPerId: BigNumber;
  }
>;

export type WithdrawRewardEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    owner: string;
    id: BigNumber;
    withdrawedIjm: BigNumber;
  }
>;

export class SparrowStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SparrowStakingInterface;

  functions: {
    initialSIjmAmountPerId(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalNFTs(overrides?: CallOverrides): Promise<[BigNumber]>;

    ijm(overrides?: CallOverrides): Promise<[string]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    withdrawReward(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawableReward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialIjmAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftSIjmAmount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sIjm(overrides?: CallOverrides): Promise<[string]>;

    baseDepositedIjm(overrides?: CallOverrides): Promise<[BigNumber]>;

    nftSIjmInitialized(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  initialSIjmAmountPerId(overrides?: CallOverrides): Promise<BigNumber>;

  totalNFTs(overrides?: CallOverrides): Promise<BigNumber>;

  ijm(overrides?: CallOverrides): Promise<string>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  nft(overrides?: CallOverrides): Promise<string>;

  withdrawReward(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawableReward(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialIjmAmount(overrides?: CallOverrides): Promise<BigNumber>;

  nftSIjmAmount(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sIjm(overrides?: CallOverrides): Promise<string>;

  baseDepositedIjm(overrides?: CallOverrides): Promise<BigNumber>;

  nftSIjmInitialized(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    initialSIjmAmountPerId(overrides?: CallOverrides): Promise<BigNumber>;

    totalNFTs(overrides?: CallOverrides): Promise<BigNumber>;

    ijm(overrides?: CallOverrides): Promise<string>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    nft(overrides?: CallOverrides): Promise<string>;

    withdrawReward(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawableReward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialIjmAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nftSIjmAmount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    sIjm(overrides?: CallOverrides): Promise<string>;

    baseDepositedIjm(overrides?: CallOverrides): Promise<BigNumber>;

    nftSIjmInitialized(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Initialize(address,uint256)"(
      initializer?: string | null,
      initialSIjmAmountPerId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { initializer: string; initialSIjmAmountPerId: BigNumber }
    >;

    Initialize(
      initializer?: string | null,
      initialSIjmAmountPerId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { initializer: string; initialSIjmAmountPerId: BigNumber }
    >;

    "WithdrawReward(address,uint256,uint256)"(
      owner?: string | null,
      id?: BigNumberish | null,
      withdrawedIjm?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; id: BigNumber; withdrawedIjm: BigNumber }
    >;

    WithdrawReward(
      owner?: string | null,
      id?: BigNumberish | null,
      withdrawedIjm?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; id: BigNumber; withdrawedIjm: BigNumber }
    >;
  };

  estimateGas: {
    initialSIjmAmountPerId(overrides?: CallOverrides): Promise<BigNumber>;

    totalNFTs(overrides?: CallOverrides): Promise<BigNumber>;

    ijm(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawReward(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawableReward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialIjmAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nftSIjmAmount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sIjm(overrides?: CallOverrides): Promise<BigNumber>;

    baseDepositedIjm(overrides?: CallOverrides): Promise<BigNumber>;

    nftSIjmInitialized(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialSIjmAmountPerId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalNFTs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ijm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawReward(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawableReward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialIjmAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftSIjmAmount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sIjm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseDepositedIjm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftSIjmInitialized(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
