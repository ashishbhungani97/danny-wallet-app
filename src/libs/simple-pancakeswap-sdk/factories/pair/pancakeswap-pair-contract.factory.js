'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.PancakeswapPairContractFactory = void 0;
const contract_context_1 = require('../../common/contract-context.js');
class PancakeswapPairContractFactory {
  constructor(_ethersProvider) {
    this._ethersProvider = _ethersProvider;
    this._pancakeswapPairFactory = this._ethersProvider.getContract(
      JSON.stringify(contract_context_1.ContractContext.pairAbi),
      contract_context_1.ContractContext.pairAddress,
    );
  }
  async allPairs(parameter0) {
    return await this._pancakeswapPairFactory.allPairs(parameter0);
  }
  async allPairsLength() {
    return (await this._pancakeswapPairFactory.allPairsLength()).toHexString();
  }
  createPair(tokenA, tokenB) {
    return this._pancakeswapPairFactory.interface.encodeFunctionData(
      'createPair',
      [tokenA, tokenB],
    );
  }
  async feeTo() {
    return await this._pancakeswapPairFactory.feeTo();
  }
  async feeToSetter() {
    return await this._pancakeswapPairFactory.feeToSetter();
  }
  async getPair(parameter0, parameter1) {
    return await this._pancakeswapPairFactory.getPair(parameter0, parameter1);
  }
  async setFeeTo(_feeTo) {
    return this._pancakeswapPairFactory.interface.encodeFunctionData(
      'setFeeTo',
      [_feeTo],
    );
  }
  async setFeeToSetter(_feeToSetter) {
    return this._pancakeswapPairFactory.interface.encodeFunctionData(
      'setFeeToSetter',
      [_feeToSetter],
    );
  }
}
exports.PancakeswapPairContractFactory = PancakeswapPairContractFactory;
