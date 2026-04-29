"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDT = void 0;
const chain_id_1 = require("../../enums/chain-id.js");
/**
 * USDT token context
 */
class USDT {
    /**
     * Get USDT token info
     */
    static token() {
        return {
            chainId: chain_id_1.ChainId.BSC,
            contractAddress: '0x3A07aBE1Abce54838550A1d2aec4CBd961a39084',
            decimals: 18,
            symbol: 'USDT',
            name: 'Bridge USDT',
        };
    }
}
exports.USDT = USDT;
