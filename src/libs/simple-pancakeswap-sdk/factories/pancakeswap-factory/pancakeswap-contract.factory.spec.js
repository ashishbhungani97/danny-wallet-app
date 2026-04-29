"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("ethers/lib/utils");
const __1 = require("../../index.js");
const ethers_provider_1 = require("../../ethers-provider.js");
const bat_token_mock_1 = require("../../mocks/bat-token.mock.js");
const pancakeswap_contract_factory_1 = require("./pancakeswap-contract.factory.js");
describe('PancakeswapContractFactory', () => {
    const ethersProvider = new ethers_provider_1.EthersProvider();
    const pancakeswapContractFactory = new pancakeswap_contract_factory_1.PancakeswapContractFactory(ethersProvider);
    it('allPairs', async () => {
        const result = await pancakeswapContractFactory.allPairs('0x01');
        expect(result).toEqual('0x0eD7e52944161450477ee417DE9Cd3a859b14fD0');
    });
    it('allPairsLength', async () => {
        const result = await pancakeswapContractFactory.allPairsLength();
        expect((0, utils_1.isHexString)(result)).toEqual(true);
    });
    it('createPair', () => {
        const result = pancakeswapContractFactory.createPair((0, bat_token_mock_1.MOCKBAT)().contractAddress, __1.BNB.token().contractAddress);
        expect(result).toEqual('0xc9c65396000000000000000000000000101d82428437127bf1608f699cd651e6abf9766e000000000000000000000000bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c');
    });
    it('feeTo', async () => {
        const result = await pancakeswapContractFactory.feeTo();
        expect((0, utils_1.isHexString)(result)).toEqual(true);
    });
    it('feeToSetter', async () => {
        const result = await pancakeswapContractFactory.feeToSetter();
        expect((0, utils_1.isHexString)(result)).toEqual(true);
    });
    it('getPair', async () => {
        const result = await pancakeswapContractFactory.getPair(__1.BNB.token().contractAddress, (0, bat_token_mock_1.MOCKBAT)().contractAddress);
        expect(result).toEqual('0xD72AE03Be5ce45bB6FdFE0AA0D81d7eef709dCC3');
    });
    it('setFeeTo', async () => {
        const result = await pancakeswapContractFactory.setFeeTo('0x05B0c1D8839eF3a989B33B6b63D3aA96cB7Ec142');
        expect(result).toEqual('0xf46901ed00000000000000000000000005b0c1d8839ef3a989b33b6b63d3aa96cb7ec142');
    });
    it('setFeeToSetter', async () => {
        const result = await pancakeswapContractFactory.setFeeToSetter('0x05B0c1D8839eF3a989B33B6b63D3aA96cB7Ec142');
        expect(result).toEqual('0xa2e74af600000000000000000000000005b0c1d8839ef3a989b33b6b63d3aa96cb7ec142');
    });
});
