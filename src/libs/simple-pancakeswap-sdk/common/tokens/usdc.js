"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDC = void 0;
const chain_id_1 = require("../../enums/chain-id.js");
/**
 * USDC token context
 */
class USDC {
    /**
     * Get USDC token info
     */
    static token() {
        return {
            chainId: chain_id_1.ChainId.BSC,
            contractAddress: '0x7d1CA6242A7A9221919e287FFCDdAeBBB5Cd7B70',
            decimals: 18,
            symbol: 'GMX',
            name: 'GMX COIN',
        };
    }
}
exports.USDC = USDC;
