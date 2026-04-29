"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_context_1 = require("../../common/contract-context.js");
const ethers_provider_1 = require("../../ethers-provider.js");
const BAT_token_mock_1 = require("../../mocks/bat-token.mock.js");
const ethereum_address_mock_1 = require("../../mocks/ethereum-address.mock.js");
const token_factory_1 = require("./token.factory.js");
describe('TokenFactory', () => {
    const ethersProvider = new ethers_provider_1.EthersProvider();
    const token = (0, BAT_token_mock_1.MOCKBAT)();
    const tokenFactory = new token_factory_1.TokenFactory(token.contractAddress, ethersProvider);
    it('getToken', async () => {
        const result = await tokenFactory.getToken();
        expect(result).toEqual(token);
    });
    it('allowance', async () => {
        const result = await tokenFactory.allowance((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).not.toBeUndefined();
    });
    it('generateApproveAllowanceData', () => {
        const result = tokenFactory.generateApproveAllowanceData(contract_context_1.ContractContext.routerAddress, '0x05');
        expect(result).toEqual('0x095ea7b300000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e0000000000000000000000000000000000000000000000000000000000000005');
    });
    it('balanceOf', async () => {
        const result = await tokenFactory.balanceOf((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).not.toBeUndefined();
    });
    it('totalSupply', async () => {
        const result = await tokenFactory.totalSupply();
        expect(result).toEqual('0x14adf4b7320334b9000000');
    });
    it('getAllowanceAndBalanceOf', async () => {
        const result = await tokenFactory.getAllowanceAndBalanceOf((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).toEqual({
            allowance: '0x00',
            balanceOf: '0x00',
        });
    });
});
