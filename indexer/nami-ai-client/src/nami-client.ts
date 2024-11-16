import { BigInt, Bytes, store } from "@graphprotocol/graph-ts";
import {
  CreateDisasterInitiated as CreateDisasterInitiatedEvent,
  UnlockFundsInitiated as UnlockFundsInitiatedEvent,
} from "../generated/NamiAiClient/NamiAiClient";
import {
  disasterDescriptive as Disaster,
  beneficiary as Beneficiary,
  fundReleaseDescriptive as FundRelease,
  claim as Claim,
} from "../generated/schema";

export function handleCreateDisasterInitiated(
  event: CreateDisasterInitiatedEvent
): void {
  let disaster = new Disaster(event.params.attestationId.toString());

  disaster.name = event.params.disaster.name;
  disaster.description = event.params.disaster.description;
  disaster.disasterType = event.params.disaster.disasterType;
  disaster.location = event.params.disaster.location;
  disaster.createdAt = event.block.timestamp;
  disaster.fundsNeeded = event.params.disaster.fundsNeeded;
  disaster.ensName = event.params.disaster.ensName;
  disaster.baseName = event.params.disaster.baseName;
  disaster.vaultAddress = event.params.disaster.vaultAddress;
  disaster.attestationId = event.params.attestationId;
  disaster.transactionHash = event.transaction.hash;
  disaster.hyperlaneMessageId = event.params.messageId;
  disaster.totalFundsReleased = BigInt.fromI32(0);
  disaster.totalBeneficiaries = BigInt.fromI32(0);

  disaster.save();
}

export function handleUnlockFundsInitiated(
  event: UnlockFundsInitiatedEvent
): void {
  let beneficiary = Beneficiary.load(
    event.params.unlockFunds.beneficiaryAddress.toHexString()
  );
  if (beneficiary == null) {
    beneficiary = new Beneficiary(
      event.params.unlockFunds.beneficiaryAddress.toHexString()
    );
    beneficiary.name = event.params.unlockFunds.beneficiaryName;
    beneficiary.totalAmountReceived = BigInt.fromI32(0);
    beneficiary.totalFundReleases = BigInt.fromI32(0);
    beneficiary.disasters = [];
  }

  let disaster = Disaster.load(event.params.attestationId.toString());
  if (disaster) {
    let disasters = beneficiary.disasters;
    disasters.push(disaster.id);
    beneficiary.disasters = disasters;

    disaster.totalFundsReleased = disaster.totalFundsReleased.plus(
      event.params.totalAmountInUsd
    );
    disaster.totalBeneficiaries = disaster.totalBeneficiaries.plus(
      BigInt.fromI32(1)
    );
    disaster.save();
  }

  beneficiary.totalAmountReceived = beneficiary.totalAmountReceived.plus(
    event.params.totalAmountInUsd
  );
  beneficiary.totalFundReleases = beneficiary.totalFundReleases.plus(
    BigInt.fromI32(1)
  );
  beneficiary.save();

  let fundRelease = new FundRelease(
    event.params.attestationId.toString() +
      "-" +
      event.params.unlockFunds.beneficiaryAddress.toHexString() +
      "-" +
      event.params.disasterId.toString()
  );

  fundRelease.disaster = event.params.disasterId.toString();
  fundRelease.beneficiary =
    event.params.unlockFunds.beneficiaryAddress.toHexString();
  fundRelease.attestationId = event.params.attestationId;
  fundRelease.comments = event.params.unlockFunds.comments;
  fundRelease.amountInUSD = event.params.totalAmountInUsd;
  fundRelease.transactionHash = event.transaction.hash;
  fundRelease.hyperlaneMessageId = event.params.messageId;
  fundRelease.save();

  // Handle claims
  for (let i = 0; i < event.params.unlockFunds.claims.length; i++) {
    let claim = new Claim(
      fundRelease.id +
        "-" +
        event.params.unlockFunds.claims[i].chainId.toString()
    );
    claim.chainId = event.params.unlockFunds.claims[i].chainId;
    claim.fundReleaseDescriptive = fundRelease.id;
    claim.tokens = event.params.unlockFunds.claims[i].tokens;
    claim.amounts = event.params.unlockFunds.claims[i].amounts;
    claim.save();
  }
}
