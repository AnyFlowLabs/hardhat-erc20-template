// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnyFlowERC20 is ERC20, Ownable {
    constructor(
        address _initialOwner,
        uint256 _initialSupply,
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) Ownable(_initialOwner) {
        _mint(_initialOwner, _initialSupply);
    }
}
