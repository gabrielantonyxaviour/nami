// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace NamiAiClientTypes {
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
  disasterDescriptive?: Maybe<disasterDescriptive>;
  disasterDescriptives: Array<disasterDescriptive>;
  beneficiary?: Maybe<beneficiary>;
  beneficiaries: Array<beneficiary>;
  fundReleaseDescriptive?: Maybe<fundReleaseDescriptive>;
  fundReleaseDescriptives: Array<fundReleaseDescriptive>;
  claim?: Maybe<claim>;
  claims: Array<claim>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydisasterDescriptiveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydisasterDescriptivesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<disasterDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<disasterDescriptive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeneficiaryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeneficiariesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<beneficiary_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<beneficiary_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundReleaseDescriptiveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundReleaseDescriptivesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<fundReleaseDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<fundReleaseDescriptive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<claim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<claim_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  disasterDescriptive?: Maybe<disasterDescriptive>;
  disasterDescriptives: Array<disasterDescriptive>;
  beneficiary?: Maybe<beneficiary>;
  beneficiaries: Array<beneficiary>;
  fundReleaseDescriptive?: Maybe<fundReleaseDescriptive>;
  fundReleaseDescriptives: Array<fundReleaseDescriptive>;
  claim?: Maybe<claim>;
  claims: Array<claim>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondisasterDescriptiveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondisasterDescriptivesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<disasterDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<disasterDescriptive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeneficiaryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeneficiariesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<beneficiary_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<beneficiary_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundReleaseDescriptiveArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundReleaseDescriptivesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<fundReleaseDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<fundReleaseDescriptive_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<claim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<claim_filter>;
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

export type beneficiary = {
  /** the beneficiary address */
  id: Scalars['ID']['output'];
  /** name of the beneficiary organization */
  name: Scalars['String']['output'];
  /** all fund releases received by this beneficiary */
  receivedFunds: Array<fundReleaseDescriptive>;
  /** total amount received across all disasters */
  totalAmountReceived: Scalars['BigInt']['output'];
  /** total number of fund releases received */
  totalFundReleases: Scalars['BigInt']['output'];
  /** disasters for which beneficiary received funds */
  disasters: Array<disasterDescriptive>;
};


export type beneficiaryreceivedFundsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<fundReleaseDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<fundReleaseDescriptive_filter>;
};


export type beneficiarydisastersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<disasterDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<disasterDescriptive_filter>;
};

export type beneficiary_filter = {
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
  receivedFunds_?: InputMaybe<fundReleaseDescriptive_filter>;
  totalAmountReceived?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountReceived_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountReceived_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundReleases?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundReleases_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundReleases_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disasters?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_not?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  disasters_?: InputMaybe<disasterDescriptive_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<beneficiary_filter>>>;
  or?: InputMaybe<Array<InputMaybe<beneficiary_filter>>>;
};

export type beneficiary_orderBy =
  | 'id'
  | 'name'
  | 'receivedFunds'
  | 'totalAmountReceived'
  | 'totalFundReleases'
  | 'disasters';

export type claim = {
  /** fund release id + chain id */
  id: Scalars['ID']['output'];
  /** chain id where claim was made */
  chainId: Scalars['BigInt']['output'];
  /** fund release associated with this claim */
  fundReleaseDescriptive: fundReleaseDescriptive;
  /** tokens claimed (0: Native, 1: WETH, 2: USDC, 3: USDT) */
  tokens: Array<Scalars['Int']['output']>;
  /** amounts claimed for each token */
  amounts: Array<Scalars['BigInt']['output']>;
};

export type claim_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundReleaseDescriptive?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_gt?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_lt?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_gte?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_lte?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fundReleaseDescriptive_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fundReleaseDescriptive_contains?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_contains?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_starts_with?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_ends_with?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fundReleaseDescriptive_?: InputMaybe<fundReleaseDescriptive_filter>;
  tokens?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  amounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<claim_filter>>>;
  or?: InputMaybe<Array<InputMaybe<claim_filter>>>;
};

export type claim_orderBy =
  | 'id'
  | 'chainId'
  | 'fundReleaseDescriptive'
  | 'fundReleaseDescriptive__id'
  | 'fundReleaseDescriptive__attestationId'
  | 'fundReleaseDescriptive__comments'
  | 'fundReleaseDescriptive__amountInUSD'
  | 'fundReleaseDescriptive__hyperlaneMessageId'
  | 'fundReleaseDescriptive__transactionHash'
  | 'tokens'
  | 'amounts';

export type disasterDescriptive = {
  /** the id of the disaster */
  id: Scalars['ID']['output'];
  /** name of the disaster */
  name: Scalars['String']['output'];
  /** description of the disaster */
  description: Scalars['String']['output'];
  /** type of disaster (earthquake, flood, etc.) */
  disasterType: Scalars['String']['output'];
  /** location where disaster occurred */
  location: Scalars['String']['output'];
  /** timestamp when disaster was created */
  createdAt: Scalars['BigInt']['output'];
  /** total funds needed for disaster relief */
  fundsNeeded: Scalars['BigInt']['output'];
  /** ENS name associated with the disaster */
  ensName: Scalars['String']['output'];
  /** Base account name associated with the disaster */
  baseName: Scalars['String']['output'];
  /** address of the vault created for this disaster */
  vaultAddress: Scalars['Bytes']['output'];
  /** attestation id for this disaster creation */
  attestationId: Scalars['BigInt']['output'];
  /** transaction hash in which disaster was created */
  transactionHash: Scalars['Bytes']['output'];
  /** hyperlane message id for this disaster */
  hyperlaneMessageId: Scalars['Bytes']['output'];
  /** all fund releases associated with this disaster */
  fundReleases: Array<fundReleaseDescriptive>;
  /** total funds released for this disaster */
  totalFundsReleased: Scalars['BigInt']['output'];
  /** total number of beneficiaries who received funds */
  totalBeneficiaries: Scalars['BigInt']['output'];
};


export type disasterDescriptivefundReleasesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<fundReleaseDescriptive_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<fundReleaseDescriptive_filter>;
};

export type disasterDescriptive_filter = {
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
  description?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType?: InputMaybe<Scalars['String']['input']>;
  disasterType_not?: InputMaybe<Scalars['String']['input']>;
  disasterType_gt?: InputMaybe<Scalars['String']['input']>;
  disasterType_lt?: InputMaybe<Scalars['String']['input']>;
  disasterType_gte?: InputMaybe<Scalars['String']['input']>;
  disasterType_lte?: InputMaybe<Scalars['String']['input']>;
  disasterType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  disasterType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  disasterType_contains?: InputMaybe<Scalars['String']['input']>;
  disasterType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_contains?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType_starts_with?: InputMaybe<Scalars['String']['input']>;
  disasterType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType_ends_with?: InputMaybe<Scalars['String']['input']>;
  disasterType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  disasterType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_gt?: InputMaybe<Scalars['String']['input']>;
  location_lt?: InputMaybe<Scalars['String']['input']>;
  location_gte?: InputMaybe<Scalars['String']['input']>;
  location_lte?: InputMaybe<Scalars['String']['input']>;
  location_in?: InputMaybe<Array<Scalars['String']['input']>>;
  location_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  location_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  location_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  location_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  location_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundsNeeded?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundsNeeded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundsNeeded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ensName?: InputMaybe<Scalars['String']['input']>;
  ensName_not?: InputMaybe<Scalars['String']['input']>;
  ensName_gt?: InputMaybe<Scalars['String']['input']>;
  ensName_lt?: InputMaybe<Scalars['String']['input']>;
  ensName_gte?: InputMaybe<Scalars['String']['input']>;
  ensName_lte?: InputMaybe<Scalars['String']['input']>;
  ensName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ensName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ensName_contains?: InputMaybe<Scalars['String']['input']>;
  ensName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ensName_not_contains?: InputMaybe<Scalars['String']['input']>;
  ensName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ensName_starts_with?: InputMaybe<Scalars['String']['input']>;
  ensName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ensName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ensName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ensName_ends_with?: InputMaybe<Scalars['String']['input']>;
  ensName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ensName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ensName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName?: InputMaybe<Scalars['String']['input']>;
  baseName_not?: InputMaybe<Scalars['String']['input']>;
  baseName_gt?: InputMaybe<Scalars['String']['input']>;
  baseName_lt?: InputMaybe<Scalars['String']['input']>;
  baseName_gte?: InputMaybe<Scalars['String']['input']>;
  baseName_lte?: InputMaybe<Scalars['String']['input']>;
  baseName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseName_contains?: InputMaybe<Scalars['String']['input']>;
  baseName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName_not_contains?: InputMaybe<Scalars['String']['input']>;
  baseName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultAddress?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vaultAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_not?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  hyperlaneMessageId?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_not?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hyperlaneMessageId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hyperlaneMessageId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fundReleases_?: InputMaybe<fundReleaseDescriptive_filter>;
  totalFundsReleased?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundsReleased_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundsReleased_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBeneficiaries?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBeneficiaries_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<disasterDescriptive_filter>>>;
  or?: InputMaybe<Array<InputMaybe<disasterDescriptive_filter>>>;
};

export type disasterDescriptive_orderBy =
  | 'id'
  | 'name'
  | 'description'
  | 'disasterType'
  | 'location'
  | 'createdAt'
  | 'fundsNeeded'
  | 'ensName'
  | 'baseName'
  | 'vaultAddress'
  | 'attestationId'
  | 'transactionHash'
  | 'hyperlaneMessageId'
  | 'fundReleases'
  | 'totalFundsReleased'
  | 'totalBeneficiaries';

export type fundReleaseDescriptive = {
  /** disaster id + beneficiary address + attestation id */
  id: Scalars['ID']['output'];
  /** disaster associated with this fund release */
  disaster: disasterDescriptive;
  /** beneficiary who received the funds */
  beneficiary: beneficiary;
  /** attestation id for this fund release */
  attestationId: Scalars['BigInt']['output'];
  /** comments provided during fund release */
  comments: Scalars['String']['output'];
  /** total USD amount released */
  amountInUSD: Scalars['BigInt']['output'];
  /** hyperlane message id for this fund claim */
  hyperlaneMessageId: Scalars['Bytes']['output'];
  /** claims made across different chains */
  claims: Array<claim>;
  /** transaction hash in which funds were released */
  transactionHash: Scalars['Bytes']['output'];
};


export type fundReleaseDescriptiveclaimsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<claim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<claim_filter>;
};

export type fundReleaseDescriptive_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  disaster?: InputMaybe<Scalars['String']['input']>;
  disaster_not?: InputMaybe<Scalars['String']['input']>;
  disaster_gt?: InputMaybe<Scalars['String']['input']>;
  disaster_lt?: InputMaybe<Scalars['String']['input']>;
  disaster_gte?: InputMaybe<Scalars['String']['input']>;
  disaster_lte?: InputMaybe<Scalars['String']['input']>;
  disaster_in?: InputMaybe<Array<Scalars['String']['input']>>;
  disaster_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  disaster_contains?: InputMaybe<Scalars['String']['input']>;
  disaster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_not_contains?: InputMaybe<Scalars['String']['input']>;
  disaster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_starts_with?: InputMaybe<Scalars['String']['input']>;
  disaster_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  disaster_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_ends_with?: InputMaybe<Scalars['String']['input']>;
  disaster_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  disaster_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disaster_?: InputMaybe<disasterDescriptive_filter>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_lt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_?: InputMaybe<beneficiary_filter>;
  attestationId?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_not?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  comments?: InputMaybe<Scalars['String']['input']>;
  comments_not?: InputMaybe<Scalars['String']['input']>;
  comments_gt?: InputMaybe<Scalars['String']['input']>;
  comments_lt?: InputMaybe<Scalars['String']['input']>;
  comments_gte?: InputMaybe<Scalars['String']['input']>;
  comments_lte?: InputMaybe<Scalars['String']['input']>;
  comments_in?: InputMaybe<Array<Scalars['String']['input']>>;
  comments_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  comments_contains?: InputMaybe<Scalars['String']['input']>;
  comments_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  comments_not_contains?: InputMaybe<Scalars['String']['input']>;
  comments_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  comments_starts_with?: InputMaybe<Scalars['String']['input']>;
  comments_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comments_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  comments_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comments_ends_with?: InputMaybe<Scalars['String']['input']>;
  comments_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comments_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  comments_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  amountInUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountInUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hyperlaneMessageId?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_not?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hyperlaneMessageId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hyperlaneMessageId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hyperlaneMessageId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  claims_?: InputMaybe<claim_filter>;
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
  and?: InputMaybe<Array<InputMaybe<fundReleaseDescriptive_filter>>>;
  or?: InputMaybe<Array<InputMaybe<fundReleaseDescriptive_filter>>>;
};

export type fundReleaseDescriptive_orderBy =
  | 'id'
  | 'disaster'
  | 'disaster__id'
  | 'disaster__name'
  | 'disaster__description'
  | 'disaster__disasterType'
  | 'disaster__location'
  | 'disaster__createdAt'
  | 'disaster__fundsNeeded'
  | 'disaster__ensName'
  | 'disaster__baseName'
  | 'disaster__vaultAddress'
  | 'disaster__attestationId'
  | 'disaster__transactionHash'
  | 'disaster__hyperlaneMessageId'
  | 'disaster__totalFundsReleased'
  | 'disaster__totalBeneficiaries'
  | 'beneficiary'
  | 'beneficiary__id'
  | 'beneficiary__name'
  | 'beneficiary__totalAmountReceived'
  | 'beneficiary__totalFundReleases'
  | 'attestationId'
  | 'comments'
  | 'amountInUSD'
  | 'hyperlaneMessageId'
  | 'claims'
  | 'transactionHash';

  export type QuerySdk = {
      /** null **/
  disasterDescriptive: InContextSdkMethod<Query['disasterDescriptive'], QuerydisasterDescriptiveArgs, MeshContext>,
  /** null **/
  disasterDescriptives: InContextSdkMethod<Query['disasterDescriptives'], QuerydisasterDescriptivesArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Query['beneficiary'], QuerybeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Query['beneficiaries'], QuerybeneficiariesArgs, MeshContext>,
  /** null **/
  fundReleaseDescriptive: InContextSdkMethod<Query['fundReleaseDescriptive'], QueryfundReleaseDescriptiveArgs, MeshContext>,
  /** null **/
  fundReleaseDescriptives: InContextSdkMethod<Query['fundReleaseDescriptives'], QueryfundReleaseDescriptivesArgs, MeshContext>,
  /** null **/
  claim: InContextSdkMethod<Query['claim'], QueryclaimArgs, MeshContext>,
  /** null **/
  claims: InContextSdkMethod<Query['claims'], QueryclaimsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  disasterDescriptive: InContextSdkMethod<Subscription['disasterDescriptive'], SubscriptiondisasterDescriptiveArgs, MeshContext>,
  /** null **/
  disasterDescriptives: InContextSdkMethod<Subscription['disasterDescriptives'], SubscriptiondisasterDescriptivesArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Subscription['beneficiary'], SubscriptionbeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Subscription['beneficiaries'], SubscriptionbeneficiariesArgs, MeshContext>,
  /** null **/
  fundReleaseDescriptive: InContextSdkMethod<Subscription['fundReleaseDescriptive'], SubscriptionfundReleaseDescriptiveArgs, MeshContext>,
  /** null **/
  fundReleaseDescriptives: InContextSdkMethod<Subscription['fundReleaseDescriptives'], SubscriptionfundReleaseDescriptivesArgs, MeshContext>,
  /** null **/
  claim: InContextSdkMethod<Subscription['claim'], SubscriptionclaimArgs, MeshContext>,
  /** null **/
  claims: InContextSdkMethod<Subscription['claims'], SubscriptionclaimsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["NamiAiClient"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
