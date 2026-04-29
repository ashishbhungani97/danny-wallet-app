"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEthersBigNumber = toEthersBigNumber;
const ethers_1 = require("ethers");
function toEthersBigNumber(value) {
    return ethers_1.BigNumber.from(value.toFixed());
}
