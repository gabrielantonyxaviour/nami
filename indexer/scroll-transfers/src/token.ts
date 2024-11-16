import { BigInt } from "@graphprotocol/graph-ts";
import { Transfer as WETHTransferEvent } from "../generated/WETH/WETH";
import { Transfer as USDCTransferEvent } from "../generated/USDC/USDC";
import { Transfer as USDTTransferEvent } from "../generated/USDT/USDT";
import {
  token as Token,
  account as Account,
  transfer as Transfer,
  balance as Balance,
  vault as Vault,
} from "../generated/schema";

export function handleWETHTransfer(event: WETHTransferEvent): void {
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = "Wrapped Ether";
    token.symbol = "WETH";
  }

  let fromAccount = Account.load(event.params.from.toHexString());
  if (!fromAccount) {
    fromAccount = new Account(event.params.from.toHexString());
  }

  let toAccount = Account.load(event.params.to.toHexString());
  if (!toAccount) {
    toAccount = new Account(event.params.to.toHexString());
  }

  // Handle balances
  let fromBalance = Balance.load(
    event.params.from.toHexString() + "-" + event.address.toHexString()
  );
  if (!fromBalance) {
    fromBalance = new Balance(
      event.params.from.toHexString() + "-" + event.address.toHexString()
    );
    fromBalance.account = fromAccount.id;
    fromBalance.token = token.id;
    fromBalance.amount = BigInt.fromI32(0);
  }
  fromBalance.amount = fromBalance.amount.minus(event.params.value);
  fromBalance.lastUpdateBlock = event.block.number;
  fromBalance.lastUpdateTimestamp = event.block.timestamp;

  let toBalance = Balance.load(
    event.params.to.toHexString() + "-" + event.address.toHexString()
  );
  if (!toBalance) {
    toBalance = new Balance(
      event.params.to.toHexString() + "-" + event.address.toHexString()
    );
    toBalance.account = toAccount.id;
    toBalance.token = token.id;
    toBalance.amount = BigInt.fromI32(0);
  }
  toBalance.amount = toBalance.amount.plus(event.params.value);
  toBalance.lastUpdateBlock = event.block.number;
  toBalance.lastUpdateTimestamp = event.block.timestamp;

  // Create transfer record
  let transfer = new Transfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  transfer.token = token.id;
  transfer.from = fromAccount.id;
  transfer.to = toAccount.id;
  transfer.amount = event.params.value;
  transfer.blockNumber = event.block.number;
  transfer.timestamp = event.block.timestamp;
  transfer.transactionHash = event.transaction.hash;

  // Update vault if receiver is a vault
  let vault = Vault.load(event.params.to.toHexString());
  if (vault) {
    vault.totalValueLocked = vault.totalValueLocked.plus(event.params.value);
    vault.save();
  }

  // Save all entities
  token.save();
  fromAccount.save();
  toAccount.save();
  fromBalance.save();
  toBalance.save();
  transfer.save();
}

export function handleUSDCTransfer(event: USDCTransferEvent): void {
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = "USD Stablecoin";
    token.symbol = "USDC";
  }

  let fromAccount = Account.load(event.params.from.toHexString());
  if (!fromAccount) {
    fromAccount = new Account(event.params.from.toHexString());
  }

  let toAccount = Account.load(event.params.to.toHexString());
  if (!toAccount) {
    toAccount = new Account(event.params.to.toHexString());
  }

  // Handle balances
  let fromBalance = Balance.load(
    event.params.from.toHexString() + "-" + event.address.toHexString()
  );
  if (!fromBalance) {
    fromBalance = new Balance(
      event.params.from.toHexString() + "-" + event.address.toHexString()
    );
    fromBalance.account = fromAccount.id;
    fromBalance.token = token.id;
    fromBalance.amount = BigInt.fromI32(0);
  }
  fromBalance.amount = fromBalance.amount.minus(event.params.value);
  fromBalance.lastUpdateBlock = event.block.number;
  fromBalance.lastUpdateTimestamp = event.block.timestamp;

  let toBalance = Balance.load(
    event.params.to.toHexString() + "-" + event.address.toHexString()
  );
  if (!toBalance) {
    toBalance = new Balance(
      event.params.to.toHexString() + "-" + event.address.toHexString()
    );
    toBalance.account = toAccount.id;
    toBalance.token = token.id;
    toBalance.amount = BigInt.fromI32(0);
  }
  toBalance.amount = toBalance.amount.plus(event.params.value);
  toBalance.lastUpdateBlock = event.block.number;
  toBalance.lastUpdateTimestamp = event.block.timestamp;

  // Create transfer record
  let transfer = new Transfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  transfer.token = token.id;
  transfer.from = fromAccount.id;
  transfer.to = toAccount.id;
  transfer.amount = event.params.value;
  transfer.blockNumber = event.block.number;
  transfer.timestamp = event.block.timestamp;
  transfer.transactionHash = event.transaction.hash;

  // Update vault if receiver is a vault
  let vault = Vault.load(event.params.to.toHexString());
  if (vault) {
    vault.totalValueLocked = vault.totalValueLocked.plus(event.params.value);
    vault.save();
  }

  // Save all entities
  token.save();
  fromAccount.save();
  toAccount.save();
  fromBalance.save();
  toBalance.save();
  transfer.save();
}

export function handleUSDTTransfer(event: USDTTransferEvent): void {
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = "Tether USD Stablecoin";
    token.symbol = "USDT";
  }

  let fromAccount = Account.load(event.params.from.toHexString());
  if (!fromAccount) {
    fromAccount = new Account(event.params.from.toHexString());
  }

  let toAccount = Account.load(event.params.to.toHexString());
  if (!toAccount) {
    toAccount = new Account(event.params.to.toHexString());
  }

  // Handle balances
  let fromBalance = Balance.load(
    event.params.from.toHexString() + "-" + event.address.toHexString()
  );
  if (!fromBalance) {
    fromBalance = new Balance(
      event.params.from.toHexString() + "-" + event.address.toHexString()
    );
    fromBalance.account = fromAccount.id;
    fromBalance.token = token.id;
    fromBalance.amount = BigInt.fromI32(0);
  }
  fromBalance.amount = fromBalance.amount.minus(event.params.value);
  fromBalance.lastUpdateBlock = event.block.number;
  fromBalance.lastUpdateTimestamp = event.block.timestamp;

  let toBalance = Balance.load(
    event.params.to.toHexString() + "-" + event.address.toHexString()
  );
  if (!toBalance) {
    toBalance = new Balance(
      event.params.to.toHexString() + "-" + event.address.toHexString()
    );
    toBalance.account = toAccount.id;
    toBalance.token = token.id;
    toBalance.amount = BigInt.fromI32(0);
  }
  toBalance.amount = toBalance.amount.plus(event.params.value);
  toBalance.lastUpdateBlock = event.block.number;
  toBalance.lastUpdateTimestamp = event.block.timestamp;

  // Create transfer record
  let transfer = new Transfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  transfer.token = token.id;
  transfer.from = fromAccount.id;
  transfer.to = toAccount.id;
  transfer.amount = event.params.value;
  transfer.blockNumber = event.block.number;
  transfer.timestamp = event.block.timestamp;
  transfer.transactionHash = event.transaction.hash;

  // Update vault if receiver is a vault
  let vault = Vault.load(event.params.to.toHexString());
  if (vault) {
    vault.totalValueLocked = vault.totalValueLocked.plus(event.params.value);
    vault.save();
  }

  // Save all entities
  token.save();
  fromAccount.save();
  toAccount.save();
  fromBalance.save();
  toBalance.save();
  transfer.save();
}
