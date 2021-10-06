// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';
import type { Bytes, Null, Option, U8aFixed, Vec, bool, u128, u32, u64 } from '@polkadot/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletTransactionPaymentReleases, SpRuntimeGenericDigest } from '@polkadot/types/lookup';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    anchor: {
      /**
       * A helper map for denoting whether an anchor is bridged to given chain
       **/
      anchorHasEdge: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<bool>, [ITuple<[u32, u32]>]>;
      /**
       * The map of trees to their anchor metadata
       **/
      anchors: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAnchorAnchorMetadata>, [u32]>;
      /**
       * The map of trees and chain ids to their edge metadata
       **/
      edgeList: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletAnchorEdgeMetadata>, [u32, u32]>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * The map of trees to the maximum number of anchor edges they can have
       **/
      maxEdges: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * The map of (tree, chain id) pairs to their latest recorded merkle root
       **/
      neighborRoots: AugmentedQuery<ApiType, (arg1: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<U8aFixed>>, [ITuple<[u32, u32]>, u32]>;
      /**
       * The next neighbor root index to store the merkle root update record
       **/
      nextNeighborRootIndex: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<u32>, [ITuple<[u32, u32]>]>;
    };
    anchorHandler: {
      /**
       * The map of trees to their anchor metadata
       **/
      anchorList: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<u32>, [U8aFixed]>;
      /**
       * The number of updates
       **/
      counts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u64>, [u32]>;
      /**
       * sourceChainID => nonce => Update Record
       **/
      updateRecords: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u64 | AnyNumber | Uint8Array) => Observable<PalletAnchorHandlerUpdateRecord>, [u32, u64]>;
    };
    assetRegistry: {
      /**
       * Mapping between asset name and asset id.
       **/
      assetIds: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<u32>>, [Bytes]>;
      /**
       * Native location of an asset.
       **/
      assetLocations: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32]>;
      /**
       * Metadata of an asset.
       **/
      assetMetadataMap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetRegistryAssetMetadata>>, [u32]>;
      /**
       * Details of an asset.
       **/
      assets: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetRegistryAssetDetails>>, [u32]>;
      /**
       * Local asset for native location.
       **/
      locationAssets: AugmentedQuery<ApiType, (arg: Null | null) => Observable<Option<u32>>, [Null]>;
      /**
       * Next available asset id. This is sequential id assigned for each new
       * registered asset.
       **/
      nextAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    bls381Poseidon3X5Hasher: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
    bls381Poseidon5X5Hasher: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
    bn254CircomPoseidon3X5Hasher: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
    bn254Poseidon3X5Hasher: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
    bn254Poseidon5X5Hasher: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
    bridge: {
      /**
       * All whitelisted chains and their respective transaction counts
       **/
      chainNonces: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u64>>, [u32]>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Number of relayers in set
       **/
      relayerCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Tracks current relayer set
       **/
      relayers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]>;
      /**
       * Number of votes required for a proposal to execute
       **/
      relayerThreshold: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Utilized by the bridge software to map resource IDs to actual methods
       **/
      resources: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<Bytes>>, [U8aFixed]>;
      /**
       * All known proposals.
       * The key is the hash of the call and the deposit ID, to ensure it's
       * unique.
       **/
      votes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: ITuple<[u64, NodeTemplateRuntimeCall]> | [u64 | AnyNumber | Uint8Array, NodeTemplateRuntimeCall | { System: any } | { Unused1: any } | { Timestamp: any } | { Unused3: any } | { Grandpa: any } | { Balances: any } | { Unused6: any } | { Sudo: any } | { BLS381Poseidon3x5Hasher: any } | { BLS381Poseidon5x5Hasher: any } | { BN254Poseidon3x5Hasher: any } | { BN254Poseidon5x5Hasher: any } | { BN254CircomPoseidon3x5Hasher: any } | { AssetRegistry: any } | { Currencies: any } | { Tokens: any } | { Verifier: any } | { MerkleTree: any } | { Mixer: any } | { Anchor: any } | { AnchorHandler: any } | { Bridge: any } | string | Uint8Array]) => Observable<Option<PalletBridgeProposalVotes>>, [u32, ITuple<[u64, NodeTemplateRuntimeCall]>]>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u64]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []>;
    };
    merkleTree: {
      /**
       * Map of root history from tree id to root index to root values
       **/
      cachedRoots: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<U8aFixed>, [u32, u32]>;
      /**
       * The default hashes for this tree pallet
       **/
      defaultHashes: AugmentedQuery<ApiType, () => Observable<Vec<NodeTemplateRuntimeElement>>, []>;
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The map of (tree_id, index) to the leaf commitment
       **/
      leaves: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<U8aFixed>, [u32, u32]>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * The next tree identifier up for grabs
       **/
      nextLeafIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * The next tree identifier up for grabs
       **/
      nextRootIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The next tree identifier up for grabs
       **/
      nextTreeId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map of trees to their metadata
       **/
      trees: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletMtTreeMetadata>, [u32]>;
    };
    mixer: {
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * The map of trees to their mixer metadata
       **/
      mixers: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMixerMixerMetadata>>, [u32]>;
      /**
       * The map of trees to their spent nullifier hashes
       **/
      nullifierHashes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: NodeTemplateRuntimeElement | string | Uint8Array) => Observable<bool>, [u32, NodeTemplateRuntimeElement]>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<H256>, [u64]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeGenericDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: This storage item is explicitly unbounded since it is never intended to be read
       * from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u64, u32]>>>, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, u32]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, u32]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []>;
    };
    verifier: {
      /**
       * Details of the module's parameters
       **/
      deposit: AugmentedQuery<ApiType, () => Observable<Option<DarkwebbPrimitivesDepositDetails>>, []>;
      /**
       * The parameter maintainer who can change the parameters
       **/
      maintainer: AugmentedQuery<ApiType, () => Observable<AccountId32>, []>;
      /**
       * Details of the module's parameters
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
