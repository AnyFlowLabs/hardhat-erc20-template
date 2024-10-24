import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  // With AnyFlow no configuration is needed, just click 'deploy'!
  // learn more here: https://docs.anyflow.pro/docs/how_it_works/
};

export default config;
