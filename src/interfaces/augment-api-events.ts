// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';
import type { Bytes, Null, Result, Vec, i128, u128, u32, u64, u8 } from '@polkadot/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    anchor: {
      /**
       * New tree created
       **/
      AnchorCreation: AugmentedEvent<ApiType, [u32]>;
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
    };
    anchorHandler: {
      AnchorCreated: AugmentedEvent<ApiType, []>;
      AnchorEdgeAdded: AugmentedEvent<ApiType, []>;
      AnchorEdgeUpdated: AugmentedEvent<ApiType, []>;
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
    };
    assetRegistry: {
      /**
       * Native location set for an asset. \[asset_id, location\]
       **/
      LocationSet: AugmentedEvent<ApiType, [u32, Null]>;
      /**
       * Metadata set for an asset. \[asset_id, symbol, decimals\]
       **/
      MetadataSet: AugmentedEvent<ApiType, [u32, Bytes, u8]>;
      /**
       * Asset was registered. \[asset_id, name, type\]
       **/
      Registered: AugmentedEvent<ApiType, [u32, Bytes, PalletAssetRegistryAssetType]>;
      /**
       * Asset was updated. \[asset_id, name, type\]
       **/
      Updated: AugmentedEvent<ApiType, [u32, Bytes, PalletAssetRegistryAssetType]>;
    };
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
    };
    bls381Poseidon3X5Hasher: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
    bls381Poseidon5X5Hasher: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
    bn254CircomPoseidon3X5Hasher: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
    bn254Poseidon3X5Hasher: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
    bn254Poseidon5X5Hasher: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
    bridge: {
      /**
       * Chain now available for transfers (chain_id)
       **/
      ChainWhitelisted: AugmentedEvent<ApiType, [u32]>;
      /**
       * Maintainer is set
       **/
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * Voting successful for a proposal
       **/
      ProposalApproved: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Execution of call failed
       **/
      ProposalFailed: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Voting rejected a proposal
       **/
      ProposalRejected: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Execution of call succeeded
       **/
      ProposalSucceeded: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Relayer added to set
       **/
      RelayerAdded: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Relayer removed from set
       **/
      RelayerRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Vote threshold has changed (new_threshold)
       **/
      RelayerThresholdChanged: AugmentedEvent<ApiType, [u32]>;
      /**
       * Vot submitted against proposal
       **/
      VoteAgainst: AugmentedEvent<ApiType, [u32, u64, AccountId32]>;
      /**
       * Vote submitted in favour of proposal
       **/
      VoteFor: AugmentedEvent<ApiType, [u32, u64, AccountId32]>;
    };
    currencies: {
      /**
       * Update balance success. \[currency_id, who, amount\]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [u32, AccountId32, i128]>;
      /**
       * Deposit success. \[currency_id, who, amount\]
       **/
      Deposited: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Currency transfer success. \[currency_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u128]>;
      /**
       * Withdraw success. \[currency_id, who, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    merkleTree: {
      /**
       * New leaf inserted
       **/
      LeafInsertion: AugmentedEvent<ApiType, [u32, u32, NodeTemplateRuntimeElement]>;
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * New tree created
       **/
      TreeCreation: AugmentedEvent<ApiType, [u32, AccountId32]>;
    };
    mixer: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * New tree created
       **/
      MixerCreation: AugmentedEvent<ApiType, [u32]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened. \[origin, remark_hash\]
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
    };
    tokens: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [u32, AccountId32, u128, u128]>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[currency_id,
       * account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * An account was created with some free balance. \[currency_id,
       * account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       * \[currency_id, who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Transfer succeeded. \[currency_id, from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [u32, AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       * \[currency_id, who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
    };
    verifier: {
      MaintainerSet: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      ParametersSet: AugmentedEvent<ApiType, [AccountId32, Bytes]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
