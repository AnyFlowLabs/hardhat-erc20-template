import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0xA71a71A71a71a71A71a71a71a71A71a71A71A71a',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'AnyFlowERC20', // _name
        'AF',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));