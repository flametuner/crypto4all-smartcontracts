import { ethers } from "hardhat";

const contractAddress = process.env.CONTRACT_ADDRESS || "";
const newExecutor = process.env.EXECUTOR_ADDRESS || "";

async function main() {
  console.log(`Updating executor to: ${newExecutor}`);
  // We get the contract to deploy
  const Crypto4All = await ethers.getContractFactory("Crypto4All");
  const instance = Crypto4All.attach(contractAddress);

  const updateExecutorTx = await instance.updateExecutor(newExecutor);
  await updateExecutorTx.wait();

  console.log("New executor tx hash:", updateExecutorTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
