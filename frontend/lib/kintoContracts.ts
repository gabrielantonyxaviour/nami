export const kintoContracts = {
  contracts: {
    Faucet: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_kintoWalletFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "CLAIM_AMOUNT",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "FAUCET_AMOUNT",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "active",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "claimKintoETH",
          inputs: [
            {
              name: "_signatureData",
              type: "tuple",
              internalType: "struct IFaucet.SignatureData",
              components: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiresAt",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimKintoETH",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimed",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "startFaucet",
          inputs: [],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdrawAll",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Claim",
          inputs: [
            {
              name: "_to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "AlreadyClaimed", inputs: [] },
        { type: "error", name: "FaucetNotActive", inputs: [] },
        { type: "error", name: "InvalidNonce", inputs: [] },
        { type: "error", name: "InvalidSigner", inputs: [] },
        { type: "error", name: "NotEnoughETH", inputs: [] },
        { type: "error", name: "OnlyFactory", inputs: [] },
        { type: "error", name: "OnlyOwner", inputs: [] },
        { type: "error", name: "SignatureExpired", inputs: [] },
      ],
      address: "0x0719D47A213149E2Ef8d3f5afDaDA8a8E22dfc03",
    },
    KintoID: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_walletFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "KYC_PROVIDER_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "UPGRADER_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "addSanction",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "_countryId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addTrait",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "_traitId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "burnKYC",
          inputs: [
            {
              name: "_signatureData",
              type: "tuple",
              internalType: "struct IKintoID.SignatureData",
              components: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiresAt",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "domainSeparator",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getApproved",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasTrait",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "index", type: "uint16", internalType: "uint16" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "operator", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isCompany",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isIndividual",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isKYC",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSanctionsMonitored",
          inputs: [{ name: "_days", type: "uint32", internalType: "uint32" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSanctionsSafe",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSanctionsSafeIn",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "_countryId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastMonitoredAt",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mintCompanyKyc",
          inputs: [
            {
              name: "_signatureData",
              type: "tuple",
              internalType: "struct IKintoID.SignatureData",
              components: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiresAt",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "_traits",
              type: "uint16[]",
              internalType: "uint16[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintIndividualKyc",
          inputs: [
            {
              name: "_signatureData",
              type: "tuple",
              internalType: "struct IKintoID.SignatureData",
              components: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiresAt",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "_traits",
              type: "uint16[]",
              internalType: "uint16[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintedAt",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "monitor",
          inputs: [
            {
              name: "_accounts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "_traitsAndSanctions",
              type: "tuple[][]",
              internalType: "struct IKintoID.MonitorUpdateData[][]",
              components: [
                { name: "isTrait", type: "bool", internalType: "bool" },
                { name: "isSet", type: "bool", internalType: "bool" },
                { name: "index", type: "uint16", internalType: "uint16" },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "recoveryTargets",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removeSanction",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "_countryId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeTrait",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            { name: "_traitId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            { name: "approved", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "tokenByIndex",
          inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenOfOwnerByIndex",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "index", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenURI",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "traits",
          inputs: [
            { name: "_account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool[]", internalType: "bool[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOnRecovery",
          inputs: [
            { name: "_from", type: "address", internalType: "address" },
            { name: "_to", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AccountsMonitoredAt",
          inputs: [
            {
              name: "_signer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_accountsCount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SanctionAdded",
          inputs: [
            {
              name: "_to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_sanctionIndex",
              type: "uint16",
              indexed: false,
              internalType: "uint16",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SanctionRemoved",
          inputs: [
            {
              name: "_to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_sanctionIndex",
              type: "uint16",
              indexed: false,
              internalType: "uint16",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TraitAdded",
          inputs: [
            {
              name: "_to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_traitIndex",
              type: "uint16",
              indexed: false,
              internalType: "uint16",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TraitRemoved",
          inputs: [
            {
              name: "_to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "_traitIndex",
              type: "uint16",
              indexed: false,
              internalType: "uint16",
            },
            {
              name: "_timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "AccountsAmountExceeded", inputs: [] },
        { type: "error", name: "BalanceNotZero", inputs: [] },
        { type: "error", name: "InvalidNonce", inputs: [] },
        { type: "error", name: "InvalidProvider", inputs: [] },
        { type: "error", name: "InvalidSigner", inputs: [] },
        { type: "error", name: "KYCRequired", inputs: [] },
        { type: "error", name: "LengthMismatch", inputs: [] },
        {
          type: "error",
          name: "MethodNotAllowed",
          inputs: [{ name: "reason", type: "string", internalType: "string" }],
        },
        { type: "error", name: "NothingToBurn", inputs: [] },
        { type: "error", name: "OnlyMintBurnOrTransfer", inputs: [] },
        { type: "error", name: "SignatureExpired", inputs: [] },
        { type: "error", name: "SignerNotEOA", inputs: [] },
      ],
      address: "0xf369f78E3A0492CC4e96a90dae0728A38498e9c7",
    },
    KintoAppRegistry: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_walletFactory",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "ADMIN_DEPLOYER",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "CREATE2",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "GAS_LIMIT_PERIOD",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "GAS_LIMIT_THRESHOLD",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "RATE_LIMIT_PERIOD",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "RATE_LIMIT_THRESHOLD",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appCount",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "childToParentContract",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "deployerToWallet",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "devEoaToApp",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "enableDSA",
          inputs: [{ name: "app", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAppMetadata",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IKintoAppRegistry.Metadata",
              components: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "dsaEnabled",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "rateLimitPeriod",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "rateLimitNumber",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "gasLimitPeriod",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "gasLimitCost",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "name", type: "string", internalType: "string" },
                {
                  name: "devEOAs",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "appContracts",
                  type: "address[]",
                  internalType: "address[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getApproved",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getContractLimits",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [
            { name: "", type: "uint256[4]", internalType: "uint256[4]" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getReservedContracts",
          inputs: [],
          outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSponsor",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSystemContracts",
          inputs: [],
          outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "operator", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isContractCallAllowedFromEOA",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isReservedContract",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSponsored",
          inputs: [
            { name: "app", type: "address", internalType: "address" },
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSystemContract",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "overrideChildToParentContract",
          inputs: [
            { name: "child", type: "address", internalType: "address" },
            { name: "parent", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "registerApp",
          inputs: [
            { name: "appName", type: "string", internalType: "string" },
            {
              name: "parentContract",
              type: "address",
              internalType: "address",
            },
            {
              name: "appContracts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "appLimits",
              type: "uint256[4]",
              internalType: "uint256[4]",
            },
            {
              name: "devEOAs",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "reservedContracts",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            { name: "approved", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDeployerEOA",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
            { name: "deployer", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSponsoredContracts",
          inputs: [
            { name: "app", type: "address", internalType: "address" },
            {
              name: "targets",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "flags", type: "bool[]", internalType: "bool[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "systemContracts",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenByIndex",
          inputs: [{ name: "index", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenIdToApp",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenOfOwnerByIndex",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "index", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenURI",
          inputs: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "tokenId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateMetadata",
          inputs: [
            { name: "appName", type: "string", internalType: "string" },
            {
              name: "parentContract",
              type: "address",
              internalType: "address",
            },
            {
              name: "appContracts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "appLimits",
              type: "uint256[4]",
              internalType: "uint256[4]",
            },
            {
              name: "devEOAs",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateReservedContracts",
          inputs: [
            {
              name: "newReservedContracts",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateSystemContracts",
          inputs: [
            {
              name: "newSystemContracts",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "walletToDeployer",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AppDSAEnabled",
          inputs: [
            {
              name: "app",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AppRegistered",
          inputs: [
            {
              name: "app",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AppUpdated",
          inputs: [
            {
              name: "app",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "DeployerSet",
          inputs: [
            {
              name: "newDeployer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ReservedContractsUpdated",
          inputs: [
            {
              name: "oldReservedContracts",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
            {
              name: "newReservedContracts",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SystemContractsUpdated",
          inputs: [
            {
              name: "oldSystemContracts",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
            {
              name: "newSystemContracts",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyRegistered",
          inputs: [{ name: "app", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "CannotRegisterWallet",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ChildAlreadyRegistered",
          inputs: [{ name: "child", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "ContractHasNoBytecode",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "DSAAlreadyEnabled",
          inputs: [{ name: "app", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "DevEoaIsContract",
          inputs: [{ name: "eoa", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidSponsorSetter",
          inputs: [
            { name: "caller", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "InvalidWallet",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "KYCRequired", inputs: [] },
        {
          type: "error",
          name: "LengthMismatch",
          inputs: [
            {
              name: "contractsLength",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "flagsLength",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "OnlyAppDeveloper",
          inputs: [
            { name: "caller", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "OnlyMintingAllowed", inputs: [] },
        {
          type: "error",
          name: "ParentAlreadyChild",
          inputs: [
            { name: "parent", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ReservedContract",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
        },
      ],
      address: "0x5A2b641b84b0230C8e75F55d5afd27f4Dbd59d5b",
    },
    BridgerL2: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_walletFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "adminWallet",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "assignENARewards",
          inputs: [
            {
              name: "users",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "assignWstEthRefunds",
          inputs: [
            {
              name: "users",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimCommitment",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "depositCount",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "depositTotals",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "depositedAssets",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "deposits",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTotalDeposits",
          inputs: [],
          outputs: [
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUserDeposits",
          inputs: [{ name: "user", type: "address", internalType: "address" }],
          outputs: [
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDepositedAssets",
          inputs: [
            {
              name: "assets",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unlockCommitments",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unlocked",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "writeL2Deposit",
          inputs: [
            {
              name: "walletAddress",
              type: "address",
              internalType: "address",
            },
            { name: "assetL2", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Claim",
          inputs: [
            {
              name: "wallet",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "asset",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "InvalidWallet", inputs: [] },
        { type: "error", name: "NotUnlockedYet", inputs: [] },
        { type: "error", name: "Unauthorized", inputs: [] },
      ],
      address: "0x26181Dfc530d96523350e895180b09BAf3d816a0",
    },
    EngenGovernance: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_token",
              type: "address",
              internalType: "contract IVotes",
            },
          ],
          stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "BALLOT_TYPEHASH",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "CLOCK_MODE",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "COUNTING_MODE",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "EXTENDED_BALLOT_TYPEHASH",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "cancel",
          inputs: [
            {
              name: "targets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "calldatas",
              type: "bytes[]",
              internalType: "bytes[]",
            },
            {
              name: "descriptionHash",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "castVote",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "support", type: "uint8", internalType: "uint8" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "castVoteBySig",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "support", type: "uint8", internalType: "uint8" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "castVoteWithReason",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "support", type: "uint8", internalType: "uint8" },
            { name: "reason", type: "string", internalType: "string" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "castVoteWithReasonAndParams",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "support", type: "uint8", internalType: "uint8" },
            { name: "reason", type: "string", internalType: "string" },
            { name: "params", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "castVoteWithReasonAndParamsBySig",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "support", type: "uint8", internalType: "uint8" },
            { name: "reason", type: "string", internalType: "string" },
            { name: "params", type: "bytes", internalType: "bytes" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "clock",
          inputs: [],
          outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "eip712Domain",
          inputs: [],
          outputs: [
            { name: "fields", type: "bytes1", internalType: "bytes1" },
            { name: "name", type: "string", internalType: "string" },
            { name: "version", type: "string", internalType: "string" },
            { name: "chainId", type: "uint256", internalType: "uint256" },
            {
              name: "verifyingContract",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
            {
              name: "extensions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            {
              name: "targets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "calldatas",
              type: "bytes[]",
              internalType: "bytes[]",
            },
            {
              name: "descriptionHash",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getVotes",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            {
              name: "timepoint",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getVotesWithParams",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            {
              name: "timepoint",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "params", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasVoted",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hashProposal",
          inputs: [
            {
              name: "targets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "calldatas",
              type: "bytes[]",
              internalType: "bytes[]",
            },
            {
              name: "descriptionHash",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256[]", internalType: "uint256[]" },
            { name: "", type: "uint256[]", internalType: "uint256[]" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "proposalDeadline",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proposalSnapshot",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proposalThreshold",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "proposalVotes",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "againstVotes",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "forVotes",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "abstainVotes",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "propose",
          inputs: [
            {
              name: "targets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "calldatas",
              type: "bytes[]",
              internalType: "bytes[]",
            },
            {
              name: "description",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "quorum",
          inputs: [
            {
              name: "blockNumber",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "quorumDenominator",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "quorumNumerator",
          inputs: [
            {
              name: "timepoint",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "quorumNumerator",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "relay",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "state",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "enum IGovernor.ProposalState",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "token",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IERC5805",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "updateQuorumNumerator",
          inputs: [
            {
              name: "newQuorumNumerator",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "version",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "votingDelay",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "votingPeriod",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "event",
          name: "EIP712DomainChanged",
          inputs: [],
          anonymous: false,
        },
        {
          type: "event",
          name: "ProposalCanceled",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ProposalCreated",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "proposer",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "targets",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "signatures",
              type: "string[]",
              indexed: false,
              internalType: "string[]",
            },
            {
              name: "calldatas",
              type: "bytes[]",
              indexed: false,
              internalType: "bytes[]",
            },
            {
              name: "voteStart",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "voteEnd",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "description",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ProposalExecuted",
          inputs: [
            {
              name: "proposalId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "QuorumNumeratorUpdated",
          inputs: [
            {
              name: "oldQuorumNumerator",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "newQuorumNumerator",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "VoteCast",
          inputs: [
            {
              name: "voter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "proposalId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "support",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
            {
              name: "weight",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "reason",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "VoteCastWithParams",
          inputs: [
            {
              name: "voter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "proposalId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "support",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
            {
              name: "weight",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "reason",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "params",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "Empty", inputs: [] },
        { type: "error", name: "InvalidShortString", inputs: [] },
        {
          type: "error",
          name: "StringTooLong",
          inputs: [{ name: "str", type: "string", internalType: "string" }],
        },
      ],
      address: "0x27926a991BB0193Bf5b679bdb6Cb3d3B6581084E",
    },
    BundleBulker: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_entryPoint",
              type: "address",
              internalType: "contract IEntryPoint",
            },
          ],
          stateMutability: "nonpayable",
        },
        { type: "fallback", stateMutability: "nonpayable" },
        {
          type: "function",
          name: "entryPoint",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IEntryPoint",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "idToInflator",
          inputs: [{ name: "", type: "uint32", internalType: "uint32" }],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IInflator",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "inflate",
          inputs: [
            { name: "compressed", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            {
              name: "ops",
              type: "tuple[]",
              internalType: "struct UserOperation[]",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "beneficiary",
              type: "address",
              internalType: "address payable",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "inflatorToID",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IInflator",
            },
          ],
          outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "registerInflator",
          inputs: [
            {
              name: "inflatorId",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "inflator",
              type: "address",
              internalType: "contract IInflator",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "InflatorRegistered",
          inputs: [
            {
              name: "id",
              type: "uint32",
              indexed: false,
              internalType: "uint32",
            },
            {
              name: "inflator",
              type: "address",
              indexed: false,
              internalType: "contract IInflator",
            },
          ],
          anonymous: false,
        },
      ],
      address: "0x8d2D899402ed84b6c0510bB1ad34ee436ADDD20d",
    },
    KintoInflator: {
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "_inflate",
          inputs: [
            { name: "decompressed", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            {
              name: "op",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "compress",
          inputs: [
            {
              name: "op",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            { name: "compressed", type: "bytes", internalType: "bytes" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "compressSimple",
          inputs: [
            {
              name: "op",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            { name: "compressed", type: "bytes", internalType: "bytes" },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "inflate",
          inputs: [
            { name: "compressed", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            {
              name: "op",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "inflateSimple",
          inputs: [
            { name: "compressed", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            {
              name: "op",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "kintoContracts",
          inputs: [{ name: "", type: "string", internalType: "string" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "kintoNames",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setKintoContract",
          inputs: [
            { name: "name", type: "string", internalType: "string" },
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "KintoContractSet",
          inputs: [
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "target",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
      address: "0x336a76a7A2a1e97CE20c420F39FC08c441234aa2",
    },
    RewardsDistributor: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "kinto_",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "engen_",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "startTime_",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ENGEN",
          inputs: [],
          outputs: [
            { name: "", type: "address", internalType: "contract IERC20" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ENGEN_HOLDER_BONUS",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ENGEN_MULTIPLIER",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "KINTO",
          inputs: [],
          outputs: [
            { name: "", type: "address", internalType: "contract IERC20" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "UPDATER_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "UPGRADE_INTERFACE_VERSION",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "bonusAmount",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "claim",
          inputs: [
            {
              name: "proof",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
            { name: "user", type: "address", internalType: "address" },
            {
              name: "totalUserTokens",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimEngen",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimedByUser",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "claimedRoot",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "engenHolders",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRewards",
          inputs: [{ name: "time", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRewards",
          inputs: [
            {
              name: "fromTime",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "toTime", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTotalLimit",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTotalLimit",
          inputs: [{ name: "time", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUnclaimedLimit",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasClaimedEngen",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            { name: "root_", type: "bytes32", internalType: "bytes32" },
            {
              name: "bonusAmount_",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "quarters",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "rewardsPerQuarter",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "root",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "startTime",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalClaimed",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalKintoFromEngenClaimed",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalTokens",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "updateBonusAmount",
          inputs: [
            {
              name: "newBonusAmount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateEngenHolders",
          inputs: [
            {
              name: "users",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "values", type: "bool[]", internalType: "bool[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateRoot",
          inputs: [
            { name: "newRoot", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "BonusAmountUpdated",
          inputs: [
            {
              name: "newBonusAmount",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "oldBonusAmount",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint64",
              indexed: false,
              internalType: "uint64",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RootUpdated",
          inputs: [
            {
              name: "newRoot",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "oldRoot",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "UserClaimed",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "UserEngenClaimed",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          type: "error",
          name: "AddressEmptyCode",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "AddressInsufficientBalance",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "AlreadyClaimed",
          inputs: [{ name: "user", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "ERC1967InvalidImplementation",
          inputs: [
            {
              name: "implementation",
              type: "address",
              internalType: "address",
            },
          ],
        },
        { type: "error", name: "ERC1967NonPayable", inputs: [] },
        {
          type: "error",
          name: "EngenAlreadyClaimed",
          inputs: [{ name: "user", type: "address", internalType: "address" }],
        },
        { type: "error", name: "FailedInnerCall", inputs: [] },
        { type: "error", name: "InvalidInitialization", inputs: [] },
        {
          type: "error",
          name: "InvalidProof",
          inputs: [
            {
              name: "proof",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
            { name: "leaf", type: "bytes32", internalType: "bytes32" },
          ],
        },
        {
          type: "error",
          name: "MaxLimitReached",
          inputs: [
            { name: "amount", type: "uint256", internalType: "uint256" },
            { name: "limit", type: "uint256", internalType: "uint256" },
          ],
        },
        { type: "error", name: "NotInitializing", inputs: [] },
        {
          type: "error",
          name: "ReentrancyGuardReentrantCall",
          inputs: [],
        },
        {
          type: "error",
          name: "RootAlreadyClaimed",
          inputs: [{ name: "user", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "SafeERC20FailedOperation",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "UUPSUnauthorizedCallContext",
          inputs: [],
        },
        {
          type: "error",
          name: "UUPSUnsupportedProxiableUUID",
          inputs: [{ name: "slot", type: "bytes32", internalType: "bytes32" }],
        },
      ],
      address: "0xD157904639E89df05e89e0DabeEC99aE3d74F9AA",
    },
    SponsorPaymaster: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "__entryPoint",
              type: "address",
              internalType: "contract IEntryPoint",
            },
            {
              name: "_walletFactory",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "COST_OF_POST",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MAX_COST_OF_PREVERIFICATION",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MAX_COST_OF_VERIFICATION",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "RATE_LIMIT_PERIOD",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "RATE_LIMIT_THRESHOLD_TOTAL",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "addDepositFor",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "addStake",
          inputs: [
            {
              name: "unstakeDelaySec",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "appRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appUserLimit",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
            { name: "app", type: "address", internalType: "address" },
          ],
          outputs: [
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint256", internalType: "uint256" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balances",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "contractSpent",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "costLimit",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "lastOperationTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "operationCount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ethCostCount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "deposit",
          inputs: [],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "depositInfo",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [
            { name: "amount", type: "uint256", internalType: "uint256" },
            {
              name: "_unlockBlock",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "entryPoint",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IEntryPoint",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDeposit",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "globalRateLimit",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [
            {
              name: "lastOperationTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "operationCount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ethCostCount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            { name: "_owner", type: "address", internalType: "address" },
            {
              name: "_appRegistry",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
            {
              name: "_kintoID",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lockTokenDeposit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "postOp",
          inputs: [
            {
              name: "mode",
              type: "uint8",
              internalType: "enum IPaymaster.PostOpMode",
            },
            { name: "context", type: "bytes", internalType: "bytes" },
            {
              name: "actualGasCost",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rateLimit",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "lastOperationTime",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "operationCount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ethCostCount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAppRegistry",
          inputs: [
            {
              name: "_newRegistry",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setUserOpMaxCost",
          inputs: [
            {
              name: "_newUserOpMaxCost",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unlockBlock",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "unlockStake",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unlockTokenDeposit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "userOpMaxCost",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "validatePaymasterUserOp",
          inputs: [
            {
              name: "userOp",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "userOpHash",
              type: "bytes32",
              internalType: "bytes32",
            },
            { name: "maxCost", type: "uint256", internalType: "uint256" },
          ],
          outputs: [
            { name: "context", type: "bytes", internalType: "bytes" },
            {
              name: "validationData",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdrawStake",
          inputs: [
            {
              name: "withdrawAddress",
              type: "address",
              internalType: "address payable",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdrawTo",
          inputs: [
            {
              name: "withdrawAddress",
              type: "address",
              internalType: "address payable",
            },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdrawTokensTo",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AppRegistrySet",
          inputs: [
            {
              name: "oldRegistry",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newRegistry",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "UserOpMaxCostSet",
          inputs: [
            {
              name: "oldUserOpMaxCost",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "newUserOpMaxCost",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "AccountKYCRequired", inputs: [] },
        { type: "error", name: "AppGasLimitExceeded", inputs: [] },
        { type: "error", name: "AppRateLimitExceeded", inputs: [] },
        { type: "error", name: "DepositNotLocked", inputs: [] },
        { type: "error", name: "DepositTooLow", inputs: [] },
        { type: "error", name: "GasOutsideRangeForPostOp", inputs: [] },
        { type: "error", name: "GasTooHighForUserOp", inputs: [] },
        { type: "error", name: "GasTooHighForVerification", inputs: [] },
        { type: "error", name: "InvalidAmount", inputs: [] },
        { type: "error", name: "InvalidRegistry", inputs: [] },
        { type: "error", name: "InvalidTarget", inputs: [] },
        { type: "error", name: "KintoRateLimitExceeded", inputs: [] },
        { type: "error", name: "OnlyOwner", inputs: [] },
        {
          type: "error",
          name: "PaymasterAndDataLengthInvalid",
          inputs: [],
        },
        { type: "error", name: "SenderKYCRequired", inputs: [] },
        { type: "error", name: "TokenDepositLocked", inputs: [] },
      ],
      address: "0x1842a4EFf3eFd24c50B63c3CF89cECEe245Fc2bd",
    },
    Counter: {
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "count",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "increment",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      address: "0xdb791AF345A21588957E4e45596411b2Be2BD4cd",
    },
    IBridge: {
      abi: [
        {
          type: "function",
          name: "bridge",
          inputs: [
            {
              name: "receiver_",
              type: "address",
              internalType: "address",
            },
            { name: "amount_", type: "uint256", internalType: "uint256" },
            {
              name: "msgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "connector_",
              type: "address",
              internalType: "address",
            },
            {
              name: "execPayload_",
              type: "bytes",
              internalType: "bytes",
            },
            { name: "options_", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getMinFees",
          inputs: [
            {
              name: "connector_",
              type: "address",
              internalType: "address",
            },
            {
              name: "msgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "payloadSize_",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "totalFees",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "receiveInbound",
          inputs: [
            {
              name: "siblingChainSlug_",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "payload_", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "retry",
          inputs: [
            {
              name: "connector_",
              type: "address",
              internalType: "address",
            },
            {
              name: "messageId_",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
    },
    IConnector: {
      abi: [
        {
          type: "function",
          name: "getMessageId",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMinFees",
          inputs: [
            {
              name: "msgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "payloadSize_",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "totalFees",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "outbound",
          inputs: [
            {
              name: "msgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "payload_", type: "bytes", internalType: "bytes" },
            { name: "options_", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            {
              name: "messageId_",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "siblingChainSlug",
          inputs: [],
          outputs: [{ name: "", type: "uint32", internalType: "uint32" }],
          stateMutability: "view",
        },
      ],
    },
    IController: {
      abi: [
        {
          type: "function",
          name: "connectorCache",
          inputs: [
            {
              name: "connector_",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [{ name: "cache", type: "bytes", internalType: "bytes" }],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "identifierCache",
          inputs: [
            {
              name: "messageId_",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [{ name: "cache", type: "bytes", internalType: "bytes" }],
          stateMutability: "payable",
        },
      ],
    },
    IHook: {
      abi: [
        {
          type: "function",
          name: "dstPostHookCall",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct DstPostHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "messageId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "connectorCache",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "postHookData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "transferInfo",
                  type: "tuple",
                  internalType: "struct TransferInfo",
                  components: [
                    {
                      name: "receiver",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    { name: "data", type: "bytes", internalType: "bytes" },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "cacheData",
              type: "tuple",
              internalType: "struct CacheData",
              components: [
                {
                  name: "identifierCache",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "connectorCache",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "dstPreHookCall",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct DstPreHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "connectorCache",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "transferInfo",
                  type: "tuple",
                  internalType: "struct TransferInfo",
                  components: [
                    {
                      name: "receiver",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    { name: "data", type: "bytes", internalType: "bytes" },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "postHookData",
              type: "bytes",
              internalType: "bytes",
            },
            {
              name: "transferInfo",
              type: "tuple",
              internalType: "struct TransferInfo",
              components: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "data", type: "bytes", internalType: "bytes" },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "postRetryHook",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct PostRetryHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "messageId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "postRetryHookData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "cacheData",
                  type: "tuple",
                  internalType: "struct CacheData",
                  components: [
                    {
                      name: "identifierCache",
                      type: "bytes",
                      internalType: "bytes",
                    },
                    {
                      name: "connectorCache",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "cacheData",
              type: "tuple",
              internalType: "struct CacheData",
              components: [
                {
                  name: "identifierCache",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "connectorCache",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "preRetryHook",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct PreRetryHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "cacheData",
                  type: "tuple",
                  internalType: "struct CacheData",
                  components: [
                    {
                      name: "identifierCache",
                      type: "bytes",
                      internalType: "bytes",
                    },
                    {
                      name: "connectorCache",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "postRetryHookData",
              type: "bytes",
              internalType: "bytes",
            },
            {
              name: "transferInfo",
              type: "tuple",
              internalType: "struct TransferInfo",
              components: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "data", type: "bytes", internalType: "bytes" },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "srcPostHookCall",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct SrcPostHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                { name: "options", type: "bytes", internalType: "bytes" },
                {
                  name: "postSrcHookData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "transferInfo",
                  type: "tuple",
                  internalType: "struct TransferInfo",
                  components: [
                    {
                      name: "receiver",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    { name: "data", type: "bytes", internalType: "bytes" },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "transferInfo",
              type: "tuple",
              internalType: "struct TransferInfo",
              components: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "data", type: "bytes", internalType: "bytes" },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "srcPreHookCall",
          inputs: [
            {
              name: "params_",
              type: "tuple",
              internalType: "struct SrcPreHookCallParams",
              components: [
                {
                  name: "connector",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "msgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "transferInfo",
                  type: "tuple",
                  internalType: "struct TransferInfo",
                  components: [
                    {
                      name: "receiver",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    { name: "data", type: "bytes", internalType: "bytes" },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "transferInfo",
              type: "tuple",
              internalType: "struct TransferInfo",
              components: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "data", type: "bytes", internalType: "bytes" },
              ],
            },
            {
              name: "postSrcHookData",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
      ],
    },
    ISocket: {
      abi: [
        {
          type: "function",
          name: "chainSlug",
          inputs: [],
          outputs: [
            { name: "chainSlug", type: "uint32", internalType: "uint32" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "connect",
          inputs: [
            {
              name: "siblingChainSlug_",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "siblingPlug_",
              type: "address",
              internalType: "address",
            },
            {
              name: "inboundSwitchboard_",
              type: "address",
              internalType: "address",
            },
            {
              name: "outboundSwitchboard_",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            {
              name: "executionDetails_",
              type: "tuple",
              internalType: "struct ISocket.ExecutionDetails",
              components: [
                {
                  name: "packetId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "proposalCount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "executionGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "decapacitorProof",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "messageDetails_",
              type: "tuple",
              internalType: "struct ISocket.MessageDetails",
              components: [
                {
                  name: "msgId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "executionFee",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "minMsgGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "executionParams",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                { name: "payload", type: "bytes", internalType: "bytes" },
              ],
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getMinFees",
          inputs: [
            {
              name: "minMsgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "payloadSize_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "executionParams_",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "transmissionParams_",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "remoteChainSlug_",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "plug_", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "totalFees",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPlugConfig",
          inputs: [
            {
              name: "plugAddress_",
              type: "address",
              internalType: "address",
            },
            {
              name: "siblingChainSlug_",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [
            {
              name: "siblingPlug",
              type: "address",
              internalType: "address",
            },
            {
              name: "inboundSwitchboard__",
              type: "address",
              internalType: "address",
            },
            {
              name: "outboundSwitchboard__",
              type: "address",
              internalType: "address",
            },
            {
              name: "capacitor__",
              type: "address",
              internalType: "address",
            },
            {
              name: "decapacitor__",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "globalMessageCount",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "outbound",
          inputs: [
            {
              name: "remoteChainSlug_",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "minMsgGasLimit_",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "executionParams_",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "transmissionParams_",
              type: "bytes32",
              internalType: "bytes32",
            },
            { name: "payload_", type: "bytes", internalType: "bytes" },
          ],
          outputs: [
            { name: "msgId", type: "bytes32", internalType: "bytes32" },
          ],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "ExecutionSuccess",
          inputs: [
            {
              name: "msgId",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MessageOutbound",
          inputs: [
            {
              name: "localChainSlug",
              type: "uint32",
              indexed: false,
              internalType: "uint32",
            },
            {
              name: "localPlug",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "dstChainSlug",
              type: "uint32",
              indexed: false,
              internalType: "uint32",
            },
            {
              name: "dstPlug",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "msgId",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
            {
              name: "minMsgGasLimit",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "executionParams",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
            {
              name: "transmissionParams",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
            {
              name: "payload",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "fees",
              type: "tuple",
              indexed: false,
              internalType: "struct ISocket.Fees",
              components: [
                {
                  name: "transmissionFees",
                  type: "uint128",
                  internalType: "uint128",
                },
                {
                  name: "executionFee",
                  type: "uint128",
                  internalType: "uint128",
                },
                {
                  name: "switchboardFees",
                  type: "uint128",
                  internalType: "uint128",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "PlugConnected",
          inputs: [
            {
              name: "plug",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "siblingChainSlug",
              type: "uint32",
              indexed: false,
              internalType: "uint32",
            },
            {
              name: "siblingPlug",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "inboundSwitchboard",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "outboundSwitchboard",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "capacitor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "decapacitor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
    },
    EngenBadges: {
      abi: [
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MINTER_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "UPGRADER_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOfBatch",
          inputs: [
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "ids", type: "uint256[]", internalType: "uint256[]" },
          ],
          outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAllBadges",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
            { name: "upToId", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [{ name: "uri", type: "string", internalType: "string" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "operator", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mintBadges",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "ids", type: "uint256[]", internalType: "uint256[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintBadgesBatch",
          inputs: [
            {
              name: "recipients",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "ids",
              type: "uint256[][]",
              internalType: "uint256[][]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeBatchTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "ids", type: "uint256[]", internalType: "uint256[]" },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "id", type: "uint256", internalType: "uint256" },
            { name: "amount", type: "uint256", internalType: "uint256" },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            { name: "approved", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "uri",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferBatch",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferSingle",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "URI",
          inputs: [
            {
              name: "value",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "id",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "MintToManyAddresses", inputs: [] },
        { type: "error", name: "MismatchedInputLengths", inputs: [] },
        { type: "error", name: "NoTokenIDsProvided", inputs: [] },
      ],
      address: "0x1d950eA52e436854b8d343134863B21454499025",
    },
    EngenCredits: {
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "CLOCK_MODE",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "DOMAIN_SEPARATOR",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burnFrom",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burnsEnabled",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "clock",
          inputs: [],
          outputs: [{ name: "", type: "uint48", internalType: "uint48" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decreaseAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            {
              name: "subtractedValue",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "earnedCredits",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPastTotalSupply",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPastVotes",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "increaseAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            {
              name: "addedValue",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintCredits",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "permit",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setBurnsEnabled",
          inputs: [
            { name: "_burnsEnabled", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setCredits",
          inputs: [
            {
              name: "_wallets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "_points",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTransfersEnabled",
          inputs: [
            {
              name: "_transfersEnabled",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalCredits",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transfersEnabled",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "BurnsAlreadyEnabled", inputs: [] },
        { type: "error", name: "LengthMismatch", inputs: [] },
        { type: "error", name: "MintNotAllowed", inputs: [] },
        { type: "error", name: "NoTokensToMint", inputs: [] },
        { type: "error", name: "TransfersAlreadyEnabled", inputs: [] },
        { type: "error", name: "TransfersNotEnabled", inputs: [] },
      ],
      address: "0xD1295F0d8789c3E0931A04F91049dB33549E9C8F",
    },
    Treasury: {
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "UPGRADE_INTERFACE_VERSION",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "batchSendFunds",
          inputs: [
            {
              name: "_assets",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "_amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            { name: "_tos", type: "address[]", internalType: "address[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendETH",
          inputs: [
            { name: "_amount", type: "uint256", internalType: "uint256" },
            {
              name: "_to",
              type: "address",
              internalType: "address payable",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendFunds",
          inputs: [
            { name: "_asset", type: "address", internalType: "address" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
            { name: "_to", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint64",
              indexed: false,
              internalType: "uint64",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TreasuryFundsSent",
          inputs: [
            {
              name: "_asset",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "_amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "_to",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AddressEmptyCode",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "AddressInsufficientBalance",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC1967InvalidImplementation",
          inputs: [
            {
              name: "implementation",
              type: "address",
              internalType: "address",
            },
          ],
        },
        { type: "error", name: "ERC1967NonPayable", inputs: [] },
        { type: "error", name: "FailedInnerCall", inputs: [] },
        { type: "error", name: "InvalidInitialization", inputs: [] },
        { type: "error", name: "NotInitializing", inputs: [] },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ReentrancyGuardReentrantCall",
          inputs: [],
        },
        {
          type: "error",
          name: "SafeERC20FailedOperation",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "UUPSUnauthorizedCallContext",
          inputs: [],
        },
        {
          type: "error",
          name: "UUPSUnsupportedProxiableUUID",
          inputs: [{ name: "slot", type: "bytes32", internalType: "bytes32" }],
        },
      ],
      address: "0x793500709506652Fcc61F0d2D0fDa605638D4293",
    },
    KYCViewer: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_kintoWalletFactory",
              type: "address",
              internalType: "address",
            },
            { name: "_faucet", type: "address", internalType: "address" },
            {
              name: "_engenCredits",
              type: "address",
              internalType: "address",
            },
            {
              name: "_kintoAppRegistry",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "engenCredits",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IEngenCredits",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "faucet",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IFaucet",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getBalances",
          inputs: [
            {
              name: "tokens",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "balances",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getCountry",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint16", internalType: "uint16" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDevApps",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct IKintoAppRegistry.Metadata[]",
              components: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "dsaEnabled",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "rateLimitPeriod",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "rateLimitNumber",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "gasLimitPeriod",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "gasLimitCost",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "name", type: "string", internalType: "string" },
                {
                  name: "devEOAs",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "appContracts",
                  type: "address[]",
                  internalType: "address[]",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUserInfo",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            {
              name: "wallet",
              type: "address",
              internalType: "address payable",
            },
          ],
          outputs: [
            {
              name: "info",
              type: "tuple",
              internalType: "struct IKYCViewer.UserInfo",
              components: [
                {
                  name: "ownerBalance",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "walletBalance",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "walletPolicy",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "walletOwners",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "claimedFaucet",
                  type: "bool",
                  internalType: "bool",
                },
                { name: "hasNFT", type: "bool", internalType: "bool" },
                {
                  name: "engenCreditsEarned",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "engenCreditsClaimed",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "isKYC", type: "bool", internalType: "bool" },
                {
                  name: "recoveryTs",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "insurancePolicy",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "hasValidInsurance",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "insuranceTimestamp",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deployer",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getWalletOwners",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "owners",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasTrait",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "_traitId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasTraits",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            {
              name: "_traitIds",
              type: "uint16[]",
              internalType: "uint16[]",
            },
          ],
          outputs: [{ name: "", type: "bool[]", internalType: "bool[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isCompany",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isIndividual",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isKYC",
          inputs: [{ name: "addr", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSanctionsSafe",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isSanctionsSafeIn",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "_countryId", type: "uint16", internalType: "uint16" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "kintoAppRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
      address: "0x33F28C3a636B38683a38987100723f2e2d3d038e",
    },
    WalletViewer: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_kintoWalletFactory",
              type: "address",
              internalType: "address",
            },
            {
              name: "_appRegistry",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "appRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "fetchAppAddresesFromIndex",
          inputs: [
            { name: "_index", type: "uint256", internalType: "uint256" },
          ],
          outputs: [
            { name: "", type: "address[50]", internalType: "address[50]" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "fetchUserAppAddressesFromIndex",
          inputs: [
            {
              name: "walletAddress",
              type: "address",
              internalType: "address",
            },
            { name: "_index", type: "uint256", internalType: "uint256" },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[50]",
              internalType: "struct IWalletViewer.WalletApp[50]",
              components: [
                {
                  name: "whitelisted",
                  type: "bool",
                  internalType: "bool",
                },
                { name: "key", type: "address", internalType: "address" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "OnlyOwner", inputs: [] },
      ],
      address: "0x5D8994019E56343c59cA980e1d449222e22d527f",
    },
    KintoWallet: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "__entryPoint",
              type: "address",
              internalType: "contract IEntryPoint",
            },
            {
              name: "_kintoID",
              type: "address",
              internalType: "contract IKintoID",
            },
            {
              name: "_kintoApp",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
            {
              name: "_factory",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "ALL_SIGNERS",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MAX_SIGNERS",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MINUS_ONE_SIGNER",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "RECOVERY_TIME",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "SINGLE_SIGNER",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TWO_SIGNERS",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "WALLET_TARGET_LIMIT",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appSigner",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appWhitelist",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "cancelRecovery",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeRecoverer",
          inputs: [
            {
              name: "newRecoverer",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "completeRecovery",
          inputs: [
            {
              name: "newSigners",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "entryPoint",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IEntryPoint",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            { name: "dest", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "func", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "executeBatch",
          inputs: [
            {
              name: "dest",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            { name: "func", type: "bytes[]", internalType: "bytes[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "factory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoWalletFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "funderWhitelist",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getInsurancePrice",
          inputs: [
            {
              name: "newPolicy",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "paymentToken",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "getNonce",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getOwners",
          inputs: [],
          outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getOwnersCount",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "inRecovery",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            { name: "anOwner", type: "address", internalType: "address" },
            {
              name: "_recoverer",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "insurancePolicy",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "insuranceTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isFunderWhitelisted",
          inputs: [
            { name: "funder", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256[]", internalType: "uint256[]" },
            { name: "", type: "uint256[]", internalType: "uint256[]" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "owners",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "recoverer",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "resetSigners",
          inputs: [
            {
              name: "newSigners",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "newPolicy", type: "uint8", internalType: "uint8" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAppKey",
          inputs: [
            { name: "app", type: "address", internalType: "address" },
            { name: "signer", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setFunderWhitelist",
          inputs: [
            {
              name: "newWhitelist",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "flags", type: "bool[]", internalType: "bool[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setInsurancePolicy",
          inputs: [
            {
              name: "newPolicy",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "paymentToken",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSignerPolicy",
          inputs: [{ name: "newPolicy", type: "uint8", internalType: "uint8" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "signerPolicy",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "startRecovery",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokensReceived",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "bytes", internalType: "bytes" },
            { name: "", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "validateUserOp",
          inputs: [
            {
              name: "userOp",
              type: "tuple",
              internalType: "struct UserOperation",
              components: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "initCode",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "callGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verificationGasLimit",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "preVerificationGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "maxPriorityFeePerGas",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymasterAndData",
                  type: "bytes",
                  internalType: "bytes",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "userOpHash",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "missingAccountFunds",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "validationData",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "whitelistApp",
          inputs: [
            {
              name: "apps",
              type: "address[]",
              internalType: "address[]",
            },
            { name: "flags", type: "bool[]", internalType: "bool[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "whitelistAppAndSetKey",
          inputs: [
            { name: "app", type: "address", internalType: "address" },
            { name: "signer", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "AppKeyCreated",
          inputs: [
            {
              name: "appKey",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "signer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "InsurancePolicyChanged",
          inputs: [
            {
              name: "newPolicy",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "oldPolicy",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "KintoWalletInitialized",
          inputs: [
            {
              name: "entryPoint",
              type: "address",
              indexed: true,
              internalType: "contract IEntryPoint",
            },
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RecovererChanged",
          inputs: [
            {
              name: "newRecoverer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "recoverer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SignersChanged",
          inputs: [
            {
              name: "newSigners",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
            {
              name: "oldSigners",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "WalletPolicyChanged",
          inputs: [
            {
              name: "newPolicy",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "oldPolicy",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AppNotWhitelisted",
          inputs: [
            { name: "sponsor", type: "address", internalType: "address" },
            { name: "addr", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "DuplicateSigner", inputs: [] },
        { type: "error", name: "EmptySigners", inputs: [] },
        { type: "error", name: "InvalidApp", inputs: [] },
        {
          type: "error",
          name: "InvalidDevMode",
          inputs: [
            {
              name: "newDevMode",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "InvalidInsurancePayment",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidInsurancePolicy",
          inputs: [
            {
              name: "newPolicy",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "InvalidPolicy",
          inputs: [
            { name: "newPolicy", type: "uint8", internalType: "uint8" },
            {
              name: "newSigners",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        { type: "error", name: "InvalidRecoverer", inputs: [] },
        { type: "error", name: "InvalidSignatureLength", inputs: [] },
        { type: "error", name: "InvalidSigner", inputs: [] },
        { type: "error", name: "KYCRequired", inputs: [] },
        { type: "error", name: "LengthMismatch", inputs: [] },
        {
          type: "error",
          name: "MaxSignersExceeded",
          inputs: [
            {
              name: "newSigners",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        { type: "error", name: "OnlyFactory", inputs: [] },
        { type: "error", name: "OnlySelf", inputs: [] },
        { type: "error", name: "OwnerKYCMustBeBurned", inputs: [] },
        { type: "error", name: "RecoveryNotStarted", inputs: [] },
        { type: "error", name: "RecoveryTimeNotElapsed", inputs: [] },
      ],
    },
    KintoWalletFactory: {
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_implAddressP",
              type: "address",
              internalType: "contract IKintoWallet",
            },
            {
              name: "_appRegistry",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
            {
              name: "_kintoID",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "adminApproved",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "appRegistry",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoAppRegistry",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approveWalletRecovery",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beacon",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract UpgradeableBeacon",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "changeWalletRecoverer",
          inputs: [
            {
              name: "wallet",
              type: "address",
              internalType: "address payable",
            },
            {
              name: "_newRecoverer",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claimFromFaucet",
          inputs: [
            { name: "_faucet", type: "address", internalType: "address" },
            {
              name: "_signatureData",
              type: "tuple",
              internalType: "struct IFaucet.SignatureData",
              components: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "expiresAt",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "completeWalletRecovery",
          inputs: [
            {
              name: "wallet",
              type: "address",
              internalType: "address payable",
            },
            {
              name: "newSigners",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAccount",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            {
              name: "recoverer",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [
            {
              name: "ret",
              type: "address",
              internalType: "contract IKintoWallet",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "factoryWalletVersion",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "fundWallet",
          inputs: [
            {
              name: "wallet",
              type: "address",
              internalType: "address payable",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getAddress",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            {
              name: "recoverer",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getWalletTimestamp",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "kintoID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IKintoID",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendETHToDeployer",
          inputs: [
            { name: "deployer", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "sendETHToEOA",
          inputs: [
            { name: "eoa", type: "address", internalType: "address" },
            { name: "app", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "sendMoneyToAccount",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "sendMoneyToRecoverer",
          inputs: [
            { name: "wallet", type: "address", internalType: "address" },
            {
              name: "recoverer",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "startWalletRecovery",
          inputs: [
            {
              name: "wallet",
              type: "address",
              internalType: "address payable",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "totalWallets",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeAllWalletImplementations",
          inputs: [
            {
              name: "newImplementationWallet",
              type: "address",
              internalType: "contract IKintoWallet",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "walletTs",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "KintoWalletFactoryCreation",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "version",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "KintoWalletFactoryUpgraded",
          inputs: [
            {
              name: "oldImplementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newImplementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "AmountMismatch", inputs: [] },
        {
          type: "error",
          name: "DeploymentNotAllowed",
          inputs: [{ name: "reason", type: "string", internalType: "string" }],
        },
        { type: "error", name: "EmptyBytecode", inputs: [] },
        { type: "error", name: "InvalidImplementation", inputs: [] },
        { type: "error", name: "InvalidInput", inputs: [] },
        {
          type: "error",
          name: "InvalidRecoverer",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidSender",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidTarget",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidWallet",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "InvalidWalletOrFunder",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        { type: "error", name: "KYCMustNotExist", inputs: [] },
        { type: "error", name: "KYCRequired", inputs: [] },
        { type: "error", name: "NotAdminApproved", inputs: [] },
        {
          type: "error",
          name: "OnlyPrivileged",
          inputs: [{ name: "", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OnlyRecoverer",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "SendFailed", inputs: [] },
      ],
      address: "0x8a4720488CA32f1223ccFE5A087e250fE3BC5D75",
    },
  },
};