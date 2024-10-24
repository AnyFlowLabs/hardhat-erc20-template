// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnyFlowERC721 is ERC721, Ownable {
    constructor(
        address _initialOwner,
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) Ownable(_initialOwner) {
        // Add additional logic here
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`.
     */
    function _baseURI() view virtual returns (string memory) {
        return "";
    }

    /**
     * @dev Mints `tokenId` and transfers it to `to`.
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - `to` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function mint(address to, uint256 tokenId) onlyOwner {
        _safeMint(to, tokenId);
    }

    // Add additional logic here
}
