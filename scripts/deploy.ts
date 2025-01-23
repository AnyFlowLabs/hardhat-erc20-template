import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args: [string, bigint, string, string] = [
        process.env.OWNER_ADDRESS || '0xA71a71A71a71a71A71a71a71a71A71a71A71A71a',   // _initialOwner
        BigInt(process.env.INITIAL_SUPPLY || '100000000000000000000000000'),   // _initialSupply
        process.env.TOKEN_NAME || 'AnyFlowERC20',  // _name
        process.env.TOKEN_SYMBOL || 'AF',          // _symbol
    ];

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);


    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));