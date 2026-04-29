'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const __1 = require('../../index.js');
const bat_token_mock_1 = require('../../mocks/bat-token.mock.js');
const ethereum_address_mock_1 = require('../../mocks/ethereum-address.mock.js');
const uni_token_mock_1 = require('../../mocks/uni-token.mock.js');
const pancakeswap_pair_1 = require('./pancakeswap-pair.js');
describe('PancakeswapPair', () => {
  it('should throw if no fromTokenContractAddress is passed in', () => {
    // @ts-ignore
    const context = {};
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        'Must have a `fromTokenContractAddress` on the context',
        __1.ErrorCodes.fromTokenContractAddressRequired,
      ),
    );
  });
  it('should throw if fromTokenContractAddress is invalid address', () => {
    // @ts-ignore
    const context = {
      fromTokenContractAddress: '1',
    };
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        '`fromTokenContractAddress` is not a valid contract address',
        __1.ErrorCodes.fromTokenContractAddressNotValid,
      ),
    );
  });
  it('should throw if no toTokenContractAddress is passed in', () => {
    // @ts-ignore
    const context = {
      fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)().contractAddress,
    };
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        'Must have a `toTokenContractAddress` on the context',
        __1.ErrorCodes.toTokenContractAddressRequired,
      ),
    );
  });
  it('should throw if toTokenContractAddress is invalid address', () => {
    // @ts-ignore
    const context = {
      fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)().contractAddress,
      toTokenContractAddress: '1',
    };
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        '`toTokenContractAddress` is not a valid contract address',
        __1.ErrorCodes.toTokenContractAddressNotValid,
      ),
    );
  });
  it('should throw if no ethereumAddress is passed in', () => {
    // @ts-ignore
    const context = {
      fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)().contractAddress,
      toTokenContractAddress: (0, uni_token_mock_1.MOCKUNI)().contractAddress,
    };
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        'Must have a `ethereumAddress` on the context',
        __1.ErrorCodes.ethereumAddressRequired,
      ),
    );
  });
  it('should throw if ethereumAddress is invalid address', () => {
    // @ts-ignore
    const context = {
      fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)().contractAddress,
      toTokenContractAddress: (0, uni_token_mock_1.MOCKUNI)().contractAddress,
      ethereumAddress: '1',
    };
    expect(() => new pancakeswap_pair_1.PancakeswapPair(context)).toThrowError(
      new __1.PancakeswapError(
        '`ethereumAddress` is not a valid address',
        __1.ErrorCodes.ethereumAddressNotValid,
      ),
    );
  });
  it('should create ethers provider', () => {
    const context = {
      fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)().contractAddress,
      toTokenContractAddress: (0, uni_token_mock_1.MOCKUNI)().contractAddress,
      ethereumAddress: (0, ethereum_address_mock_1.MockEthereumAddress)(),
    };
    const pancakeswapPair = new pancakeswap_pair_1.PancakeswapPair(context);
    //@ts-ignore
    expect(typeof pancakeswapPair._ethersProvider).not.toBeUndefined();
  });
  describe('createFactory', () => {
    it('should create a pancakeswap pair factory', async () => {
      const context = {
        fromTokenContractAddress: (0, bat_token_mock_1.MOCKBAT)()
          .contractAddress,
        toTokenContractAddress: (0, uni_token_mock_1.MOCKUNI)().contractAddress,
        ethereumAddress: (0, ethereum_address_mock_1.MockEthereumAddress)(),
      };
      const pancakeswapPair = new pancakeswap_pair_1.PancakeswapPair(context);
      const factory = await pancakeswapPair.createFactory();
      expect(factory.toToken).toEqual((0, uni_token_mock_1.MOCKUNI)());
      expect(factory.fromToken).toEqual((0, bat_token_mock_1.MOCKBAT)());
    });
  });
});
