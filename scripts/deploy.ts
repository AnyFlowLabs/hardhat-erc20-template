import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC721...')

    const args = [
        '0xA71a71A71a71a71A71a71a71a71A71a71A71A71a',   // _initialOwner
        'AnyFlowERC721', // _name
        'AF',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC721", args);

    console.log(`Contract AnyFlowERC721 deployed to: ${contract.address}`);
}

main()