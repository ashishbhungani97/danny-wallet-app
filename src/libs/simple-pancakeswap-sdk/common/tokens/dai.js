"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAI = void 0;
const chain_id_1 = require("../../enums/chain-id.js");
/**
 * DAI token context
 */
class DAI {
    static MAINNET() {
        return {
            chainId: chain_id_1.ChainId.BSC,
            contractAddress: '0xB25CB8588D2688716bB307af27A403a07064a665',
            decimals: 18,
            symbol: 'RLY',
            name: 'Rescue Loyal',
        };
    }
    /**
     * Get DAI token info
     */
    static token() {
        return {
            chainId: chain_id_1.ChainId.BSC,
            contractAddress: '0xB25CB8588D2688716bB307af27A403a07064a665',
            decimals: 18,
            symbol: 'RLY',
            name: 'Rescue Loyal',
        };
    }
}
exports.DAI = DAI;
