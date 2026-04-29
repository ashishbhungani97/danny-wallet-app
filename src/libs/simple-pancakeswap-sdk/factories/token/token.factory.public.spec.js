"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../index.js");
const contract_context_1 = require("../../common/contract-context.js");
const BAT_token_mock_1 = require("../../mocks/bat-token.mock.js");
const ethereum_address_mock_1 = require("../../mocks/ethereum-address.mock.js");
describe('TokenFactoryPublic', () => {
    const token = (0, BAT_token_mock_1.MOCKBAT)();
    const tokenFactoryPublic = new __1.TokenFactoryPublic(token.contractAddress);
    it('getToken', async () => {
        const result = await tokenFactoryPublic.getToken();
        expect(result).toEqual(token);
    });
    it('allowance', async () => {
        const result = await tokenFactoryPublic.allowance((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).not.toBeUndefined();
    });
    it('generateApproveAllowanceData', () => {
        const result = tokenFactoryPublic.generateApproveAllowanceData(contract_context_1.ContractContext.routerAddress, '0x05');
        expect(result).toEqual('0x095ea7b300000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e0000000000000000000000000000000000000000000000000000000000000005');
    });
    it('balanceOf', async () => {
        const result = await tokenFactoryPublic.balanceOf((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).not.toBeUndefined();
    });
    it('totalSupply', async () => {
        const result = await tokenFactoryPublic.totalSupply();
        expect(result).toEqual('0x14adf4b7320334b9000000');
    });
    it('getAllowanceAndBalanceOf', async () => {
        const result = await tokenFactoryPublic.getAllowanceAndBalanceOf((0, ethereum_address_mock_1.MockEthereumAddress)());
        expect(result).toEqual({
            allowance: '0x00',
            balanceOf: '0x00',
        });
    });
});
