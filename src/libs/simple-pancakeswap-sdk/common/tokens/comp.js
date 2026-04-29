"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMP = void 0;
const chain_id_1 = require("../../enums/chain-id.js");
/**
 * COMP token context
 */
class COMP {
    /**
     * Get COMP token info
     */
    static token() {
        return {
            chainId: chain_id_1.ChainId.BSC,
            contractAddress: '0xD84b7c96c23BAb37b585Bac98DFE6651D30F6c11',
            decimals: 18,
            symbol: 'HMOOB',
            name: 'HMOOB COIN',
        };
    }
}
exports.COMP = COMP;
