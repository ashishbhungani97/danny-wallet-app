'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.PancakeswapPair = void 0;
const error_codes_1 = require('../../common/errors/error-codes.js');
const pancakeswap_error_1 = require('../../common/errors/pancakeswap-error.js');
const is_address_1 = require('../../common/utils/is-address.js');
const ethers_provider_1 = require('../../ethers-provider.js');
const tokens_factory_1 = require('../token/tokens.factory.js');
const pancakeswap_pair_settings_1 = require('./models/pancakeswap-pair-settings.js');
const pancakeswap_pair_factory_1 = require('./pancakeswap-pair.factory.js');
class PancakeswapPair {
  constructor(_pancakeswapPairContext) {
    this._pancakeswapPairContext = _pancakeswapPairContext;
    if (!this._pancakeswapPairContext.fromTokenContractAddress) {
      throw new pancakeswap_error_1.PancakeswapError(
        'Must have a `fromTokenContractAddress` on the context',
        error_codes_1.ErrorCodes.fromTokenContractAddressRequired,
      );
    }
    if (
      !(0, is_address_1.isAddress)(
        this._pancakeswapPairContext.fromTokenContractAddress,
      )
    ) {
      throw new pancakeswap_error_1.PancakeswapError(
        '`fromTokenContractAddress` is not a valid contract address',
        error_codes_1.ErrorCodes.fromTokenContractAddressNotValid,
      );
    }
    if (!this._pancakeswapPairContext.toTokenContractAddress) {
      throw new pancakeswap_error_1.PancakeswapError(
        'Must have a `toTokenContractAddress` on the context',
        error_codes_1.ErrorCodes.toTokenContractAddressRequired,
      );
    }
    if (
      !(0, is_address_1.isAddress)(
        this._pancakeswapPairContext.toTokenContractAddress,
      )
    ) {
      throw new pancakeswap_error_1.PancakeswapError(
        '`toTokenContractAddress` is not a valid contract address',
        error_codes_1.ErrorCodes.toTokenContractAddressNotValid,
      );
    }
    if (!this._pancakeswapPairContext.ethereumAddress) {
      throw new pancakeswap_error_1.PancakeswapError(
        'Must have a `ethereumAddress` on the context',
        error_codes_1.ErrorCodes.ethereumAddressRequired,
      );
    }
    if (
      !(0, is_address_1.isAddress)(this._pancakeswapPairContext.ethereumAddress)
    ) {
      throw new pancakeswap_error_1.PancakeswapError(
        '`ethereumAddress` is not a valid address',
        error_codes_1.ErrorCodes.ethereumAddressNotValid,
      );
    }
    if (this._pancakeswapPairContext.providerUrl) {
      this._ethersProvider = new ethers_provider_1.EthersProvider(
        this._pancakeswapPairContext.providerUrl,
      );
      return;
    }
    this._ethersProvider = new ethers_provider_1.EthersProvider();
  }
  /**
   * Create factory to be able to call methods on the 2 tokens
   */
  async createFactory() {
    const tokensFactory = new tokens_factory_1.TokensFactory(
      this._ethersProvider,
    );
    const tokens = await tokensFactory.getTokens([
      this._pancakeswapPairContext.fromTokenContractAddress,
      this._pancakeswapPairContext.toTokenContractAddress,
    ]);
    const pancakeswapFactoryContext = {
      fromToken: tokens.find(
        t =>
          t.contractAddress ===
          this._pancakeswapPairContext.fromTokenContractAddress,
      ),
      toToken: tokens.find(
        t =>
          t.contractAddress ===
          this._pancakeswapPairContext.toTokenContractAddress,
      ),
      ethereumAddress: this._pancakeswapPairContext.ethereumAddress,
      settings:
        this._pancakeswapPairContext.settings ||
        new pancakeswap_pair_settings_1.PancakeswapPairSettings(),
      ethersProvider: this._ethersProvider,
    };
    return new pancakeswap_pair_factory_1.PancakeswapPairFactory(
      pancakeswapFactoryContext,
    );
  }
}
exports.PancakeswapPair = PancakeswapPair;
