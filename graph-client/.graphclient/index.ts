// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TestingCoreTypes } from './sources/TestingCore/types';
import * as importedModule$0 from "./sources/TestingCore/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  beneficiary: ResolverTypeWrapper<beneficiary>;
  beneficiary_filter: beneficiary_filter;
  beneficiary_orderBy: beneficiary_orderBy;
  claim: ResolverTypeWrapper<claim>;
  claim_filter: claim_filter;
  claim_orderBy: claim_orderBy;
  disaster: ResolverTypeWrapper<disaster>;
  disaster_filter: disaster_filter;
  disaster_orderBy: disaster_orderBy;
  funding: ResolverTypeWrapper<funding>;
  funding_filter: funding_filter;
  funding_orderBy: funding_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  Timestamp: Scalars['Timestamp']['output'];
  _Block_: _Block_;
  _Meta_: _Meta_;
  beneficiary: beneficiary;
  beneficiary_filter: beneficiary_filter;
  claim: claim;
  claim_filter: claim_filter;
  disaster: disaster;
  disaster_filter: disaster_filter;
  funding: funding;
  funding_filter: funding_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  disaster?: Resolver<Maybe<ResolversTypes['disaster']>, ParentType, ContextType, RequireFields<QuerydisasterArgs, 'id' | 'subgraphError'>>;
  disasters?: Resolver<Array<ResolversTypes['disaster']>, ParentType, ContextType, RequireFields<QuerydisastersArgs, 'skip' | 'first' | 'subgraphError'>>;
  beneficiary?: Resolver<Maybe<ResolversTypes['beneficiary']>, ParentType, ContextType, RequireFields<QuerybeneficiaryArgs, 'id' | 'subgraphError'>>;
  beneficiaries?: Resolver<Array<ResolversTypes['beneficiary']>, ParentType, ContextType, RequireFields<QuerybeneficiariesArgs, 'skip' | 'first' | 'subgraphError'>>;
  funding?: Resolver<Maybe<ResolversTypes['funding']>, ParentType, ContextType, RequireFields<QueryfundingArgs, 'id' | 'subgraphError'>>;
  fundings?: Resolver<Array<ResolversTypes['funding']>, ParentType, ContextType, RequireFields<QueryfundingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claim?: Resolver<Maybe<ResolversTypes['claim']>, ParentType, ContextType, RequireFields<QueryclaimArgs, 'id' | 'subgraphError'>>;
  claims?: Resolver<Array<ResolversTypes['claim']>, ParentType, ContextType, RequireFields<QueryclaimsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  disaster?: SubscriptionResolver<Maybe<ResolversTypes['disaster']>, "disaster", ParentType, ContextType, RequireFields<SubscriptiondisasterArgs, 'id' | 'subgraphError'>>;
  disasters?: SubscriptionResolver<Array<ResolversTypes['disaster']>, "disasters", ParentType, ContextType, RequireFields<SubscriptiondisastersArgs, 'skip' | 'first' | 'subgraphError'>>;
  beneficiary?: SubscriptionResolver<Maybe<ResolversTypes['beneficiary']>, "beneficiary", ParentType, ContextType, RequireFields<SubscriptionbeneficiaryArgs, 'id' | 'subgraphError'>>;
  beneficiaries?: SubscriptionResolver<Array<ResolversTypes['beneficiary']>, "beneficiaries", ParentType, ContextType, RequireFields<SubscriptionbeneficiariesArgs, 'skip' | 'first' | 'subgraphError'>>;
  funding?: SubscriptionResolver<Maybe<ResolversTypes['funding']>, "funding", ParentType, ContextType, RequireFields<SubscriptionfundingArgs, 'id' | 'subgraphError'>>;
  fundings?: SubscriptionResolver<Array<ResolversTypes['funding']>, "fundings", ParentType, ContextType, RequireFields<SubscriptionfundingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claim?: SubscriptionResolver<Maybe<ResolversTypes['claim']>, "claim", ParentType, ContextType, RequireFields<SubscriptionclaimArgs, 'id' | 'subgraphError'>>;
  claims?: SubscriptionResolver<Array<ResolversTypes['claim']>, "claims", ParentType, ContextType, RequireFields<SubscriptionclaimsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type beneficiaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['beneficiary'] = ResolversParentTypes['beneficiary']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fundings?: Resolver<Array<ResolversTypes['funding']>, ParentType, ContextType, RequireFields<beneficiaryfundingsArgs, 'skip' | 'first'>>;
  totalReceivedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFundingsReceived?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalClaimsInitiated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type claimResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['claim'] = ResolversParentTypes['claim']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  funding?: Resolver<ResolversTypes['funding'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type disasterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['disaster'] = ResolversParentTypes['disaster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  attestationId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  vaultAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  estimatedRequirementInUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fundings?: Resolver<Array<ResolversTypes['funding']>, ParentType, ContextType, RequireFields<disasterfundingsArgs, 'skip' | 'first'>>;
  totalFundingAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalBeneficiaries?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type fundingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['funding'] = ResolversParentTypes['funding']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  disaster?: Resolver<ResolversTypes['disaster'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['beneficiary'], ParentType, ContextType>;
  claims?: Resolver<Array<ResolversTypes['claim']>, ParentType, ContextType, RequireFields<fundingclaimsArgs, 'skip' | 'first'>>;
  amountInUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  attestationId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  beneficiary?: beneficiaryResolvers<ContextType>;
  claim?: claimResolvers<ContextType>;
  disaster?: disasterResolvers<ContextType>;
  funding?: fundingResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TestingCoreTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/TestingCore/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const testingCoreTransforms = [];
const additionalTypeDefs = [] as any[];
const testingCoreHandler = new GraphqlHandler({
              name: "TestingCore",
              config: {"endpoint":"https://api.studio.thegraph.com/query/30735/testing-core/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("TestingCore"),
              logger: logger.child("TestingCore"),
              importFn,
            });
sources[0] = {
          name: 'TestingCore',
          handler: testingCoreHandler,
          transforms: testingCoreTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "90e2ba83e81fae9dddd1637a8e35b5a00dd1029359e658dc8b342235c059573a": GetDisastersDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetDisastersDocument,
        get rawSDL() {
          return printWithCache(GetDisastersDocument);
        },
        location: 'GetDisastersDocument.graphql',
        sha256Hash: '90e2ba83e81fae9dddd1637a8e35b5a00dd1029359e658dc8b342235c059573a'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetDisastersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDisastersQuery = { disasters: Array<Pick<disaster, 'id' | 'attestationId' | 'estimatedRequirementInUSD' | 'totalFundingAmount' | 'transactionHash' | 'vaultAddress'>> };


export const GetDisastersDocument = gql`
    query GetDisasters {
  disasters {
    id
    attestationId
    estimatedRequirementInUSD
    totalFundingAmount
    transactionHash
    vaultAddress
  }
}
    ` as unknown as DocumentNode<GetDisastersQuery, GetDisastersQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetDisasters(variables?: GetDisastersQueryVariables, options?: C): Promise<GetDisastersQuery> {
      return requester<GetDisastersQuery, GetDisastersQueryVariables>(GetDisastersDocument, variables, options) as Promise<GetDisastersQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;