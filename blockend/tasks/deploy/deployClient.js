const { networks, priceFeedIds } = require("../../networks");

task("deploy-client", "Deploys the TestingAiClient contract")
  .addOptionalParam(
    "verify",
    "Set to true to verify contract",
    false,
    types.boolean
  )
  .setAction(async (taskArgs) => {
    console.log(`Deploying TestingAiClient contract to ${network.name}`);

    console.log("\n__Compiling Contracts__");
    await run("compile");

    const clientContractFactory = await ethers.getContractFactory(
      "TestingAiClient"
    );

    // TODO: Change to Kinto
    const args = [
      [
        networks.baseSepolia.mailbox,
        networks.baseSepolia.isp,
        networks.baseSepolia.pythOracle,
        priceFeedIds,
        networks.baseSepolia.createDisasterSchemaId,
        networks.baseSepolia.fundDisasterSchemaId,
        networks.polygonAmoy.core, // TODO: Change to Kinto
        "0x0429A2Da7884CA14E53142988D5845952fE4DF6a", // TODO: Change to Nami MPC Wallet
      ],
    ];

    console.log(args);

    const clientContract = await clientContractFactory.deploy(...args);

    console.log(
      `\nWaiting ${
        networks[network.name].confirmations
      } blocks for transaction ${
        clientContract.deployTransaction.hash
      } to be confirmed...`
    );

    await clientContract.deployTransaction.wait(
      networks[network.name].confirmations
    );

    console.log(
      "\nDeployed TestingAiClient contract to:",
      clientContract.address
    );

    if (network.name === "localFunctionsTestnet") {
      return;
    }

    const verifyContract = taskArgs.verify;
    if (
      network.name !== "localFunctionsTestnet" &&
      verifyContract &&
      !!networks[network.name].verifyApiKey &&
      networks[network.name].verifyApiKey !== "UNSET"
    ) {
      try {
        console.log("\nVerifying contract...");
        await run("verify:verify", {
          address: clientContract.address,
          constructorArguments: args,
        });
        console.log("Contract verified");
      } catch (error) {
        if (!error.message.includes("Already Verified")) {
          console.log(
            "Error verifying contract.  Ensure you are waiting for enough confirmation blocks, delete the build folder and try again."
          );
          console.log(error);
        } else {
          console.log("Contract already verified");
        }
      }
    } else if (verifyContract && network.name !== "localFunctionsTestnet") {
      console.log(
        "\nPOLYGONSCAN_API_KEY, ETHERSCAN_API_KEY or FUJI_SNOWTRACE_API_KEY is missing. Skipping contract verification..."
      );
    }

    console.log(
      `\n TestingAiClient contract deployed to ${clientContract.address} on ${network.name}`
    );
  });