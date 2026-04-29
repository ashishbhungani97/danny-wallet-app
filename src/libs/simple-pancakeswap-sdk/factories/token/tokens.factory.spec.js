"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../index.js");
const ethers_provider_1 = require("../../ethers-provider.js");
const bat_token_mock_1 = require("../../mocks/bat-token.mock.js");
const uni_token_mock_1 = require("../../mocks/uni-token.mock.js");
const tokens_factory_1 = require("./tokens.factory.js");
describe('TokensFactory', () => {
    const ethersProvider = new ethers_provider_1.EthersProvider();
    const tokensFactory = new tokens_factory_1.TokensFactory(ethersProvider);
    describe('getTokens', () => {
        it('should return both token info', async () => {
            const result = await tokensFactory.getTokens([
                (0, bat_token_mock_1.MOCKBAT)().contractAddress,
                (0, uni_token_mock_1.MOCKUNI)().contractAddress,
            ]);
            expect(result[0]).toEqual((0, bat_token_mock_1.MOCKBAT)());
            expect(result[1]).toEqual((0, uni_token_mock_1.MOCKUNI)());
        });
        it('should throw error if 1 of the contract addresses are invalid', async () => {
            await expect(tokensFactory.getTokens([
                '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E722c',
                (0, uni_token_mock_1.MOCKUNI)().contractAddress,
            ])).rejects.toThrowError(new __1.PancakeswapError('invalid from or to contract tokens', __1.ErrorCodes.invalidFromOrToContractToken));
        });
    });
});
