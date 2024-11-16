import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  DisasterCreated,
  FundClaimFailed,
  FundClaimInitiated,
  FundingUnlocked
} from "../generated/TestingCore/TestingCore"

export function createDisasterCreatedEvent(
  disasterId: BigInt,
  attestationId: Bytes,
  estimatedRequirementInUSD: BigInt,
  vaultAddress: Address
): DisasterCreated {
  let disasterCreatedEvent = changetype<DisasterCreated>(newMockEvent())

  disasterCreatedEvent.parameters = new Array()

  disasterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "disasterId",
      ethereum.Value.fromUnsignedBigInt(disasterId)
    )
  )
  disasterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "attestationId",
      ethereum.Value.fromFixedBytes(attestationId)
    )
  )
  disasterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "estimatedRequirementInUSD",
      ethereum.Value.fromUnsignedBigInt(estimatedRequirementInUSD)
    )
  )
  disasterCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAddress",
      ethereum.Value.fromAddress(vaultAddress)
    )
  )

  return disasterCreatedEvent
}

export function createFundClaimFailedEvent(
  fundingId: BigInt,
  beneficiary: Address,
  chain: BigInt,
  token: i32,
  amount: BigInt
): FundClaimFailed {
  let fundClaimFailedEvent = changetype<FundClaimFailed>(newMockEvent())

  fundClaimFailedEvent.parameters = new Array()

  fundClaimFailedEvent.parameters.push(
    new ethereum.EventParam(
      "fundingId",
      ethereum.Value.fromUnsignedBigInt(fundingId)
    )
  )
  fundClaimFailedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundClaimFailedEvent.parameters.push(
    new ethereum.EventParam("chain", ethereum.Value.fromUnsignedBigInt(chain))
  )
  fundClaimFailedEvent.parameters.push(
    new ethereum.EventParam(
      "token",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(token))
    )
  )
  fundClaimFailedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundClaimFailedEvent
}

export function createFundClaimInitiatedEvent(
  fundingId: BigInt,
  beneficiary: Address,
  claims: Array<ethereum.Tuple>
): FundClaimInitiated {
  let fundClaimInitiatedEvent = changetype<FundClaimInitiated>(newMockEvent())

  fundClaimInitiatedEvent.parameters = new Array()

  fundClaimInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "fundingId",
      ethereum.Value.fromUnsignedBigInt(fundingId)
    )
  )
  fundClaimInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundClaimInitiatedEvent.parameters.push(
    new ethereum.EventParam("claims", ethereum.Value.fromTupleArray(claims))
  )

  return fundClaimInitiatedEvent
}

export function createFundingUnlockedEvent(
  fundingId: BigInt,
  disasterId: BigInt,
  beneficiary: Address,
  claims: Array<ethereum.Tuple>,
  amountInUsd: BigInt,
  attestationId: Bytes
): FundingUnlocked {
  let fundingUnlockedEvent = changetype<FundingUnlocked>(newMockEvent())

  fundingUnlockedEvent.parameters = new Array()

  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "fundingId",
      ethereum.Value.fromUnsignedBigInt(fundingId)
    )
  )
  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "disasterId",
      ethereum.Value.fromUnsignedBigInt(disasterId)
    )
  )
  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam("claims", ethereum.Value.fromTupleArray(claims))
  )
  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "amountInUsd",
      ethereum.Value.fromUnsignedBigInt(amountInUsd)
    )
  )
  fundingUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "attestationId",
      ethereum.Value.fromFixedBytes(attestationId)
    )
  )

  return fundingUnlockedEvent
}
