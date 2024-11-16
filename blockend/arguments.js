const { networks, priceFeedIds, namiMpcWalletAddress } = require("./networks");

// module.exports = [
//   [
//     networks.baseSepolia.mailbox,
//     networks.baseSepolia.isp,
//     networks.baseSepolia.pythFeed,
//     priceFeedIds,
//     networks.baseSepolia.createDisasterSchemaId,
//     networks.baseSepolia.fundDisasterSchemaId,
//     networks.kinto.core,
//     namiMpcWalletAddress,
//   ],
// ];

module.exports = [
  [
    networks.baseSepolia.mailbox,
    networks.baseSepolia.isp,
    networks.baseSepolia.pythFeed,
    priceFeedIds,
    networks.baseSepolia.createDisasterSchemaId,
    networks.baseSepolia.fundDisasterSchemaId,
    networks.kinto.core,
    namiMpcWalletAddress,
    networks.baseSepolia.vaultFactory,
  ],
];
