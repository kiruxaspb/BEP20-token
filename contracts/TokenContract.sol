// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./BEP20.sol";

contract TokenContract is BEP20 {
    constructor() BEP20("K Token", "KTX") {}

    function decimals() public view virtual override returns (uint8){
        return 6;
    }
}