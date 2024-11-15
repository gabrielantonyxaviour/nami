const { networks, priceFeedIds } = require("../../networks");

task("deploy-tokens", "Deploys the Tokens")
  .addOptionalParam(
    "verify",
    "Set to true to verify contract",
    false,
    types.boolean
  )
  .setAction(async (taskArgs) => {
    console.log(`Deploying WETH contract to ${network.name}`);

    console.log("\n__Compiling Contracts__");
    await run("compile");

    const wethContractFactory = await ethers.getContractFactory("WETH");

    const args = [];

    const wethContract = await wethContractFactory.deploy(...args);

    console.log(
      `\nWaiting ${
        networks[network.name].confirmations
      } blocks for transaction ${
        wethContract.deployTransaction.hash
      } to be confirmed...`
    );

    await wethContract.deployTransaction.wait(
      networks[network.name].confirmations
    );

    console.log("\nDeployed WETH contract to:", wethContract.address);

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
          address: wethContract.address,
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
      `\n WETH contract deployed to ${wethContract.address} on ${network.name}`
    );

    console.log(`Deploying USDC contract to ${network.name}`);

    const usdcContractFactory = await ethers.getContractFactory("USDC");

    const usdcContrct = await usdcContractFactory.deploy(...args);

    console.log(
      `\nWaiting ${
        networks[network.name].confirmations
      } blocks for transaction ${
        usdcContrct.deployTransaction.hash
      } to be confirmed...`
    );

    await usdcContrct.deployTransaction.wait(
      networks[network.name].confirmations
    );

    console.log("\nDeployed USDC contract to:", usdcContrct.address);

    if (network.name === "localFunctionsTestnet") {
      return;
    }

    if (
      network.name !== "localFunctionsTestnet" &&
      verifyContract &&
      !!networks[network.name].verifyApiKey &&
      networks[network.name].verifyApiKey !== "UNSET"
    ) {
      try {
        console.log("\nVerifying contract...");
        await run("verify:verify", {
          address: usdcContrct.address,
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
      `\n USDC contract deployed to ${usdcContrct.address} on ${network.name}`
    );

    console.log(`Deploying USDT contract to ${network.name}`);

    const usdtContractFactory = await ethers.getContractFactory("USDT");

    const usdtContrct = await usdtContractFactory.deploy(...args);

    console.log(
      `\nWaiting ${
        networks[network.name].confirmations
      } blocks for transaction ${
        usdtContrct.deployTransaction.hash
      } to be confirmed...`
    );

    await usdtContrct.deployTransaction.wait(
      networks[network.name].confirmations
    );

    console.log("\nDeployed USDT contract to:", usdtContrct.address);

    if (network.name === "localFunctionsTestnet") {
      return;
    }

    if (
      network.name !== "localFunctionsTestnet" &&
      verifyContract &&
      !!networks[network.name].verifyApiKey &&
      networks[network.name].verifyApiKey !== "UNSET"
    ) {
      try {
        console.log("\nVerifying contract...");
        await run("verify:verify", {
          address: usdtContrct.address,
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
  });
