// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TestingCoreTypes {
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
  disaster?: Maybe<disaster>;
  disasters: Array<disaster>;
  beneficiary?: Maybe<beneficiary>;
  beneficiaries: Array<beneficiary>;
  funding?: Maybe<funding>;
  fundings: Array<funding>;
  claim?: Maybe<claim>;
  claims: Array<claim>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydisasterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydisastersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<disaster_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<disaster_filter>;
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


export type QueryfundingArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<funding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<funding_filter>;
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
  disaster?: Maybe<disaster>;
  disasters: Array<disaster>;
  beneficiary?: Maybe<beneficiary>;
  beneficiaries: Array<beneficiary>;
  funding?: Maybe<funding>;
  fundings: Array<funding>;
  claim?: Maybe<claim>;
  claims: Array<claim>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondisasterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondisastersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<disaster_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<disaster_filter>;
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


export type SubscriptionfundingArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<funding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<funding_filter>;
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
  /** beneficiary address */
  id: Scalars['ID']['output'];
  /** fundings received by this beneficiary */
  fundings: Array<funding>;
  /** total funding amount received in USD */
  totalReceivedAmount: Scalars['BigInt']['output'];
  /** total number of fundings received */
  totalFundingsReceived: Scalars['BigInt']['output'];
  /** total number of claims initiated */
  totalClaimsInitiated: Scalars['BigInt']['output'];
};


export type beneficiaryfundingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<funding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<funding_filter>;
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
  fundings_?: InputMaybe<funding_filter>;
  totalReceivedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalReceivedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReceivedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundingsReceived?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingsReceived_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundingsReceived_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimsInitiated?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimsInitiated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimsInitiated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<beneficiary_filter>>>;
  or?: InputMaybe<Array<InputMaybe<beneficiary_filter>>>;
};

export type beneficiary_orderBy =
  | 'id'
  | 'fundings'
  | 'totalReceivedAmount'
  | 'totalFundingsReceived'
  | 'totalClaimsInitiated';

export type claim = {
  /** funding id + chain id + index */
  id: Scalars['ID']['output'];
  /** the funding this claim belongs to */
  funding: funding;
  /** chain id where claim is to be processed */
  chainId: Scalars['BigInt']['output'];
  /** array of token indices */
  tokens: Array<Scalars['BigInt']['output']>;
  /** array of token amounts */
  amounts: Array<Scalars['BigInt']['output']>;
  /** transaction hash of claim initiation */
  transactionHash: Scalars['Bytes']['output'];
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
  funding?: InputMaybe<Scalars['String']['input']>;
  funding_not?: InputMaybe<Scalars['String']['input']>;
  funding_gt?: InputMaybe<Scalars['String']['input']>;
  funding_lt?: InputMaybe<Scalars['String']['input']>;
  funding_gte?: InputMaybe<Scalars['String']['input']>;
  funding_lte?: InputMaybe<Scalars['String']['input']>;
  funding_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funding_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funding_contains?: InputMaybe<Scalars['String']['input']>;
  funding_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_not_contains?: InputMaybe<Scalars['String']['input']>;
  funding_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_starts_with?: InputMaybe<Scalars['String']['input']>;
  funding_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  funding_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_ends_with?: InputMaybe<Scalars['String']['input']>;
  funding_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  funding_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funding_?: InputMaybe<funding_filter>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<claim_filter>>>;
  or?: InputMaybe<Array<InputMaybe<claim_filter>>>;
};

export type claim_orderBy =
  | 'id'
  | 'funding'
  | 'funding__id'
  | 'funding__amountInUSD'
  | 'funding__claimed'
  | 'funding__attestationId'
  | 'funding__transactionHash'
  | 'chainId'
  | 'tokens'
  | 'amounts'
  | 'transactionHash';

export type disaster = {
  /** the disaster id */
  id: Scalars['ID']['output'];
  /** attestation id for the disaster */
  attestationId: Scalars['Bytes']['output'];
  /** vault address created for the disaster */
  vaultAddress: Scalars['Bytes']['output'];
  /** estimated requirement in USD */
  estimatedRequirementInUSD: Scalars['BigInt']['output'];
  /** all fundings allocated for this disaster */
  fundings: Array<funding>;
  /** total funding amount allocated in USD */
  totalFundingAmount: Scalars['BigInt']['output'];
  /** total number of beneficiaries */
  totalBeneficiaries: Scalars['BigInt']['output'];
  /** transaction hash of disaster creation */
  transactionHash: Scalars['Bytes']['output'];
};


export type disasterfundingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<funding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<funding_filter>;
};

export type disaster_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  attestationId?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_not?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  attestationId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  estimatedRequirementInUSD?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedRequirementInUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  estimatedRequirementInUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundings_?: InputMaybe<funding_filter>;
  totalFundingAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFundingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFundingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBeneficiaries?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBeneficiaries_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBeneficiaries_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<disaster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<disaster_filter>>>;
};

export type disaster_orderBy =
  | 'id'
  | 'attestationId'
  | 'vaultAddress'
  | 'estimatedRequirementInUSD'
  | 'fundings'
  | 'totalFundingAmount'
  | 'totalBeneficiaries'
  | 'transactionHash';

export type funding = {
  /** funding id */
  id: Scalars['ID']['output'];
  /** the disaster this funding belongs to */
  disaster: disaster;
  /** the beneficiary receiving the funding */
  beneficiary: beneficiary;
  /** array of claims across chains */
  claims: Array<claim>;
  /** total funding amount in USD */
  amountInUSD: Scalars['BigInt']['output'];
  /** whether funding has been claimed */
  claimed: Scalars['Boolean']['output'];
  /** attestation id for funding approval */
  attestationId: Scalars['Bytes']['output'];
  /** transaction hash of funding unlock */
  transactionHash: Scalars['Bytes']['output'];
};


export type fundingclaimsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<claim_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<claim_filter>;
};

export type funding_filter = {
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
  disaster_?: InputMaybe<disaster_filter>;
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
  claims_?: InputMaybe<claim_filter>;
  amountInUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountInUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountInUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimed?: InputMaybe<Scalars['Boolean']['input']>;
  claimed_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  attestationId?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_not?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  attestationId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  attestationId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  and?: InputMaybe<Array<InputMaybe<funding_filter>>>;
  or?: InputMaybe<Array<InputMaybe<funding_filter>>>;
};

export type funding_orderBy =
  | 'id'
  | 'disaster'
  | 'disaster__id'
  | 'disaster__attestationId'
  | 'disaster__vaultAddress'
  | 'disaster__estimatedRequirementInUSD'
  | 'disaster__totalFundingAmount'
  | 'disaster__totalBeneficiaries'
  | 'disaster__transactionHash'
  | 'beneficiary'
  | 'beneficiary__id'
  | 'beneficiary__totalReceivedAmount'
  | 'beneficiary__totalFundingsReceived'
  | 'beneficiary__totalClaimsInitiated'
  | 'claims'
  | 'amountInUSD'
  | 'claimed'
  | 'attestationId'
  | 'transactionHash';

  export type QuerySdk = {
      /** null **/
  disaster: InContextSdkMethod<Query['disaster'], QuerydisasterArgs, MeshContext>,
  /** null **/
  disasters: InContextSdkMethod<Query['disasters'], QuerydisastersArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Query['beneficiary'], QuerybeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Query['beneficiaries'], QuerybeneficiariesArgs, MeshContext>,
  /** null **/
  funding: InContextSdkMethod<Query['funding'], QueryfundingArgs, MeshContext>,
  /** null **/
  fundings: InContextSdkMethod<Query['fundings'], QueryfundingsArgs, MeshContext>,
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
  disaster: InContextSdkMethod<Subscription['disaster'], SubscriptiondisasterArgs, MeshContext>,
  /** null **/
  disasters: InContextSdkMethod<Subscription['disasters'], SubscriptiondisastersArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Subscription['beneficiary'], SubscriptionbeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Subscription['beneficiaries'], SubscriptionbeneficiariesArgs, MeshContext>,
  /** null **/
  funding: InContextSdkMethod<Subscription['funding'], SubscriptionfundingArgs, MeshContext>,
  /** null **/
  fundings: InContextSdkMethod<Subscription['fundings'], SubscriptionfundingsArgs, MeshContext>,
  /** null **/
  claim: InContextSdkMethod<Subscription['claim'], SubscriptionclaimArgs, MeshContext>,
  /** null **/
  claims: InContextSdkMethod<Subscription['claims'], SubscriptionclaimsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["TestingCore"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
