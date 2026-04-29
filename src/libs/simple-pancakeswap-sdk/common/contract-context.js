'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ContractContext = void 0;
class ContractContext {}
exports.ContractContext = ContractContext;
/**
 * The pancakeswap router address
 */
ContractContext.routerAddress = '0x977F314B82267a2284e945f1De4b68667C3b1262';
/**
 * The pancakeswap factory address
 */
ContractContext.factoryAddress = '0x6F01adf8E45602Aa327B8BA986f37180A1350f3a';
/**
 * The pancakeswap pair address
 */
ContractContext.pairAddress = '0x1bf0EF526C8255Bc1E92331456d8EF06d2FcB189';
/**
 * PancakeSwap v2 router
 */
ContractContext.routerAbi = require('../ABI/pancakeswap-router-v2.json');
/**
 * PancakeSwap v2 factory
 */
ContractContext.factoryAbi = require('../ABI/pancakeswap-factory-v2.json');
/**
 * PancakeSwap v2 pair
 */
ContractContext.pairAbi = require('../ABI/pancakeswap-pair-v2.json');
/**
 * ERC20 abi
 */
ContractContext.erc20Abi = require('../ABI/erc-20-abi.json');
