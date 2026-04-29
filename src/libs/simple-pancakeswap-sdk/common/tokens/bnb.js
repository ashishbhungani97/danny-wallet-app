'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.BNB = void 0;
const chain_id_1 = require('../../enums/chain-id.js');
/**
 * BNB token context
 */
class BNB {
  /**
   * Get BNB token info
   */
  static token() {
    return {
      chainId: chain_id_1.ChainId.BSC,
      contractAddress: '0xBB37263380d2AD59d7CE807Bb9EFA1A697598e7F',
      decimals: 18,
      symbol: 'WDAN',
      name: 'Wrapped DAN',
    };
  }
}
exports.BNB = BNB;
