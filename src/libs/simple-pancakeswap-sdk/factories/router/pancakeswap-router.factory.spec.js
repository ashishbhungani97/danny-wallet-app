"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const __1 = require("../../index.js");
const ethers_provider_1 = require("../../ethers-provider.js");
const bat_token_mock_1 = require("../../mocks/bat-token.mock.js");
const uni_token_mock_1 = require("../../mocks/uni-token.mock.js");
const pancakeswap_router_factory_1 = require("./pancakeswap-router.factory.js");
describe('PancakeswapRouterFactory', () => {
    const ethersProvider = new ethers_provider_1.EthersProvider();
    describe('erc20 > erc20', () => {
        const fromToken = (0, bat_token_mock_1.MOCKBAT)();
        const toToken = (0, uni_token_mock_1.MOCKUNI)();
        const pancakeswapRouterFactory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, false, ethersProvider);
        describe('getAllPossibleRoutes', () => {
            it('should get all possible routes', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutes();
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes (in this case return nothing as there is no direct route)', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutes();
                expect(result.length === 0).toEqual(true);
            });
        });
        describe('getAllPossibleRoutesWithQuotes', () => {
            it('should get all possible routes with quote', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes (in this case return nothing as there is no direct route)', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.length === 0).toEqual(true);
            });
        });
        describe('findBestRoute', () => {
            it('should find best route', async () => {
                const result = await pancakeswapRouterFactory.findBestRoute(new bignumber_js_1.default(100));
                expect(result.bestRouteQuote.routeText).toEqual('BAT > WBNB > UNI');
            });
            it('should throw an error as there is no best route with disableMultihops turned on', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                await expect(factory.findBestRoute(new bignumber_js_1.default(100))).rejects.toThrowError(new __1.PancakeswapError(`No routes found for ${fromToken.contractAddress} > ${toToken.contractAddress}`, __1.ErrorCodes.noRoutesFound));
            });
        });
    });
    describe('erc20 > bnb', () => {
        const fromToken = (0, bat_token_mock_1.MOCKBAT)();
        const toToken = __1.BNB.token();
        const pancakeswapRouterFactory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, false, ethersProvider);
        describe('getAllPossibleRoutes', () => {
            it('should get all possible routes', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutes();
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutes();
                expect(result.length === 1).toEqual(true);
                expect(result[0][0]).toEqual(fromToken);
                expect(result[0][1]).toEqual(toToken);
                expect(result.filter((c) => c.length > 2).length > 0).toEqual(false);
            });
        });
        describe('getAllPossibleRoutesWithQuotes', () => {
            it('should get all possible routes with quote', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.filter((c) => c.routePathArray.length > 2).length > 0).toEqual(false);
            });
        });
        describe('findBestRoute', () => {
            it('should find best route', async () => {
                const result = await pancakeswapRouterFactory.findBestRoute(new bignumber_js_1.default(100));
                expect(result.bestRouteQuote.routeText).toEqual('BAT > WBNB');
            });
            it('should return best route', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.findBestRoute(new bignumber_js_1.default(100));
                expect(result.bestRouteQuote.routeText).toEqual('BAT > WBNB');
                expect(result.triedRoutesQuote.filter((c) => c.routePathArray.length > 2)
                    .length > 0).toEqual(false);
            });
        });
    });
    describe('eth > erc20', () => {
        const fromToken = __1.BNB.token();
        const toToken = (0, bat_token_mock_1.MOCKBAT)();
        const pancakeswapRouterFactory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, false, ethersProvider);
        describe('getAllPossibleRoutes', () => {
            it('should get all possible routes', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutes();
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutes();
                expect(result.length === 1).toEqual(true);
                expect(result[0][0]).toEqual(fromToken);
                expect(result[0][1]).toEqual(toToken);
                expect(result.filter((c) => c.length > 2).length > 0).toEqual(false);
            });
        });
        describe('getAllPossibleRoutesWithQuotes', () => {
            it('should get all possible routes with quote', async () => {
                const result = await pancakeswapRouterFactory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.length > 0).toEqual(true);
            });
            it('should only return direct routes', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.getAllPossibleRoutesWithQuotes(new bignumber_js_1.default(1));
                expect(result.filter((c) => c.routePathArray.length > 2).length > 0).toEqual(false);
            });
        });
        describe('findBestRoute', () => {
            it('should find best route', async () => {
                const result = await pancakeswapRouterFactory.findBestRoute(new bignumber_js_1.default(100));
                expect(result.bestRouteQuote.routeText).toEqual('WBNB > BAT');
            });
            it('should return best route', async () => {
                const factory = new pancakeswap_router_factory_1.PancakeswapRouterFactory(fromToken, toToken, true, ethersProvider);
                const result = await factory.findBestRoute(new bignumber_js_1.default(100));
                expect(result.bestRouteQuote.routeText).toEqual('WBNB > BAT');
                expect(result.triedRoutesQuote.filter((c) => c.routePathArray.length > 2)
                    .length > 0).toEqual(false);
            });
        });
    });
});
