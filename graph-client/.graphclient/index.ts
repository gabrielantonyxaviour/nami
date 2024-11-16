// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EthereumTransfersTypes } from './sources/EthereumTransfers/types';
import type { PolygonTransfersTypes } from './sources/PolygonTransfers/types';
import type { NamiAiClientTypes } from './sources/NamiAiClient/types';
import type { BaseTransfersTypes } from './sources/BaseTransfers/types';
import type { KintoTransfersTypes } from './sources/KintoTransfers/types';
import type { NamiCoreTypes } from './sources/NamiCore/types';
import type { ScrollTransfersTypes } from './sources/ScrollTransfers/types';
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
  disasterDescriptive?: Maybe<disasterDescriptive>;
  disasterDescriptives: Array<disasterDescriptive>;
  fundReleaseDescriptive?: Maybe<fundReleaseDescriptive>;
  fundReleaseDescriptives: Array<fundReleaseDescriptive>;
  kintoToken?: Maybe<kintoToken>;
  kintoTokens: Array<kintoToken>;
  kintoAccount?: Maybe<kintoAccount>;
  kintoAccounts: Array<kintoAccount>;
  kintoBalance?: Maybe<kintoBalance>;
  kintoBalances: Array<kintoBalance>;
  kintoTransfer?: Maybe<kintoTransfer>;
  kintoTransfers: Array<kintoTransfer>;
  kintoVault?: Maybe<kintoVault>;
  kintoVaults: Array<kintoVault>;
  polToken?: Maybe<polToken>;
  polTokens: Array<polToken>;
  polAccount?: Maybe<polAccount>;
  polAccounts: Array<polAccount>;
  polBalance?: Maybe<polBalance>;
  polBalances: Array<polBalance>;
  polTransfer?: Maybe<polTransfer>;
  polTransfers: Array<polTransfer>;
  polVault?: Maybe<polVault>;
  polVaults: Array<polVault>;
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
  baseToken?: Maybe<baseToken>;
  baseTokens: Array<baseToken>;
  baseAccount?: Maybe<baseAccount>;
  baseAccounts: Array<baseAccount>;
  baseBalance?: Maybe<baseBalance>;
  baseBalances: Array<baseBalance>;
  baseTransfer?: Maybe<baseTransfer>;
  baseTransfers: Array<baseTransfer>;
  baseVault?: Maybe<baseVault>;
  baseVaults: Array<baseVault>;
  scrollToken?: Maybe<scrollToken>;
  scrollTokens: Array<scrollToken>;
  scrollAccount?: Maybe<scrollAccount>;
  scrollAccounts: Array<scrollAccount>;
  scrollBalance?: Maybe<scrollBalance>;
  scrollBalances: Array<scrollBalance>;
  scrollTransfer?: Maybe<scrollTransfer>;
  scrollTransfers: Array<scrollTransfer>;
  scrollVault?: Maybe<scrollVault>;
  scrollVaults: Array<scrollVault>;
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


export type QuerykintoTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykintoVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypolVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QuerybaseTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybaseVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscrollVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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
  disasterDescriptive?: Maybe<disasterDescriptive>;
  disasterDescriptives: Array<disasterDescriptive>;
  fundReleaseDescriptive?: Maybe<fundReleaseDescriptive>;
  fundReleaseDescriptives: Array<fundReleaseDescriptive>;
  kintoToken?: Maybe<kintoToken>;
  kintoTokens: Array<kintoToken>;
  kintoAccount?: Maybe<kintoAccount>;
  kintoAccounts: Array<kintoAccount>;
  kintoBalance?: Maybe<kintoBalance>;
  kintoBalances: Array<kintoBalance>;
  kintoTransfer?: Maybe<kintoTransfer>;
  kintoTransfers: Array<kintoTransfer>;
  kintoVault?: Maybe<kintoVault>;
  kintoVaults: Array<kintoVault>;
  polToken?: Maybe<polToken>;
  polTokens: Array<polToken>;
  polAccount?: Maybe<polAccount>;
  polAccounts: Array<polAccount>;
  polBalance?: Maybe<polBalance>;
  polBalances: Array<polBalance>;
  polTransfer?: Maybe<polTransfer>;
  polTransfers: Array<polTransfer>;
  polVault?: Maybe<polVault>;
  polVaults: Array<polVault>;
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
  baseToken?: Maybe<baseToken>;
  baseTokens: Array<baseToken>;
  baseAccount?: Maybe<baseAccount>;
  baseAccounts: Array<baseAccount>;
  baseBalance?: Maybe<baseBalance>;
  baseBalances: Array<baseBalance>;
  baseTransfer?: Maybe<baseTransfer>;
  baseTransfers: Array<baseTransfer>;
  baseVault?: Maybe<baseVault>;
  baseVaults: Array<baseVault>;
  scrollToken?: Maybe<scrollToken>;
  scrollTokens: Array<scrollToken>;
  scrollAccount?: Maybe<scrollAccount>;
  scrollAccounts: Array<scrollAccount>;
  scrollBalance?: Maybe<scrollBalance>;
  scrollBalances: Array<scrollBalance>;
  scrollTransfer?: Maybe<scrollTransfer>;
  scrollTransfers: Array<scrollTransfer>;
  scrollVault?: Maybe<scrollVault>;
  scrollVaults: Array<scrollVault>;
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


export type SubscriptionkintoTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkintoVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpolVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type SubscriptionbaseTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbaseVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollVaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscrollVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollVault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollVault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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
  /** fundings received by this beneficiary */
  fundings: Array<funding>;
  /** total funding amount received in USD */
  totalReceivedAmount: Scalars['BigInt']['output'];
  /** total number of fundings received */
  totalFundingsReceived: Scalars['BigInt']['output'];
  /** total number of claims initiated */
  totalClaimsInitiated: Scalars['BigInt']['output'];
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


export type beneficiaryfundingsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<funding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<funding_filter>;
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
};

export type beneficiary_orderBy =
  | 'id'
  | 'fundings'
  | 'totalReceivedAmount'
  | 'totalFundingsReceived'
  | 'totalClaimsInitiated'
  | 'name'
  | 'receivedFunds'
  | 'totalAmountReceived'
  | 'totalFundReleases'
  | 'disasters';

export type claim = {
  /** fund release id + chain id */
  id: Scalars['ID']['output'];
  /** the funding this claim belongs to */
  funding: funding;
  /** chain id where claim was made */
  chainId: Scalars['BigInt']['output'];
  /** amounts claimed for each token */
  amounts: Array<Scalars['BigInt']['output']>;
  /** transaction hash of claim initiation */
  transactionHash: Scalars['Bytes']['output'];
  /** fund release associated with this claim */
  fundReleaseDescriptive: fundReleaseDescriptive;
  /** tokens claimed (0: Native, 1: WETH, 2: USDC, 3: USDT) */
  tokens: Array<Scalars['Int']['output']>;
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
  | 'amounts'
  | 'transactionHash'
  | 'fundReleaseDescriptive'
  | 'fundReleaseDescriptive__id'
  | 'fundReleaseDescriptive__attestationId'
  | 'fundReleaseDescriptive__comments'
  | 'fundReleaseDescriptive__amountInUSD'
  | 'fundReleaseDescriptive__hyperlaneMessageId'
  | 'fundReleaseDescriptive__transactionHash'
  | 'tokens';

export type disaster = {
  /** the disaster id */
  id: Scalars['ID']['output'];
  /** attestation id for the disaster */
  attestationId: Scalars['String']['output'];
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
  attestationId?: InputMaybe<Scalars['String']['input']>;
  attestationId_not?: InputMaybe<Scalars['String']['input']>;
  attestationId_gt?: InputMaybe<Scalars['String']['input']>;
  attestationId_lt?: InputMaybe<Scalars['String']['input']>;
  attestationId_gte?: InputMaybe<Scalars['String']['input']>;
  attestationId_lte?: InputMaybe<Scalars['String']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestationId_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  attestationId: Scalars['String']['output'];
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
  attestationId?: InputMaybe<Scalars['String']['input']>;
  attestationId_not?: InputMaybe<Scalars['String']['input']>;
  attestationId_gt?: InputMaybe<Scalars['String']['input']>;
  attestationId_lt?: InputMaybe<Scalars['String']['input']>;
  attestationId_gte?: InputMaybe<Scalars['String']['input']>;
  attestationId_lte?: InputMaybe<Scalars['String']['input']>;
  attestationId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestationId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestationId_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
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

export type kintoAccount = {
  /** account address */
  id: Scalars['ID']['output'];
  /** transfers where this account is the sender */
  transfersOut: Array<kintoTransfer>;
  /** transfers where this account is the receiver */
  transfersIn: Array<kintoTransfer>;
  /** balances for each kintoToken */
  balances: Array<kintoBalance>;
};


export type kintoAccounttransfersOutArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
};


export type kintoAccounttransfersInArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
};


export type kintoAccountbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoBalance_filter>;
};

export type kintoAccount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transfersOut_?: InputMaybe<kintoTransfer_filter>;
  transfersIn_?: InputMaybe<kintoTransfer_filter>;
  balances_?: InputMaybe<kintoBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<kintoAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<kintoAccount_filter>>>;
};

export type kintoAccount_orderBy =
  | 'id'
  | 'transfersOut'
  | 'transfersIn'
  | 'balances';

export type kintoBalance = {
  /** account address + kintoToken address */
  id: Scalars['ID']['output'];
  /** the account that holds the balance */
  account: kintoAccount;
  /** the kintoToken */
  token: kintoToken;
  /** the vault if this balance belongs to one */
  vault?: Maybe<kintoVault>;
  /** current balance */
  amount: Scalars['BigInt']['output'];
  /** block number of last update */
  lastUpdateBlock: Scalars['BigInt']['output'];
  /** timestamp of last update */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
};

export type kintoBalance_filter = {
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
  account_?: InputMaybe<kintoAccount_filter>;
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
  token_?: InputMaybe<kintoToken_filter>;
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
  vault_?: InputMaybe<kintoVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<kintoBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<kintoBalance_filter>>>;
};

export type kintoBalance_orderBy =
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

export type kintoToken = {
  /** kintoToken contract address */
  id: Scalars['ID']['output'];
  /** kintoToken name */
  name: Scalars['String']['output'];
  /** kintoToken symbol */
  symbol: Scalars['String']['output'];
  /** all transfers of this kintoToken */
  transfers: Array<kintoTransfer>;
};


export type kintoTokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
};

export type kintoToken_filter = {
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
  transfers_?: InputMaybe<kintoTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<kintoToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<kintoToken_filter>>>;
};

export type kintoToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'transfers';

export type kintoTransfer = {
  /** transaction hash + log index */
  id: Scalars['ID']['output'];
  /** the kintoToken being transferred */
  token: kintoToken;
  /** sender address */
  from: kintoAccount;
  /** receiver address */
  to: kintoAccount;
  /** vault if this is a vault deposit */
  vault?: Maybe<kintoVault>;
  /** amount transferred */
  amount: Scalars['BigInt']['output'];
  /** block number */
  blockNumber: Scalars['BigInt']['output'];
  /** block timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** transaction hash */
  transactionHash: Scalars['Bytes']['output'];
};

export type kintoTransfer_filter = {
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
  token_?: InputMaybe<kintoToken_filter>;
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
  from_?: InputMaybe<kintoAccount_filter>;
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
  to_?: InputMaybe<kintoAccount_filter>;
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
  vault_?: InputMaybe<kintoVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<kintoTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<kintoTransfer_filter>>>;
};

export type kintoTransfer_orderBy =
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

export type kintoVault = {
  /** vault address */
  id: Scalars['ID']['output'];
  /** deposits received by this vault */
  deposits: Array<kintoTransfer>;
  /** total value locked in vault per kintoToken */
  tokenBalances: Array<kintoBalance>;
  /** total number of depositors */
  totalDepositors: Scalars['BigInt']['output'];
  /** total value locked across all tokens */
  totalValueLocked: Scalars['BigInt']['output'];
};


export type kintoVaultdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoTransfer_filter>;
};


export type kintoVaulttokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<kintoBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<kintoBalance_filter>;
};

export type kintoVault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deposits_?: InputMaybe<kintoTransfer_filter>;
  tokenBalances_?: InputMaybe<kintoBalance_filter>;
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
  and?: InputMaybe<Array<InputMaybe<kintoVault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<kintoVault_filter>>>;
};

export type kintoVault_orderBy =
  | 'id'
  | 'deposits'
  | 'tokenBalances'
  | 'totalDepositors'
  | 'totalValueLocked';

export type polAccount = {
  /** polAccount address */
  id: Scalars['ID']['output'];
  /** transfers where this polAccount is the sender */
  transfersOut: Array<polTransfer>;
  /** transfers where this polAccount is the receiver */
  transfersIn: Array<polTransfer>;
  /** balances for each polToken */
  balances: Array<polBalance>;
};


export type polAccounttransfersOutArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
};


export type polAccounttransfersInArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
};


export type polAccountbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polBalance_filter>;
};

export type polAccount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transfersOut_?: InputMaybe<polTransfer_filter>;
  transfersIn_?: InputMaybe<polTransfer_filter>;
  balances_?: InputMaybe<polBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<polAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<polAccount_filter>>>;
};

export type polAccount_orderBy =
  | 'id'
  | 'transfersOut'
  | 'transfersIn'
  | 'balances';

export type polBalance = {
  /** polAccount address + polToken address */
  id: Scalars['ID']['output'];
  /** the polAccount that holds the polBalance */
  account: polAccount;
  /** the polToken */
  token: polToken;
  /** the polVault if this polBalance belongs to one */
  vault?: Maybe<polVault>;
  /** current polBalance */
  amount: Scalars['BigInt']['output'];
  /** block number of last update */
  lastUpdateBlock: Scalars['BigInt']['output'];
  /** timestamp of last update */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
};

export type polBalance_filter = {
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
  account_?: InputMaybe<polAccount_filter>;
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
  token_?: InputMaybe<polToken_filter>;
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
  vault_?: InputMaybe<polVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<polBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<polBalance_filter>>>;
};

export type polBalance_orderBy =
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

export type polToken = {
  /** polToken contract address */
  id: Scalars['ID']['output'];
  /** polToken name */
  name: Scalars['String']['output'];
  /** polToken symbol */
  symbol: Scalars['String']['output'];
  /** all transfers of this polToken */
  transfers: Array<polTransfer>;
};


export type polTokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
};

export type polToken_filter = {
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
  transfers_?: InputMaybe<polTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<polToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<polToken_filter>>>;
};

export type polToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'transfers';

export type polTransfer = {
  /** transaction hash + log index */
  id: Scalars['ID']['output'];
  /** the polToken being transferred */
  token: polToken;
  /** sender address */
  from: polAccount;
  /** receiver address */
  to: polAccount;
  /** polVault if this is a polVault deposit */
  vault?: Maybe<polVault>;
  /** amount transferred */
  amount: Scalars['BigInt']['output'];
  /** block number */
  blockNumber: Scalars['BigInt']['output'];
  /** block timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** transaction hash */
  transactionHash: Scalars['Bytes']['output'];
};

export type polTransfer_filter = {
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
  token_?: InputMaybe<polToken_filter>;
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
  from_?: InputMaybe<polAccount_filter>;
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
  to_?: InputMaybe<polAccount_filter>;
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
  vault_?: InputMaybe<polVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<polTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<polTransfer_filter>>>;
};

export type polTransfer_orderBy =
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

export type polVault = {
  /** polVault address */
  id: Scalars['ID']['output'];
  /** deposits received by this polVault */
  deposits: Array<polTransfer>;
  /** total value locked in polVault per polToken */
  tokenBalances: Array<polBalance>;
  /** total number of depositors */
  totalDepositors: Scalars['BigInt']['output'];
  /** total value locked across all tokens */
  totalValueLocked: Scalars['BigInt']['output'];
};


export type polVaultdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polTransfer_filter>;
};


export type polVaulttokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<polBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<polBalance_filter>;
};

export type polVault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deposits_?: InputMaybe<polTransfer_filter>;
  tokenBalances_?: InputMaybe<polBalance_filter>;
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
  and?: InputMaybe<Array<InputMaybe<polVault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<polVault_filter>>>;
};

export type polVault_orderBy =
  | 'id'
  | 'deposits'
  | 'tokenBalances'
  | 'totalDepositors'
  | 'totalValueLocked';

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

export type baseAccount = {
  /** account address */
  id: Scalars['ID']['output'];
  /** transfers where this account is the sender */
  transfersOut: Array<baseTransfer>;
  /** transfers where this account is the receiver */
  transfersIn: Array<baseTransfer>;
  /** balances for each token */
  balances: Array<baseBalance>;
};


export type baseAccounttransfersOutArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
};


export type baseAccounttransfersInArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
};


export type baseAccountbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseBalance_filter>;
};

export type baseAccount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transfersOut_?: InputMaybe<baseTransfer_filter>;
  transfersIn_?: InputMaybe<baseTransfer_filter>;
  balances_?: InputMaybe<baseBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<baseAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<baseAccount_filter>>>;
};

export type baseAccount_orderBy =
  | 'id'
  | 'transfersOut'
  | 'transfersIn'
  | 'balances';

export type baseBalance = {
  /** account address + token address */
  id: Scalars['ID']['output'];
  /** the account that holds the baseBalance */
  account: baseAccount;
  /** the token */
  token: baseToken;
  /** the vault if this baseBalance belongs to one */
  vault?: Maybe<baseVault>;
  /** current baseBalance */
  amount: Scalars['BigInt']['output'];
  /** block number of last update */
  lastUpdateBlock: Scalars['BigInt']['output'];
  /** timestamp of last update */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
};

export type baseBalance_filter = {
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
  account_?: InputMaybe<baseAccount_filter>;
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
  token_?: InputMaybe<baseToken_filter>;
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
  vault_?: InputMaybe<baseVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<baseBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<baseBalance_filter>>>;
};

export type baseBalance_orderBy =
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

export type baseToken = {
  /** token contract address */
  id: Scalars['ID']['output'];
  /** token name */
  name: Scalars['String']['output'];
  /** token symbol */
  symbol: Scalars['String']['output'];
  /** all transfers of this token */
  transfers: Array<baseTransfer>;
};


export type baseTokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
};

export type baseToken_filter = {
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
  transfers_?: InputMaybe<baseTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<baseToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<baseToken_filter>>>;
};

export type baseToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'transfers';

export type baseTransfer = {
  /** transaction hash + log index */
  id: Scalars['ID']['output'];
  /** the token being transferred */
  token: baseToken;
  /** sender address */
  from: baseAccount;
  /** receiver address */
  to: baseAccount;
  /** vault if this is a vault deposit */
  vault?: Maybe<baseVault>;
  /** amount transferred */
  amount: Scalars['BigInt']['output'];
  /** block number */
  blockNumber: Scalars['BigInt']['output'];
  /** block timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** transaction hash */
  transactionHash: Scalars['Bytes']['output'];
};

export type baseTransfer_filter = {
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
  token_?: InputMaybe<baseToken_filter>;
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
  from_?: InputMaybe<baseAccount_filter>;
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
  to_?: InputMaybe<baseAccount_filter>;
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
  vault_?: InputMaybe<baseVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<baseTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<baseTransfer_filter>>>;
};

export type baseTransfer_orderBy =
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

export type baseVault = {
  /** vault address */
  id: Scalars['ID']['output'];
  /** deposits received by this vault */
  deposits: Array<baseTransfer>;
  /** total value locked in vault per token */
  tokenBalances: Array<baseBalance>;
  /** total number of depositors */
  totalDepositors: Scalars['BigInt']['output'];
  /** total value locked across all tokens */
  totalValueLocked: Scalars['BigInt']['output'];
};


export type baseVaultdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseTransfer_filter>;
};


export type baseVaulttokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<baseBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<baseBalance_filter>;
};

export type baseVault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deposits_?: InputMaybe<baseTransfer_filter>;
  tokenBalances_?: InputMaybe<baseBalance_filter>;
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
  and?: InputMaybe<Array<InputMaybe<baseVault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<baseVault_filter>>>;
};

export type baseVault_orderBy =
  | 'id'
  | 'deposits'
  | 'tokenBalances'
  | 'totalDepositors'
  | 'totalValueLocked';

export type scrollAccount = {
  /** scrollAccount address */
  id: Scalars['ID']['output'];
  /** transfers where this scrollAccount is the sender */
  transfersOut: Array<scrollTransfer>;
  /** transfers where this scrollAccount is the receiver */
  transfersIn: Array<scrollTransfer>;
  /** balances for each scrollToken */
  balances: Array<scrollBalance>;
};


export type scrollAccounttransfersOutArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
};


export type scrollAccounttransfersInArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
};


export type scrollAccountbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollBalance_filter>;
};

export type scrollAccount_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transfersOut_?: InputMaybe<scrollTransfer_filter>;
  transfersIn_?: InputMaybe<scrollTransfer_filter>;
  balances_?: InputMaybe<scrollBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<scrollAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<scrollAccount_filter>>>;
};

export type scrollAccount_orderBy =
  | 'id'
  | 'transfersOut'
  | 'transfersIn'
  | 'balances';

export type scrollBalance = {
  /** scrollAccount address + scrollToken address */
  id: Scalars['ID']['output'];
  /** the scrollAccount that holds the scrollBalance */
  account: scrollAccount;
  /** the scrollToken */
  token: scrollToken;
  /** the scrollVault if this scrollBalance belongs to one */
  vault?: Maybe<scrollVault>;
  /** current scrollBalance */
  amount: Scalars['BigInt']['output'];
  /** block number of last update */
  lastUpdateBlock: Scalars['BigInt']['output'];
  /** timestamp of last update */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
};

export type scrollBalance_filter = {
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
  account_?: InputMaybe<scrollAccount_filter>;
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
  token_?: InputMaybe<scrollToken_filter>;
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
  vault_?: InputMaybe<scrollVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<scrollBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<scrollBalance_filter>>>;
};

export type scrollBalance_orderBy =
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

export type scrollToken = {
  /** scrollToken contract address */
  id: Scalars['ID']['output'];
  /** scrollToken name */
  name: Scalars['String']['output'];
  /** scrollToken symbol */
  symbol: Scalars['String']['output'];
  /** all transfers of this scrollToken */
  transfers: Array<scrollTransfer>;
};


export type scrollTokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
};

export type scrollToken_filter = {
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
  transfers_?: InputMaybe<scrollTransfer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<scrollToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<scrollToken_filter>>>;
};

export type scrollToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'transfers';

export type scrollTransfer = {
  /** transaction hash + log index */
  id: Scalars['ID']['output'];
  /** the scrollToken being transferred */
  token: scrollToken;
  /** sender address */
  from: scrollAccount;
  /** receiver address */
  to: scrollAccount;
  /** scrollVault if this is a scrollVault deposit */
  vault?: Maybe<scrollVault>;
  /** amount transferred */
  amount: Scalars['BigInt']['output'];
  /** block number */
  blockNumber: Scalars['BigInt']['output'];
  /** block timestamp */
  timestamp: Scalars['BigInt']['output'];
  /** transaction hash */
  transactionHash: Scalars['Bytes']['output'];
};

export type scrollTransfer_filter = {
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
  token_?: InputMaybe<scrollToken_filter>;
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
  from_?: InputMaybe<scrollAccount_filter>;
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
  to_?: InputMaybe<scrollAccount_filter>;
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
  vault_?: InputMaybe<scrollVault_filter>;
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
  and?: InputMaybe<Array<InputMaybe<scrollTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<scrollTransfer_filter>>>;
};

export type scrollTransfer_orderBy =
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

export type scrollVault = {
  /** scrollVault address */
  id: Scalars['ID']['output'];
  /** deposits received by this scrollVault */
  deposits: Array<scrollTransfer>;
  /** total value locked in scrollVault per scrollToken */
  tokenBalances: Array<scrollBalance>;
  /** total number of depositors */
  totalDepositors: Scalars['BigInt']['output'];
  /** total value locked across all tokens */
  totalValueLocked: Scalars['BigInt']['output'];
};


export type scrollVaultdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollTransfer_filter>;
};


export type scrollVaulttokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<scrollBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<scrollBalance_filter>;
};

export type scrollVault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deposits_?: InputMaybe<scrollTransfer_filter>;
  tokenBalances_?: InputMaybe<scrollBalance_filter>;
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
  and?: InputMaybe<Array<InputMaybe<scrollVault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<scrollVault_filter>>>;
};

export type scrollVault_orderBy =
  | 'id'
  | 'deposits'
  | 'tokenBalances'
  | 'totalDepositors'
  | 'totalValueLocked';

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
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
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
  String: ResolverTypeWrapper<Scalars['String']['output']>;
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
  disasterDescriptive: ResolverTypeWrapper<disasterDescriptive>;
  disasterDescriptive_filter: disasterDescriptive_filter;
  disasterDescriptive_orderBy: disasterDescriptive_orderBy;
  fundReleaseDescriptive: ResolverTypeWrapper<fundReleaseDescriptive>;
  fundReleaseDescriptive_filter: fundReleaseDescriptive_filter;
  fundReleaseDescriptive_orderBy: fundReleaseDescriptive_orderBy;
  kintoAccount: ResolverTypeWrapper<kintoAccount>;
  kintoAccount_filter: kintoAccount_filter;
  kintoAccount_orderBy: kintoAccount_orderBy;
  kintoBalance: ResolverTypeWrapper<kintoBalance>;
  kintoBalance_filter: kintoBalance_filter;
  kintoBalance_orderBy: kintoBalance_orderBy;
  kintoToken: ResolverTypeWrapper<kintoToken>;
  kintoToken_filter: kintoToken_filter;
  kintoToken_orderBy: kintoToken_orderBy;
  kintoTransfer: ResolverTypeWrapper<kintoTransfer>;
  kintoTransfer_filter: kintoTransfer_filter;
  kintoTransfer_orderBy: kintoTransfer_orderBy;
  kintoVault: ResolverTypeWrapper<kintoVault>;
  kintoVault_filter: kintoVault_filter;
  kintoVault_orderBy: kintoVault_orderBy;
  polAccount: ResolverTypeWrapper<polAccount>;
  polAccount_filter: polAccount_filter;
  polAccount_orderBy: polAccount_orderBy;
  polBalance: ResolverTypeWrapper<polBalance>;
  polBalance_filter: polBalance_filter;
  polBalance_orderBy: polBalance_orderBy;
  polToken: ResolverTypeWrapper<polToken>;
  polToken_filter: polToken_filter;
  polToken_orderBy: polToken_orderBy;
  polTransfer: ResolverTypeWrapper<polTransfer>;
  polTransfer_filter: polTransfer_filter;
  polTransfer_orderBy: polTransfer_orderBy;
  polVault: ResolverTypeWrapper<polVault>;
  polVault_filter: polVault_filter;
  polVault_orderBy: polVault_orderBy;
  ethAccount: ResolverTypeWrapper<ethAccount>;
  ethAccount_filter: ethAccount_filter;
  ethAccount_orderBy: ethAccount_orderBy;
  ethBalance: ResolverTypeWrapper<ethBalance>;
  ethBalance_filter: ethBalance_filter;
  ethBalance_orderBy: ethBalance_orderBy;
  ethToken: ResolverTypeWrapper<ethToken>;
  ethToken_filter: ethToken_filter;
  ethToken_orderBy: ethToken_orderBy;
  ethTransfer: ResolverTypeWrapper<ethTransfer>;
  ethTransfer_filter: ethTransfer_filter;
  ethTransfer_orderBy: ethTransfer_orderBy;
  ethVault: ResolverTypeWrapper<ethVault>;
  ethVault_filter: ethVault_filter;
  ethVault_orderBy: ethVault_orderBy;
  baseAccount: ResolverTypeWrapper<baseAccount>;
  baseAccount_filter: baseAccount_filter;
  baseAccount_orderBy: baseAccount_orderBy;
  baseBalance: ResolverTypeWrapper<baseBalance>;
  baseBalance_filter: baseBalance_filter;
  baseBalance_orderBy: baseBalance_orderBy;
  baseToken: ResolverTypeWrapper<baseToken>;
  baseToken_filter: baseToken_filter;
  baseToken_orderBy: baseToken_orderBy;
  baseTransfer: ResolverTypeWrapper<baseTransfer>;
  baseTransfer_filter: baseTransfer_filter;
  baseTransfer_orderBy: baseTransfer_orderBy;
  baseVault: ResolverTypeWrapper<baseVault>;
  baseVault_filter: baseVault_filter;
  baseVault_orderBy: baseVault_orderBy;
  scrollAccount: ResolverTypeWrapper<scrollAccount>;
  scrollAccount_filter: scrollAccount_filter;
  scrollAccount_orderBy: scrollAccount_orderBy;
  scrollBalance: ResolverTypeWrapper<scrollBalance>;
  scrollBalance_filter: scrollBalance_filter;
  scrollBalance_orderBy: scrollBalance_orderBy;
  scrollToken: ResolverTypeWrapper<scrollToken>;
  scrollToken_filter: scrollToken_filter;
  scrollToken_orderBy: scrollToken_orderBy;
  scrollTransfer: ResolverTypeWrapper<scrollTransfer>;
  scrollTransfer_filter: scrollTransfer_filter;
  scrollTransfer_orderBy: scrollTransfer_orderBy;
  scrollVault: ResolverTypeWrapper<scrollVault>;
  scrollVault_filter: scrollVault_filter;
  scrollVault_orderBy: scrollVault_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
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
  String: Scalars['String']['output'];
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
  disasterDescriptive: disasterDescriptive;
  disasterDescriptive_filter: disasterDescriptive_filter;
  fundReleaseDescriptive: fundReleaseDescriptive;
  fundReleaseDescriptive_filter: fundReleaseDescriptive_filter;
  kintoAccount: kintoAccount;
  kintoAccount_filter: kintoAccount_filter;
  kintoBalance: kintoBalance;
  kintoBalance_filter: kintoBalance_filter;
  kintoToken: kintoToken;
  kintoToken_filter: kintoToken_filter;
  kintoTransfer: kintoTransfer;
  kintoTransfer_filter: kintoTransfer_filter;
  kintoVault: kintoVault;
  kintoVault_filter: kintoVault_filter;
  polAccount: polAccount;
  polAccount_filter: polAccount_filter;
  polBalance: polBalance;
  polBalance_filter: polBalance_filter;
  polToken: polToken;
  polToken_filter: polToken_filter;
  polTransfer: polTransfer;
  polTransfer_filter: polTransfer_filter;
  polVault: polVault;
  polVault_filter: polVault_filter;
  ethAccount: ethAccount;
  ethAccount_filter: ethAccount_filter;
  ethBalance: ethBalance;
  ethBalance_filter: ethBalance_filter;
  ethToken: ethToken;
  ethToken_filter: ethToken_filter;
  ethTransfer: ethTransfer;
  ethTransfer_filter: ethTransfer_filter;
  ethVault: ethVault;
  ethVault_filter: ethVault_filter;
  baseAccount: baseAccount;
  baseAccount_filter: baseAccount_filter;
  baseBalance: baseBalance;
  baseBalance_filter: baseBalance_filter;
  baseToken: baseToken;
  baseToken_filter: baseToken_filter;
  baseTransfer: baseTransfer;
  baseTransfer_filter: baseTransfer_filter;
  baseVault: baseVault;
  baseVault_filter: baseVault_filter;
  scrollAccount: scrollAccount;
  scrollAccount_filter: scrollAccount_filter;
  scrollBalance: scrollBalance;
  scrollBalance_filter: scrollBalance_filter;
  scrollToken: scrollToken;
  scrollToken_filter: scrollToken_filter;
  scrollTransfer: scrollTransfer;
  scrollTransfer_filter: scrollTransfer_filter;
  scrollVault: scrollVault;
  scrollVault_filter: scrollVault_filter;
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
  disasterDescriptive?: Resolver<Maybe<ResolversTypes['disasterDescriptive']>, ParentType, ContextType, RequireFields<QuerydisasterDescriptiveArgs, 'id' | 'subgraphError'>>;
  disasterDescriptives?: Resolver<Array<ResolversTypes['disasterDescriptive']>, ParentType, ContextType, RequireFields<QuerydisasterDescriptivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fundReleaseDescriptive?: Resolver<Maybe<ResolversTypes['fundReleaseDescriptive']>, ParentType, ContextType, RequireFields<QueryfundReleaseDescriptiveArgs, 'id' | 'subgraphError'>>;
  fundReleaseDescriptives?: Resolver<Array<ResolversTypes['fundReleaseDescriptive']>, ParentType, ContextType, RequireFields<QueryfundReleaseDescriptivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoToken?: Resolver<Maybe<ResolversTypes['kintoToken']>, ParentType, ContextType, RequireFields<QuerykintoTokenArgs, 'id' | 'subgraphError'>>;
  kintoTokens?: Resolver<Array<ResolversTypes['kintoToken']>, ParentType, ContextType, RequireFields<QuerykintoTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoAccount?: Resolver<Maybe<ResolversTypes['kintoAccount']>, ParentType, ContextType, RequireFields<QuerykintoAccountArgs, 'id' | 'subgraphError'>>;
  kintoAccounts?: Resolver<Array<ResolversTypes['kintoAccount']>, ParentType, ContextType, RequireFields<QuerykintoAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoBalance?: Resolver<Maybe<ResolversTypes['kintoBalance']>, ParentType, ContextType, RequireFields<QuerykintoBalanceArgs, 'id' | 'subgraphError'>>;
  kintoBalances?: Resolver<Array<ResolversTypes['kintoBalance']>, ParentType, ContextType, RequireFields<QuerykintoBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoTransfer?: Resolver<Maybe<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<QuerykintoTransferArgs, 'id' | 'subgraphError'>>;
  kintoTransfers?: Resolver<Array<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<QuerykintoTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoVault?: Resolver<Maybe<ResolversTypes['kintoVault']>, ParentType, ContextType, RequireFields<QuerykintoVaultArgs, 'id' | 'subgraphError'>>;
  kintoVaults?: Resolver<Array<ResolversTypes['kintoVault']>, ParentType, ContextType, RequireFields<QuerykintoVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  polToken?: Resolver<Maybe<ResolversTypes['polToken']>, ParentType, ContextType, RequireFields<QuerypolTokenArgs, 'id' | 'subgraphError'>>;
  polTokens?: Resolver<Array<ResolversTypes['polToken']>, ParentType, ContextType, RequireFields<QuerypolTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  polAccount?: Resolver<Maybe<ResolversTypes['polAccount']>, ParentType, ContextType, RequireFields<QuerypolAccountArgs, 'id' | 'subgraphError'>>;
  polAccounts?: Resolver<Array<ResolversTypes['polAccount']>, ParentType, ContextType, RequireFields<QuerypolAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  polBalance?: Resolver<Maybe<ResolversTypes['polBalance']>, ParentType, ContextType, RequireFields<QuerypolBalanceArgs, 'id' | 'subgraphError'>>;
  polBalances?: Resolver<Array<ResolversTypes['polBalance']>, ParentType, ContextType, RequireFields<QuerypolBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  polTransfer?: Resolver<Maybe<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<QuerypolTransferArgs, 'id' | 'subgraphError'>>;
  polTransfers?: Resolver<Array<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<QuerypolTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  polVault?: Resolver<Maybe<ResolversTypes['polVault']>, ParentType, ContextType, RequireFields<QuerypolVaultArgs, 'id' | 'subgraphError'>>;
  polVaults?: Resolver<Array<ResolversTypes['polVault']>, ParentType, ContextType, RequireFields<QuerypolVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethToken?: Resolver<Maybe<ResolversTypes['ethToken']>, ParentType, ContextType, RequireFields<QueryethTokenArgs, 'id' | 'subgraphError'>>;
  ethTokens?: Resolver<Array<ResolversTypes['ethToken']>, ParentType, ContextType, RequireFields<QueryethTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethAccount?: Resolver<Maybe<ResolversTypes['ethAccount']>, ParentType, ContextType, RequireFields<QueryethAccountArgs, 'id' | 'subgraphError'>>;
  ethAccounts?: Resolver<Array<ResolversTypes['ethAccount']>, ParentType, ContextType, RequireFields<QueryethAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethBalance?: Resolver<Maybe<ResolversTypes['ethBalance']>, ParentType, ContextType, RequireFields<QueryethBalanceArgs, 'id' | 'subgraphError'>>;
  ethBalances?: Resolver<Array<ResolversTypes['ethBalance']>, ParentType, ContextType, RequireFields<QueryethBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethTransfer?: Resolver<Maybe<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<QueryethTransferArgs, 'id' | 'subgraphError'>>;
  ethTransfers?: Resolver<Array<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<QueryethTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethVault?: Resolver<Maybe<ResolversTypes['ethVault']>, ParentType, ContextType, RequireFields<QueryethVaultArgs, 'id' | 'subgraphError'>>;
  ethVaults?: Resolver<Array<ResolversTypes['ethVault']>, ParentType, ContextType, RequireFields<QueryethVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseToken?: Resolver<Maybe<ResolversTypes['baseToken']>, ParentType, ContextType, RequireFields<QuerybaseTokenArgs, 'id' | 'subgraphError'>>;
  baseTokens?: Resolver<Array<ResolversTypes['baseToken']>, ParentType, ContextType, RequireFields<QuerybaseTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseAccount?: Resolver<Maybe<ResolversTypes['baseAccount']>, ParentType, ContextType, RequireFields<QuerybaseAccountArgs, 'id' | 'subgraphError'>>;
  baseAccounts?: Resolver<Array<ResolversTypes['baseAccount']>, ParentType, ContextType, RequireFields<QuerybaseAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseBalance?: Resolver<Maybe<ResolversTypes['baseBalance']>, ParentType, ContextType, RequireFields<QuerybaseBalanceArgs, 'id' | 'subgraphError'>>;
  baseBalances?: Resolver<Array<ResolversTypes['baseBalance']>, ParentType, ContextType, RequireFields<QuerybaseBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseTransfer?: Resolver<Maybe<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<QuerybaseTransferArgs, 'id' | 'subgraphError'>>;
  baseTransfers?: Resolver<Array<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<QuerybaseTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseVault?: Resolver<Maybe<ResolversTypes['baseVault']>, ParentType, ContextType, RequireFields<QuerybaseVaultArgs, 'id' | 'subgraphError'>>;
  baseVaults?: Resolver<Array<ResolversTypes['baseVault']>, ParentType, ContextType, RequireFields<QuerybaseVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollToken?: Resolver<Maybe<ResolversTypes['scrollToken']>, ParentType, ContextType, RequireFields<QueryscrollTokenArgs, 'id' | 'subgraphError'>>;
  scrollTokens?: Resolver<Array<ResolversTypes['scrollToken']>, ParentType, ContextType, RequireFields<QueryscrollTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollAccount?: Resolver<Maybe<ResolversTypes['scrollAccount']>, ParentType, ContextType, RequireFields<QueryscrollAccountArgs, 'id' | 'subgraphError'>>;
  scrollAccounts?: Resolver<Array<ResolversTypes['scrollAccount']>, ParentType, ContextType, RequireFields<QueryscrollAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollBalance?: Resolver<Maybe<ResolversTypes['scrollBalance']>, ParentType, ContextType, RequireFields<QueryscrollBalanceArgs, 'id' | 'subgraphError'>>;
  scrollBalances?: Resolver<Array<ResolversTypes['scrollBalance']>, ParentType, ContextType, RequireFields<QueryscrollBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollTransfer?: Resolver<Maybe<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<QueryscrollTransferArgs, 'id' | 'subgraphError'>>;
  scrollTransfers?: Resolver<Array<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<QueryscrollTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollVault?: Resolver<Maybe<ResolversTypes['scrollVault']>, ParentType, ContextType, RequireFields<QueryscrollVaultArgs, 'id' | 'subgraphError'>>;
  scrollVaults?: Resolver<Array<ResolversTypes['scrollVault']>, ParentType, ContextType, RequireFields<QueryscrollVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
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
  disasterDescriptive?: SubscriptionResolver<Maybe<ResolversTypes['disasterDescriptive']>, "disasterDescriptive", ParentType, ContextType, RequireFields<SubscriptiondisasterDescriptiveArgs, 'id' | 'subgraphError'>>;
  disasterDescriptives?: SubscriptionResolver<Array<ResolversTypes['disasterDescriptive']>, "disasterDescriptives", ParentType, ContextType, RequireFields<SubscriptiondisasterDescriptivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fundReleaseDescriptive?: SubscriptionResolver<Maybe<ResolversTypes['fundReleaseDescriptive']>, "fundReleaseDescriptive", ParentType, ContextType, RequireFields<SubscriptionfundReleaseDescriptiveArgs, 'id' | 'subgraphError'>>;
  fundReleaseDescriptives?: SubscriptionResolver<Array<ResolversTypes['fundReleaseDescriptive']>, "fundReleaseDescriptives", ParentType, ContextType, RequireFields<SubscriptionfundReleaseDescriptivesArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoToken?: SubscriptionResolver<Maybe<ResolversTypes['kintoToken']>, "kintoToken", ParentType, ContextType, RequireFields<SubscriptionkintoTokenArgs, 'id' | 'subgraphError'>>;
  kintoTokens?: SubscriptionResolver<Array<ResolversTypes['kintoToken']>, "kintoTokens", ParentType, ContextType, RequireFields<SubscriptionkintoTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoAccount?: SubscriptionResolver<Maybe<ResolversTypes['kintoAccount']>, "kintoAccount", ParentType, ContextType, RequireFields<SubscriptionkintoAccountArgs, 'id' | 'subgraphError'>>;
  kintoAccounts?: SubscriptionResolver<Array<ResolversTypes['kintoAccount']>, "kintoAccounts", ParentType, ContextType, RequireFields<SubscriptionkintoAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoBalance?: SubscriptionResolver<Maybe<ResolversTypes['kintoBalance']>, "kintoBalance", ParentType, ContextType, RequireFields<SubscriptionkintoBalanceArgs, 'id' | 'subgraphError'>>;
  kintoBalances?: SubscriptionResolver<Array<ResolversTypes['kintoBalance']>, "kintoBalances", ParentType, ContextType, RequireFields<SubscriptionkintoBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoTransfer?: SubscriptionResolver<Maybe<ResolversTypes['kintoTransfer']>, "kintoTransfer", ParentType, ContextType, RequireFields<SubscriptionkintoTransferArgs, 'id' | 'subgraphError'>>;
  kintoTransfers?: SubscriptionResolver<Array<ResolversTypes['kintoTransfer']>, "kintoTransfers", ParentType, ContextType, RequireFields<SubscriptionkintoTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  kintoVault?: SubscriptionResolver<Maybe<ResolversTypes['kintoVault']>, "kintoVault", ParentType, ContextType, RequireFields<SubscriptionkintoVaultArgs, 'id' | 'subgraphError'>>;
  kintoVaults?: SubscriptionResolver<Array<ResolversTypes['kintoVault']>, "kintoVaults", ParentType, ContextType, RequireFields<SubscriptionkintoVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  polToken?: SubscriptionResolver<Maybe<ResolversTypes['polToken']>, "polToken", ParentType, ContextType, RequireFields<SubscriptionpolTokenArgs, 'id' | 'subgraphError'>>;
  polTokens?: SubscriptionResolver<Array<ResolversTypes['polToken']>, "polTokens", ParentType, ContextType, RequireFields<SubscriptionpolTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  polAccount?: SubscriptionResolver<Maybe<ResolversTypes['polAccount']>, "polAccount", ParentType, ContextType, RequireFields<SubscriptionpolAccountArgs, 'id' | 'subgraphError'>>;
  polAccounts?: SubscriptionResolver<Array<ResolversTypes['polAccount']>, "polAccounts", ParentType, ContextType, RequireFields<SubscriptionpolAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  polBalance?: SubscriptionResolver<Maybe<ResolversTypes['polBalance']>, "polBalance", ParentType, ContextType, RequireFields<SubscriptionpolBalanceArgs, 'id' | 'subgraphError'>>;
  polBalances?: SubscriptionResolver<Array<ResolversTypes['polBalance']>, "polBalances", ParentType, ContextType, RequireFields<SubscriptionpolBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  polTransfer?: SubscriptionResolver<Maybe<ResolversTypes['polTransfer']>, "polTransfer", ParentType, ContextType, RequireFields<SubscriptionpolTransferArgs, 'id' | 'subgraphError'>>;
  polTransfers?: SubscriptionResolver<Array<ResolversTypes['polTransfer']>, "polTransfers", ParentType, ContextType, RequireFields<SubscriptionpolTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  polVault?: SubscriptionResolver<Maybe<ResolversTypes['polVault']>, "polVault", ParentType, ContextType, RequireFields<SubscriptionpolVaultArgs, 'id' | 'subgraphError'>>;
  polVaults?: SubscriptionResolver<Array<ResolversTypes['polVault']>, "polVaults", ParentType, ContextType, RequireFields<SubscriptionpolVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethToken?: SubscriptionResolver<Maybe<ResolversTypes['ethToken']>, "ethToken", ParentType, ContextType, RequireFields<SubscriptionethTokenArgs, 'id' | 'subgraphError'>>;
  ethTokens?: SubscriptionResolver<Array<ResolversTypes['ethToken']>, "ethTokens", ParentType, ContextType, RequireFields<SubscriptionethTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethAccount?: SubscriptionResolver<Maybe<ResolversTypes['ethAccount']>, "ethAccount", ParentType, ContextType, RequireFields<SubscriptionethAccountArgs, 'id' | 'subgraphError'>>;
  ethAccounts?: SubscriptionResolver<Array<ResolversTypes['ethAccount']>, "ethAccounts", ParentType, ContextType, RequireFields<SubscriptionethAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethBalance?: SubscriptionResolver<Maybe<ResolversTypes['ethBalance']>, "ethBalance", ParentType, ContextType, RequireFields<SubscriptionethBalanceArgs, 'id' | 'subgraphError'>>;
  ethBalances?: SubscriptionResolver<Array<ResolversTypes['ethBalance']>, "ethBalances", ParentType, ContextType, RequireFields<SubscriptionethBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethTransfer?: SubscriptionResolver<Maybe<ResolversTypes['ethTransfer']>, "ethTransfer", ParentType, ContextType, RequireFields<SubscriptionethTransferArgs, 'id' | 'subgraphError'>>;
  ethTransfers?: SubscriptionResolver<Array<ResolversTypes['ethTransfer']>, "ethTransfers", ParentType, ContextType, RequireFields<SubscriptionethTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethVault?: SubscriptionResolver<Maybe<ResolversTypes['ethVault']>, "ethVault", ParentType, ContextType, RequireFields<SubscriptionethVaultArgs, 'id' | 'subgraphError'>>;
  ethVaults?: SubscriptionResolver<Array<ResolversTypes['ethVault']>, "ethVaults", ParentType, ContextType, RequireFields<SubscriptionethVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseToken?: SubscriptionResolver<Maybe<ResolversTypes['baseToken']>, "baseToken", ParentType, ContextType, RequireFields<SubscriptionbaseTokenArgs, 'id' | 'subgraphError'>>;
  baseTokens?: SubscriptionResolver<Array<ResolversTypes['baseToken']>, "baseTokens", ParentType, ContextType, RequireFields<SubscriptionbaseTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseAccount?: SubscriptionResolver<Maybe<ResolversTypes['baseAccount']>, "baseAccount", ParentType, ContextType, RequireFields<SubscriptionbaseAccountArgs, 'id' | 'subgraphError'>>;
  baseAccounts?: SubscriptionResolver<Array<ResolversTypes['baseAccount']>, "baseAccounts", ParentType, ContextType, RequireFields<SubscriptionbaseAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseBalance?: SubscriptionResolver<Maybe<ResolversTypes['baseBalance']>, "baseBalance", ParentType, ContextType, RequireFields<SubscriptionbaseBalanceArgs, 'id' | 'subgraphError'>>;
  baseBalances?: SubscriptionResolver<Array<ResolversTypes['baseBalance']>, "baseBalances", ParentType, ContextType, RequireFields<SubscriptionbaseBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseTransfer?: SubscriptionResolver<Maybe<ResolversTypes['baseTransfer']>, "baseTransfer", ParentType, ContextType, RequireFields<SubscriptionbaseTransferArgs, 'id' | 'subgraphError'>>;
  baseTransfers?: SubscriptionResolver<Array<ResolversTypes['baseTransfer']>, "baseTransfers", ParentType, ContextType, RequireFields<SubscriptionbaseTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  baseVault?: SubscriptionResolver<Maybe<ResolversTypes['baseVault']>, "baseVault", ParentType, ContextType, RequireFields<SubscriptionbaseVaultArgs, 'id' | 'subgraphError'>>;
  baseVaults?: SubscriptionResolver<Array<ResolversTypes['baseVault']>, "baseVaults", ParentType, ContextType, RequireFields<SubscriptionbaseVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollToken?: SubscriptionResolver<Maybe<ResolversTypes['scrollToken']>, "scrollToken", ParentType, ContextType, RequireFields<SubscriptionscrollTokenArgs, 'id' | 'subgraphError'>>;
  scrollTokens?: SubscriptionResolver<Array<ResolversTypes['scrollToken']>, "scrollTokens", ParentType, ContextType, RequireFields<SubscriptionscrollTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollAccount?: SubscriptionResolver<Maybe<ResolversTypes['scrollAccount']>, "scrollAccount", ParentType, ContextType, RequireFields<SubscriptionscrollAccountArgs, 'id' | 'subgraphError'>>;
  scrollAccounts?: SubscriptionResolver<Array<ResolversTypes['scrollAccount']>, "scrollAccounts", ParentType, ContextType, RequireFields<SubscriptionscrollAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollBalance?: SubscriptionResolver<Maybe<ResolversTypes['scrollBalance']>, "scrollBalance", ParentType, ContextType, RequireFields<SubscriptionscrollBalanceArgs, 'id' | 'subgraphError'>>;
  scrollBalances?: SubscriptionResolver<Array<ResolversTypes['scrollBalance']>, "scrollBalances", ParentType, ContextType, RequireFields<SubscriptionscrollBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollTransfer?: SubscriptionResolver<Maybe<ResolversTypes['scrollTransfer']>, "scrollTransfer", ParentType, ContextType, RequireFields<SubscriptionscrollTransferArgs, 'id' | 'subgraphError'>>;
  scrollTransfers?: SubscriptionResolver<Array<ResolversTypes['scrollTransfer']>, "scrollTransfers", ParentType, ContextType, RequireFields<SubscriptionscrollTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  scrollVault?: SubscriptionResolver<Maybe<ResolversTypes['scrollVault']>, "scrollVault", ParentType, ContextType, RequireFields<SubscriptionscrollVaultArgs, 'id' | 'subgraphError'>>;
  scrollVaults?: SubscriptionResolver<Array<ResolversTypes['scrollVault']>, "scrollVaults", ParentType, ContextType, RequireFields<SubscriptionscrollVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

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
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receivedFunds?: Resolver<Array<ResolversTypes['fundReleaseDescriptive']>, ParentType, ContextType, RequireFields<beneficiaryreceivedFundsArgs, 'skip' | 'first'>>;
  totalAmountReceived?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFundReleases?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  disasters?: Resolver<Array<ResolversTypes['disasterDescriptive']>, ParentType, ContextType, RequireFields<beneficiarydisastersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type claimResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['claim'] = ResolversParentTypes['claim']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  funding?: Resolver<ResolversTypes['funding'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fundReleaseDescriptive?: Resolver<ResolversTypes['fundReleaseDescriptive'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type disasterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['disaster'] = ResolversParentTypes['disaster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  attestationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  attestationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type disasterDescriptiveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['disasterDescriptive'] = ResolversParentTypes['disasterDescriptive']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disasterType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fundsNeeded?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ensName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  baseName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vaultAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  attestationId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hyperlaneMessageId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fundReleases?: Resolver<Array<ResolversTypes['fundReleaseDescriptive']>, ParentType, ContextType, RequireFields<disasterDescriptivefundReleasesArgs, 'skip' | 'first'>>;
  totalFundsReleased?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalBeneficiaries?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type fundReleaseDescriptiveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['fundReleaseDescriptive'] = ResolversParentTypes['fundReleaseDescriptive']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  disaster?: Resolver<ResolversTypes['disasterDescriptive'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['beneficiary'], ParentType, ContextType>;
  attestationId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amountInUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hyperlaneMessageId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  claims?: Resolver<Array<ResolversTypes['claim']>, ParentType, ContextType, RequireFields<fundReleaseDescriptiveclaimsArgs, 'skip' | 'first'>>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type kintoAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['kintoAccount'] = ResolversParentTypes['kintoAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfersOut?: Resolver<Array<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<kintoAccounttransfersOutArgs, 'skip' | 'first'>>;
  transfersIn?: Resolver<Array<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<kintoAccounttransfersInArgs, 'skip' | 'first'>>;
  balances?: Resolver<Array<ResolversTypes['kintoBalance']>, ParentType, ContextType, RequireFields<kintoAccountbalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type kintoBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['kintoBalance'] = ResolversParentTypes['kintoBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['kintoAccount'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['kintoToken'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['kintoVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type kintoTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['kintoToken'] = ResolversParentTypes['kintoToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<kintoTokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type kintoTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['kintoTransfer'] = ResolversParentTypes['kintoTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['kintoToken'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['kintoAccount'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['kintoAccount'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['kintoVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type kintoVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['kintoVault'] = ResolversParentTypes['kintoVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['kintoTransfer']>, ParentType, ContextType, RequireFields<kintoVaultdepositsArgs, 'skip' | 'first'>>;
  tokenBalances?: Resolver<Array<ResolversTypes['kintoBalance']>, ParentType, ContextType, RequireFields<kintoVaulttokenBalancesArgs, 'skip' | 'first'>>;
  totalDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type polAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['polAccount'] = ResolversParentTypes['polAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfersOut?: Resolver<Array<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<polAccounttransfersOutArgs, 'skip' | 'first'>>;
  transfersIn?: Resolver<Array<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<polAccounttransfersInArgs, 'skip' | 'first'>>;
  balances?: Resolver<Array<ResolversTypes['polBalance']>, ParentType, ContextType, RequireFields<polAccountbalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type polBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['polBalance'] = ResolversParentTypes['polBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['polAccount'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['polToken'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['polVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type polTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['polToken'] = ResolversParentTypes['polToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<polTokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type polTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['polTransfer'] = ResolversParentTypes['polTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['polToken'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['polAccount'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['polAccount'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['polVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type polVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['polVault'] = ResolversParentTypes['polVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['polTransfer']>, ParentType, ContextType, RequireFields<polVaultdepositsArgs, 'skip' | 'first'>>;
  tokenBalances?: Resolver<Array<ResolversTypes['polBalance']>, ParentType, ContextType, RequireFields<polVaulttokenBalancesArgs, 'skip' | 'first'>>;
  totalDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ethAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ethAccount'] = ResolversParentTypes['ethAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfersOut?: Resolver<Array<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<ethAccounttransfersOutArgs, 'skip' | 'first'>>;
  transfersIn?: Resolver<Array<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<ethAccounttransfersInArgs, 'skip' | 'first'>>;
  balances?: Resolver<Array<ResolversTypes['ethBalance']>, ParentType, ContextType, RequireFields<ethAccountbalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ethBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ethBalance'] = ResolversParentTypes['ethBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['ethAccount'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ethToken'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['ethVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ethTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ethToken'] = ResolversParentTypes['ethToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<ethTokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ethTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ethTransfer'] = ResolversParentTypes['ethTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ethToken'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['ethAccount'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['ethAccount'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['ethVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ethVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ethVault'] = ResolversParentTypes['ethVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['ethTransfer']>, ParentType, ContextType, RequireFields<ethVaultdepositsArgs, 'skip' | 'first'>>;
  tokenBalances?: Resolver<Array<ResolversTypes['ethBalance']>, ParentType, ContextType, RequireFields<ethVaulttokenBalancesArgs, 'skip' | 'first'>>;
  totalDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type baseAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['baseAccount'] = ResolversParentTypes['baseAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfersOut?: Resolver<Array<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<baseAccounttransfersOutArgs, 'skip' | 'first'>>;
  transfersIn?: Resolver<Array<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<baseAccounttransfersInArgs, 'skip' | 'first'>>;
  balances?: Resolver<Array<ResolversTypes['baseBalance']>, ParentType, ContextType, RequireFields<baseAccountbalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type baseBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['baseBalance'] = ResolversParentTypes['baseBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['baseAccount'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['baseToken'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['baseVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type baseTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['baseToken'] = ResolversParentTypes['baseToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<baseTokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type baseTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['baseTransfer'] = ResolversParentTypes['baseTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['baseToken'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['baseAccount'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['baseAccount'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['baseVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type baseVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['baseVault'] = ResolversParentTypes['baseVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['baseTransfer']>, ParentType, ContextType, RequireFields<baseVaultdepositsArgs, 'skip' | 'first'>>;
  tokenBalances?: Resolver<Array<ResolversTypes['baseBalance']>, ParentType, ContextType, RequireFields<baseVaulttokenBalancesArgs, 'skip' | 'first'>>;
  totalDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type scrollAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['scrollAccount'] = ResolversParentTypes['scrollAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transfersOut?: Resolver<Array<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<scrollAccounttransfersOutArgs, 'skip' | 'first'>>;
  transfersIn?: Resolver<Array<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<scrollAccounttransfersInArgs, 'skip' | 'first'>>;
  balances?: Resolver<Array<ResolversTypes['scrollBalance']>, ParentType, ContextType, RequireFields<scrollAccountbalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type scrollBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['scrollBalance'] = ResolversParentTypes['scrollBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['scrollAccount'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['scrollToken'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['scrollVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type scrollTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['scrollToken'] = ResolversParentTypes['scrollToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<scrollTokentransfersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type scrollTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['scrollTransfer'] = ResolversParentTypes['scrollTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['scrollToken'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['scrollAccount'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['scrollAccount'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['scrollVault']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type scrollVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['scrollVault'] = ResolversParentTypes['scrollVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['scrollTransfer']>, ParentType, ContextType, RequireFields<scrollVaultdepositsArgs, 'skip' | 'first'>>;
  tokenBalances?: Resolver<Array<ResolversTypes['scrollBalance']>, ParentType, ContextType, RequireFields<scrollVaulttokenBalancesArgs, 'skip' | 'first'>>;
  totalDepositors?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  beneficiary?: beneficiaryResolvers<ContextType>;
  claim?: claimResolvers<ContextType>;
  disaster?: disasterResolvers<ContextType>;
  funding?: fundingResolvers<ContextType>;
  disasterDescriptive?: disasterDescriptiveResolvers<ContextType>;
  fundReleaseDescriptive?: fundReleaseDescriptiveResolvers<ContextType>;
  kintoAccount?: kintoAccountResolvers<ContextType>;
  kintoBalance?: kintoBalanceResolvers<ContextType>;
  kintoToken?: kintoTokenResolvers<ContextType>;
  kintoTransfer?: kintoTransferResolvers<ContextType>;
  kintoVault?: kintoVaultResolvers<ContextType>;
  polAccount?: polAccountResolvers<ContextType>;
  polBalance?: polBalanceResolvers<ContextType>;
  polToken?: polTokenResolvers<ContextType>;
  polTransfer?: polTransferResolvers<ContextType>;
  polVault?: polVaultResolvers<ContextType>;
  ethAccount?: ethAccountResolvers<ContextType>;
  ethBalance?: ethBalanceResolvers<ContextType>;
  ethToken?: ethTokenResolvers<ContextType>;
  ethTransfer?: ethTransferResolvers<ContextType>;
  ethVault?: ethVaultResolvers<ContextType>;
  baseAccount?: baseAccountResolvers<ContextType>;
  baseBalance?: baseBalanceResolvers<ContextType>;
  baseToken?: baseTokenResolvers<ContextType>;
  baseTransfer?: baseTransferResolvers<ContextType>;
  baseVault?: baseVaultResolvers<ContextType>;
  scrollAccount?: scrollAccountResolvers<ContextType>;
  scrollBalance?: scrollBalanceResolvers<ContextType>;
  scrollToken?: scrollTokenResolvers<ContextType>;
  scrollTransfer?: scrollTransferResolvers<ContextType>;
  scrollVault?: scrollVaultResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = NamiCoreTypes.Context & NamiAiClientTypes.Context & KintoTransfersTypes.Context & PolygonTransfersTypes.Context & EthereumTransfersTypes.Context & BaseTransfersTypes.Context & ScrollTransfersTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
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

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".graphclient",
    configName: "graphclient",
    additionalPackagePrefixes: ["@graphprotocol/client-"],
    initialLoggerPrefix: "GraphClient",
  });
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
export type GetBalancesQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetBalancesQuery = { kintoBalances: Array<(
    Pick<kintoBalance, 'amount'>
    & { token: Pick<kintoToken, 'id' | 'symbol'> }
  )>, polBalances: Array<(
    Pick<polBalance, 'amount'>
    & { token: Pick<polToken, 'id' | 'symbol'> }
  )>, ethBalances: Array<(
    Pick<ethBalance, 'amount'>
    & { token: Pick<ethToken, 'id' | 'symbol'> }
  )>, scrollBalances: Array<(
    Pick<scrollBalance, 'amount'>
    & { token: Pick<scrollToken, 'id' | 'symbol'> }
  )>, baseBalances: Array<(
    Pick<baseBalance, 'amount'>
    & { token: Pick<baseToken, 'id' | 'symbol'> }
  )> };

export type GetDisasterByAddressQueryVariables = Exact<{
  vault: Scalars['Bytes']['input'];
  to: Scalars['String']['input'];
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  chain?: InputMaybe<Scalars['String']['input']>;
  baseOrderBy?: InputMaybe<baseTransfer_orderBy>;
  polygonOrderBy?: InputMaybe<polTransfer_orderBy>;
  ethereumOrderBy?: InputMaybe<ethTransfer_orderBy>;
  kintoOrderBy?: InputMaybe<kintoTransfer_orderBy>;
  scrollOrderBy?: InputMaybe<scrollTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetDisasterByAddressQuery = { disasterDescriptives: Array<(
    Pick<disasterDescriptive, 'id' | 'name' | 'description' | 'disasterType' | 'location' | 'createdAt' | 'fundsNeeded' | 'ensName' | 'baseName' | 'vaultAddress' | 'attestationId' | 'transactionHash' | 'hyperlaneMessageId' | 'totalFundsReleased' | 'totalBeneficiaries'>
    & { fundReleases: Array<(
      Pick<fundReleaseDescriptive, 'id' | 'attestationId' | 'comments' | 'amountInUSD' | 'hyperlaneMessageId' | 'transactionHash'>
      & { beneficiary: Pick<beneficiary, 'id' | 'name' | 'totalAmountReceived'>, claims: Array<Pick<claim, 'chainId' | 'tokens' | 'amounts'>> }
    )> }
  )>, baseTransfers: Array<(
    Pick<baseTransfer, 'id' | 'amount' | 'blockNumber' | 'timestamp' | 'transactionHash'>
    & { token: Pick<baseToken, 'id' | 'name' | 'symbol'>, from: Pick<baseAccount, 'id'>, to: Pick<baseAccount, 'id'> }
  )>, ethTransfers: Array<(
    Pick<ethTransfer, 'id' | 'amount' | 'blockNumber' | 'timestamp' | 'transactionHash'>
    & { token: Pick<ethToken, 'id' | 'name' | 'symbol'>, from: Pick<ethAccount, 'id'>, to: Pick<ethAccount, 'id'> }
  )>, polTransfers: Array<(
    Pick<polTransfer, 'id' | 'amount' | 'blockNumber' | 'timestamp' | 'transactionHash'>
    & { token: Pick<polToken, 'id' | 'name' | 'symbol'>, from: Pick<polAccount, 'id'>, to: Pick<polAccount, 'id'> }
  )>, kintoTransfers: Array<(
    Pick<kintoTransfer, 'id' | 'amount' | 'blockNumber' | 'timestamp' | 'transactionHash'>
    & { token: Pick<kintoToken, 'id' | 'name' | 'symbol'>, from: Pick<kintoAccount, 'id'>, to: Pick<kintoAccount, 'id'> }
  )>, scrollTransfers: Array<(
    Pick<scrollTransfer, 'id' | 'amount' | 'blockNumber' | 'timestamp' | 'transactionHash'>
    & { token: Pick<scrollToken, 'id' | 'name' | 'symbol'>, from: Pick<scrollAccount, 'id'>, to: Pick<scrollAccount, 'id'> }
  )> };

export type GetDisastersQueryVariables = Exact<{
  orderBy: disasterDescriptive_orderBy;
  orderDirection: OrderDirection;
}>;


export type GetDisastersQuery = { disasters: Array<Pick<disaster, 'id' | 'transactionHash' | 'totalFundingAmount'>>, disasterDescriptives: Array<Pick<disasterDescriptive, 'id' | 'name' | 'description' | 'disasterType' | 'location' | 'createdAt' | 'fundsNeeded' | 'attestationId' | 'hyperlaneMessageId' | 'transactionHash'>> };


export const GetBalancesDocument = gql`
    query GetBalances($address: String!) {
  kintoBalances(where: {account_contains: $address}) {
    amount
    token {
      id
      symbol
    }
  }
  polBalances(where: {account_contains: $address}) {
    amount
    token {
      id
      symbol
    }
  }
  ethBalances(where: {account_contains: $address}) {
    amount
    token {
      id
      symbol
    }
  }
  scrollBalances(where: {account_contains: $address}) {
    amount
    token {
      id
      symbol
    }
  }
  baseBalances(where: {account_contains: $address}) {
    amount
    token {
      id
      symbol
    }
  }
}
    ` as unknown as DocumentNode<GetBalancesQuery, GetBalancesQueryVariables>;
export const GetDisasterByAddressDocument = gql`
    query GetDisasterByAddress($vault: Bytes!, $to: String!, $tokenSymbol: String, $chain: String, $baseOrderBy: baseTransfer_orderBy, $polygonOrderBy: polTransfer_orderBy, $ethereumOrderBy: ethTransfer_orderBy, $kintoOrderBy: kintoTransfer_orderBy, $scrollOrderBy: scrollTransfer_orderBy, $orderDirection: OrderDirection) {
  disasterDescriptives(where: {vaultAddress: $vault}) {
    id
    name
    description
    disasterType
    location
    createdAt
    fundsNeeded
    ensName
    baseName
    vaultAddress
    attestationId
    transactionHash
    hyperlaneMessageId
    totalFundsReleased
    totalBeneficiaries
    fundReleases {
      id
      beneficiary {
        id
        name
        totalAmountReceived
      }
      attestationId
      comments
      amountInUSD
      hyperlaneMessageId
      transactionHash
      claims {
        chainId
        tokens
        amounts
      }
    }
  }
  baseTransfers(
    where: {to: $to}
    orderBy: $baseOrderBy
    orderDirection: $orderDirection
  ) {
    id
    token {
      id
      name
      symbol
    }
    from {
      id
    }
    to {
      id
    }
    amount
    blockNumber
    timestamp
    transactionHash
  }
  ethTransfers(
    where: {to: $to}
    orderBy: $ethereumOrderBy
    orderDirection: $orderDirection
  ) {
    id
    token {
      id
      name
      symbol
    }
    from {
      id
    }
    to {
      id
    }
    amount
    blockNumber
    timestamp
    transactionHash
  }
  polTransfers(
    where: {to: $to}
    orderBy: $polygonOrderBy
    orderDirection: $orderDirection
  ) {
    id
    token {
      id
      name
      symbol
    }
    from {
      id
    }
    to {
      id
    }
    amount
    blockNumber
    timestamp
    transactionHash
  }
  kintoTransfers(
    where: {to: $to}
    orderBy: $kintoOrderBy
    orderDirection: $orderDirection
  ) {
    id
    token {
      id
      name
      symbol
    }
    from {
      id
    }
    to {
      id
    }
    amount
    blockNumber
    timestamp
    transactionHash
  }
  scrollTransfers(
    where: {to: $to}
    orderBy: $scrollOrderBy
    orderDirection: $orderDirection
  ) {
    id
    token {
      id
      name
      symbol
    }
    from {
      id
    }
    to {
      id
    }
    amount
    blockNumber
    timestamp
    transactionHash
  }
}
    ` as unknown as DocumentNode<GetDisasterByAddressQuery, GetDisasterByAddressQueryVariables>;
export const GetDisastersDocument = gql`
    query GetDisasters($orderBy: disasterDescriptive_orderBy!, $orderDirection: OrderDirection!) {
  disasters {
    id
    transactionHash
    totalFundingAmount
  }
  disasterDescriptives(orderBy: $orderBy, orderDirection: $orderDirection) {
    id
    name
    description
    disasterType
    location
    createdAt
    fundsNeeded
    attestationId
    hyperlaneMessageId
    transactionHash
  }
}
    ` as unknown as DocumentNode<GetDisastersQuery, GetDisastersQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetBalances(variables: GetBalancesQueryVariables, options?: C): Promise<GetBalancesQuery> {
      return requester<GetBalancesQuery, GetBalancesQueryVariables>(GetBalancesDocument, variables, options) as Promise<GetBalancesQuery>;
    },
    GetDisasterByAddress(variables: GetDisasterByAddressQueryVariables, options?: C): Promise<GetDisasterByAddressQuery> {
      return requester<GetDisasterByAddressQuery, GetDisasterByAddressQueryVariables>(GetDisasterByAddressDocument, variables, options) as Promise<GetDisasterByAddressQuery>;
    },
    GetDisasters(variables: GetDisastersQueryVariables, options?: C): Promise<GetDisastersQuery> {
      return requester<GetDisastersQuery, GetDisastersQueryVariables>(GetDisastersDocument, variables, options) as Promise<GetDisastersQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;