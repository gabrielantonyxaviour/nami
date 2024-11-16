import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts";
import { DisasterCreated } from "../generated/schema";
import { DisasterCreated as DisasterCreatedEvent } from "../generated/TestingCore/TestingCore";
import { handleDisasterCreated } from "../src/nami-core";
import { createDisasterCreatedEvent } from "./nami-core-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let disasterId = BigInt.fromI32(234);
    let attestationId = Bytes.fromI32(1234567890);
    let estimatedRequirementInUSD = BigInt.fromI32(234);
    let vaultAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let newDisasterCreatedEvent = createDisasterCreatedEvent(
      disasterId,
      attestationId,
      estimatedRequirementInUSD,
      vaultAddress
    );
    handleDisasterCreated(newDisasterCreatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DisasterCreated created and stored", () => {
    assert.entityCount("DisasterCreated", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DisasterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "disasterId",
      "234"
    );
    assert.fieldEquals(
      "DisasterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attestationId",
      "1234567890"
    );
    assert.fieldEquals(
      "DisasterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "estimatedRequirementInUSD",
      "234"
    );
    assert.fieldEquals(
      "DisasterCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vaultAddress",
      "0x0000000000000000000000000000000000000001"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
