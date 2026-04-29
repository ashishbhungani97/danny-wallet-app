'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.PancakeswapContractFactory = void 0;
const contract_context_1 = require('../../common/contract-context.js');
class PancakeswapContractFactory {
  constructor(_ethersProvider) {
    this._ethersProvider = _ethersProvider;
    this._pancakeswapFactoryContract = this._ethersProvider.getContract(
      JSON.stringify(contract_context_1.ContractContext.factoryAbi),
      contract_context_1.ContractContext.factoryAddress,
    );
  }
  async allPairs(parameter0) {
    return await this._pancakeswapFactoryContract.allPairs(parameter0);
  }
  async allPairsLength() {
    return (
      await this._pancakeswapFactoryContract.allPairsLength()
    ).toHexString();
  }
  createPair(tokenA, tokenB) {
    return this._pancakeswapFactoryContract.interface.encodeFunctionData(
      'createPair',
      [tokenA, tokenB],
    );
  }
  async getPair(token0, token1) {
    return await this._pancakeswapFactoryContract.getPair(token0, token1);
  }
  async feeTo() {
    return await this._pancakeswapFactoryContract.feeTo();
  }
  async feeToSetter() {
    return await this._pancakeswapFactoryContract.feeToSetter();
  }
  async setFeeTo(_feeTo) {
    return this._pancakeswapFactoryContract.interface.encodeFunctionData(
      'setFeeTo',
      [_feeTo],
    );
  }
  async setFeeToSetter(_feeToSetter) {
    return this._pancakeswapFactoryContract.interface.encodeFunctionData(
      'setFeeToSetter',
      [_feeToSetter],
    );
  }
}
exports.PancakeswapContractFactory = PancakeswapContractFactory;
