"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensFactory = void 0;
const ethereum_multicall_1 = require("ethereum-multicall");
const contract_context_1 = require("../../common/contract-context.js");
const error_codes_1 = require("../../common/errors/error-codes.js");
const pancakeswap_error_1 = require("../../common/errors/pancakeswap-error.js");
class TokensFactory {
    constructor(_ethersProvider) {
        this._ethersProvider = _ethersProvider;
        this._multicall = new Multicall({
            ethersProvider: this._ethersProvider.provider,
            multicallCustomContractAddress: '0x4d76592D83585Cf00792057749B03f97964668E8',
            tryAggregate: true,
        });
    }
    /**
     * Get the tokens details
     */
    async getTokens(tokenContractAddresses) {
        try {
            const SYMBOL = 0;
            const DECIMALS = 1;
            const NAME = 2;
            const contractCallContexts = [];
            for (let i = 0; i < tokenContractAddresses.length; i++) {
                const contractCallContext = {
                    reference: `token${i}`,
                    contractAddress: tokenContractAddresses[i],
                    abi: contract_context_1.ContractContext.erc20Abi,
                    calls: [
                        {
                            reference: `symbol`,
                            methodName: 'symbol',
                            methodParameters: [],
                        },
                        {
                            reference: `decimals`,
                            methodName: 'decimals',
                            methodParameters: [],
                        },
                        {
                            reference: `name`,
                            methodName: 'name',
                            methodParameters: [],
                        },
                    ],
                };
                contractCallContexts.push(contractCallContext);
            }
            const contractCallResults = await this._multicall.call(contractCallContexts);
            const tokens = [];
            for (const result in contractCallResults.results) {
                const tokenInfo = contractCallResults.results[result];
                tokens.push({
                    chainId: this._ethersProvider.network().chainId,
                    contractAddress: tokenInfo.originalContractCallContext.contractAddress,
                    symbol: tokenInfo.callsReturnContext[SYMBOL].returnValues[0],
                    decimals: tokenInfo.callsReturnContext[DECIMALS].returnValues[0],
                    name: tokenInfo.callsReturnContext[NAME].returnValues[0],
                });
            }
            return tokens;
        }
        catch (error) {
            throw new pancakeswap_error_1.PancakeswapError('invalid from or to contract tokens', error_codes_1.ErrorCodes.invalidFromOrToContractToken);
        }
    }
}
exports.TokensFactory = TokensFactory;
