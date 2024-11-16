// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EthereumTransfersTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  ethToken?: Maybe<ethToken>;
  ethTokens: Array<ethToken>;
  ethAccount?: Maybe<ethAccount>;
  ethAccounts: Array<ethAccount>;
  ethBalance?: Maybe<ethBalance>;
  ethBalances: Array<ethBalance>;
  ethTransfer?: Maybe<ethTransfer>;
  ethTransfers: Array<ethTransfer>;
  ethVault?: Maybe<ethVault>;
  ethVaults: Array<ethVault>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryethTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryethVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  ethToken?: Maybe<ethToken>;
  ethTokens: Array<ethToken>;
  ethAccount?: Maybe<ethAccount>;
  ethAccounts: Array<ethAccount>;
  ethBalance?: Maybe<ethBalance>;
  ethBalances: Array<ethBalance>;
  ethTransfer?: Maybe<ethTransfer>;
  ethTransfers: Array<ethTransfer>;
  ethVault?: Maybe<ethVault>;
  ethVaults: Array<ethVault>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionethTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionethVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type ethAccount = {
  /** account address */
  id: Scalars['ID']['output'];
  /** transfers where this account is the sender */
  transfersOut: Array<ethTransfer>;
  /** transfers where this account is the receiver */
  transfersIn: Array<ethTransfer>;
  /** balances for each ethToken */
  balances: Array<ethBalance>;
};


export type ethAccounttransfersOutArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
};


export type ethAccounttransfersInArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
};


export type ethAccountbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethBalance_filter>;
};

export type ethAccount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transfersOut_?: InputMaybe<ethTransfer_filter>;
  transfersIn_?: InputMaybe<ethTransfer_filter>;
  balances_?: InputMaybe<ethBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethAccount_filter>>>;
};

export type ethAccount_orderBy =
  | 'id'
  | 'transfersOut'
  | 'transfersIn'
  | 'balances';

export type ethBalance = {
  /** account address + ethToken address */
  id: Scalars['ID']['output'];
  /** the account that holds the balance */
  account: ethAccount;
  /** the token */
  token: ethToken;
  /** the vault if this balance belongs to one */
  vault?: Maybe<ethVault>;
  /** current balance */
  amount: Scalars['BigInt']['output'];
  /** block number of last update */
  lastUpdateBlock: Scalars['BigInt']['output'];
  /** timestamp of last update */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
};

export type ethBalance_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<ethAccount_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<ethToken_filter>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<ethVault_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlock?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethBalance_filter>>>;
};

export type ethBalance_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'vault'
  | 'vault__id'
  | 'vault__totalDepositors'
  | 'vault__totalValueLocked'
  | 'amount'
  | 'lastUpdateBlock'
  | 'lastUpdateTimestamp';

export type ethToken = {
  /** ethToken contract address */
  id: Scalars['ID']['output'];
  /** ethToken name */
  name: Scalars['String']['output'];
  /** ethToken symbol */
  symbol: Scalars['String']['output'];
  /** all transfers of this ethToken */
  transfers: Array<ethTransfer>;
};


export type ethTokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
};

export type ethToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transfers_?: InputMaybe<ethTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethToken_filter>>>;
};

export type ethToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'transfers';

export type ethTransfer = {
  /** transaction hash + log index */
  id: Scalars['ID']['output'];
  /** the ethToken being transferred */
  token: ethToken;
  /** sender address */
  from: ethAccount;
  /** receiver address */
  to: ethAccount;
  /** vault if this is a vault deposit */
  vault?: Maybe<ethVault>;
  /** amount transferred */
  amount: Scalars['BigInt']['output'];
  /** block number */
  blockNumber: Scalars['BigInt']['output'];
  /** block timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** transaction hash */
  transactionHash: Scalars['Bytes']['output'];
};

export type ethTransfer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<ethToken_filter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<ethAccount_filter>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<ethAccount_filter>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<ethVault_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethTransfer_filter>>>;
};

export type ethTransfer_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'from'
  | 'from__id'
  | 'to'
  | 'to__id'
  | 'vault'
  | 'vault__id'
  | 'vault__totalDepositors'
  | 'vault__totalValueLocked'
  | 'amount'
  | 'blockNumber'
  | 'timestamp'
  | 'transactionHash';

export type ethVault = {
  /** vault address */
  id: Scalars['ID']['output'];
  /** deposits received by this vault */
  deposits: Array<ethTransfer>;
  /** total value locked in vault per ethToken */
  tokenBalances: Array<ethBalance>;
  /** total number of depositors */
  totalDepositors: Scalars['BigInt']['output'];
  /** total value locked across all tokens */
  totalValueLocked: Scalars['BigInt']['output'];
};


export type ethVaultdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethTransfer_filter>;
};


export type ethVaulttokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ethBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ethBalance_filter>;
};

export type ethVault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deposits_?: InputMaybe<ethTransfer_filter>;
  tokenBalances_?: InputMaybe<ethBalance_filter>;
  totalDepositors?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDepositors_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDepositors_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethVault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethVault_filter>>>;
};

export type ethVault_orderBy =
  | 'id'
  | 'deposits'
  | 'tokenBalances'
  | 'totalDepositors'
  | 'totalValueLocked';

  export type QuerySdk = {
      /** null **/
  ethToken: InContextSdkMethod<Query['ethToken'], QueryethTokenArgs, MeshContext>,
  /** null **/
  ethTokens: InContextSdkMethod<Query['ethTokens'], QueryethTokensArgs, MeshContext>,
  /** null **/
  ethAccount: InContextSdkMethod<Query['ethAccount'], QueryethAccountArgs, MeshContext>,
  /** null **/
  ethAccounts: InContextSdkMethod<Query['ethAccounts'], QueryethAccountsArgs, MeshContext>,
  /** null **/
  ethBalance: InContextSdkMethod<Query['ethBalance'], QueryethBalanceArgs, MeshContext>,
  /** null **/
  ethBalances: InContextSdkMethod<Query['ethBalances'], QueryethBalancesArgs, MeshContext>,
  /** null **/
  ethTransfer: InContextSdkMethod<Query['ethTransfer'], QueryethTransferArgs, MeshContext>,
  /** null **/
  ethTransfers: InContextSdkMethod<Query['ethTransfers'], QueryethTransfersArgs, MeshContext>,
  /** null **/
  ethVault: InContextSdkMethod<Query['ethVault'], QueryethVaultArgs, MeshContext>,
  /** null **/
  ethVaults: InContextSdkMethod<Query['ethVaults'], QueryethVaultsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ethToken: InContextSdkMethod<Subscription['ethToken'], SubscriptionethTokenArgs, MeshContext>,
  /** null **/
  ethTokens: InContextSdkMethod<Subscription['ethTokens'], SubscriptionethTokensArgs, MeshContext>,
  /** null **/
  ethAccount: InContextSdkMethod<Subscription['ethAccount'], SubscriptionethAccountArgs, MeshContext>,
  /** null **/
  ethAccounts: InContextSdkMethod<Subscription['ethAccounts'], SubscriptionethAccountsArgs, MeshContext>,
  /** null **/
  ethBalance: InContextSdkMethod<Subscription['ethBalance'], SubscriptionethBalanceArgs, MeshContext>,
  /** null **/
  ethBalances: InContextSdkMethod<Subscription['ethBalances'], SubscriptionethBalancesArgs, MeshContext>,
  /** null **/
  ethTransfer: InContextSdkMethod<Subscription['ethTransfer'], SubscriptionethTransferArgs, MeshContext>,
  /** null **/
  ethTransfers: InContextSdkMethod<Subscription['ethTransfers'], SubscriptionethTransfersArgs, MeshContext>,
  /** null **/
  ethVault: InContextSdkMethod<Subscription['ethVault'], SubscriptionethVaultArgs, MeshContext>,
  /** null **/
  ethVaults: InContextSdkMethod<Subscription['ethVaults'], SubscriptionethVaultsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["EthereumTransfers"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
