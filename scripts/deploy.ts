import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0xA71a71A71a71a71A71a71a71a71A71a71A71A71a',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'AnyFlowERC20', // _name
        'AF',           // _symbol
    ] as const;

    const { deploymentTransaction } = await hre.viem.sendDeploymentTransaction("AnyFlowERC20", args);

    console.log(`Deployment transaction for AnyFlowERC20 broadcasted... tx: ${deploymentTransaction.hash}`);

    // With AnyFlow you do not need to wait for the transaction to be mined
}

main()