// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    anchor: {
      /**
       * Edge already exists
       **/
      EdgeAlreadyExists: AugmentedError<ApiType>;
      EdgeDoesntExists: AugmentedError<ApiType>;
      /**
       * Invalid neighbor root passed in withdrawal
       * (neighbor root is not in neighbor history)
       **/
      InvalidNeighborWithdrawRoot: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Invalid withdraw proof
       **/
      InvalidWithdrawProof: AugmentedError<ApiType>;
      /**
       * Anchor is at maximum number of edges for the given tree
       **/
      TooManyEdges: AugmentedError<ApiType>;
    };
    anchorHandler: {
      AnchorHandlerNotFound: AugmentedError<ApiType>;
      /**
       * Access violation.
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      ResourceIsAlreadyAnchored: AugmentedError<ApiType>;
      SourceChainIdNotFound: AugmentedError<ApiType>;
      /**
       * Storage overflowed.
       **/
      StorageOverflow: AugmentedError<ApiType>;
    };
    assetRegistry: {
      /**
       * Asset is already registered.
       **/
      AssetAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Asset ID is not registered in the asset-registry.
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Incorrect number of assets provided to create shared asset.
       **/
      InvalidSharedAssetLen: AugmentedError<ApiType>;
      /**
       * Asset Id is not available. This only happens when it reaches the MAX
       * value of given id type.
       **/
      NoIdAvailable: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      TooLong: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    bls381Poseidon3X5Hasher: {
      /**
       * Error during hashing
       **/
      HashError: AugmentedError<ApiType>;
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
    };
    bls381Poseidon5X5Hasher: {
      /**
       * Error during hashing
       **/
      HashError: AugmentedError<ApiType>;
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
    };
    bn254CircomPoseidon3X5Hasher: {
      /**
       * Error during hashing
       **/
      HashError: AugmentedError<ApiType>;
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
    };
    bn254Poseidon3X5Hasher: {
      /**
       * Error during hashing
       **/
      HashError: AugmentedError<ApiType>;
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
    };
    bn254Poseidon5X5Hasher: {
      /**
       * Error during hashing
       **/
      HashError: AugmentedError<ApiType>;
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
    };
    bridge: {
      /**
       * Chain has already been enabled
       **/
      ChainAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * Interactions with this chain is not permitted
       **/
      ChainNotWhitelisted: AugmentedError<ApiType>;
      /**
       * Provided chain Id is not valid
       **/
      InvalidChainId: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Relayer threshold cannot be 0
       **/
      InvalidThreshold: AugmentedError<ApiType>;
      /**
       * Protected operation, must be performed by relayer
       **/
      MustBeRelayer: AugmentedError<ApiType>;
      /**
       * Proposal has either failed or succeeded
       **/
      ProposalAlreadyComplete: AugmentedError<ApiType>;
      /**
       * A proposal with these parameters has already been submitted
       **/
      ProposalAlreadyExists: AugmentedError<ApiType>;
      /**
       * No proposal with the ID was found
       **/
      ProposalDoesNotExist: AugmentedError<ApiType>;
      /**
       * Lifetime of proposal has been exceeded
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Cannot complete proposal, needs more votes
       **/
      ProposalNotComplete: AugmentedError<ApiType>;
      /**
       * Relayer already in set
       **/
      RelayerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Relayer has already submitted some vote for this proposal
       **/
      RelayerAlreadyVoted: AugmentedError<ApiType>;
      /**
       * Provided accountId is not a relayer
       **/
      RelayerInvalid: AugmentedError<ApiType>;
      /**
       * Resource ID provided isn't mapped to anything
       **/
      ResourceDoesNotExist: AugmentedError<ApiType>;
      /**
       * Relayer threshold not set
       **/
      ThresholdNotSet: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    merkleTree: {
      /**
       * Tree is full
       **/
      ExceedsMaxLeaves: AugmentedError<ApiType>;
      /**
       * Invalid  leaf index,  either taken or too large
       **/
      InvalidLeafIndex: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Invalid depth of the tree specified
       **/
      InvalidTreeDepth: AugmentedError<ApiType>;
      /**
       * Tree doesnt exist
       **/
      TreeDoesntExist: AugmentedError<ApiType>;
    };
    mixer: {
      /**
       * Invalid nullifier that is already used
       * (this error is returned when a nullifier is used twice)
       **/
      AlreadyRevealedNullifier: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Invalid withdraw proof
       **/
      InvalidWithdrawProof: AugmentedError<ApiType>;
      /**
       * Invalid root used in withdrawal
       **/
      InvalidWithdrawRoot: AugmentedError<ApiType>;
      /**
       * No mixer found
       **/
      NoMixerFound: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
    };
    verifier: {
      /**
       * Parameters are invalid or empty
       **/
      InvalidParameters: AugmentedError<ApiType>;
      /**
       * Account does not have correct permissions
       **/
      InvalidPermissions: AugmentedError<ApiType>;
      /**
       * Parameters haven't been initialized
       **/
      ParametersNotInitialized: AugmentedError<ApiType>;
      /**
       * Error during verification
       **/
      VerifyError: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
  }
}
