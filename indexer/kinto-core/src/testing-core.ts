import { BigInt } from "@graphprotocol/graph-ts";
import {
  DisasterCreated as DisasterCreatedEvent,
  FundingUnlocked as FundingUnlockedEvent,
  FundClaimInitiated as FundClaimInitiatedEvent,
  FundClaimFailed as FundClaimFailedEvent,
} from "../generated/TestingCore/TestingCore";
import {
  disaster as Disaster,
  beneficiary as Beneficiary,
  funding as Funding,
  claim as Claim,
} from "../generated/schema";

export function handleDisasterCreated(event: DisasterCreatedEvent): void {
  let disaster = new Disaster(event.params.disasterId.toString());

  disaster.attestationId = event.params.attestationId;
  disaster.vaultAddress = event.params.vaultAddress;
  disaster.estimatedRequirementInUSD = event.params.estimatedRequirementInUSD;
  disaster.totalFundingAmount = BigInt.fromI32(0);
  disaster.totalBeneficiaries = BigInt.fromI32(0);
  disaster.transactionHash = event.transaction.hash;

  disaster.save();
}

export function handleFundingUnlocked(event: FundingUnlockedEvent): void {
  let beneficiary = Beneficiary.load(event.params.beneficiary.toHexString());
  if (beneficiary == null) {
    beneficiary = new Beneficiary(event.params.beneficiary.toHexString());
    beneficiary.totalReceivedAmount = BigInt.fromI32(0);
    beneficiary.totalFundingsReceived = BigInt.fromI32(0);
    beneficiary.totalClaimsInitiated = BigInt.fromI32(0);
  }

  beneficiary.totalReceivedAmount = beneficiary.totalReceivedAmount.plus(
    event.params.amountInUsd
  );
  beneficiary.totalFundingsReceived = beneficiary.totalFundingsReceived.plus(
    BigInt.fromI32(1)
  );
  beneficiary.save();

  let disaster = Disaster.load(event.params.disasterId.toString());
  if (disaster != null) {
    disaster.totalFundingAmount = disaster.totalFundingAmount.plus(
      event.params.amountInUsd
    );
    disaster.totalBeneficiaries = disaster.totalBeneficiaries.plus(
      BigInt.fromI32(1)
    );
    disaster.save();
  }

  let funding = new Funding(event.params.fundingId.toString());
  funding.disaster = event.params.disasterId.toString();
  funding.beneficiary = event.params.beneficiary.toHexString();
  funding.amountInUSD = event.params.amountInUsd;
  funding.claimed = false;
  funding.attestationId = event.params.attestationId;
  funding.transactionHash = event.transaction.hash;
  funding.save();

  let claims = event.params.claims;
  for (let i = 0; i < claims.length; i++) {
    let claim = new Claim(
      event.params.fundingId.toString() +
        "-" +
        claims[i].chainId.toString() +
        "-" +
        i.toString()
    );
    claim.funding = event.params.fundingId.toString();
    claim.chainId = claims[i].chainId;
    for (let j = 0; j < claims[i].tokens.length; j++)
      claim.tokens[j] = BigInt.fromI32(claims[i].tokens[j]);
    claim.amounts = claims[i].amounts;
    claim.transactionHash = event.transaction.hash;
    claim.save();
  }
}

export function handleFundClaimInitiated(event: FundClaimInitiatedEvent): void {
  let funding = Funding.load(event.params.fundingId.toString());
  if (funding != null) {
    funding.claimed = true;
    funding.save();
  }

  let beneficiary = Beneficiary.load(event.params.beneficiary.toHexString());
  if (beneficiary != null) {
    beneficiary.totalClaimsInitiated = beneficiary.totalClaimsInitiated.plus(
      BigInt.fromI32(1)
    );
    beneficiary.save();
  }
}

export function handleFundClaimFailed(event: FundClaimFailedEvent): void {}
