"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAddress = isAddress;
const ethers_1 = require("ethers");
function isAddress(address) {
    return ethers_1.ethers.utils.isAddress(address);
}
