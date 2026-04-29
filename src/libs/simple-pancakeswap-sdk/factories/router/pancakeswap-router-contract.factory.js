'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.PancakeswapRouterContractFactory = void 0;
const contract_context_1 = require('../../common/contract-context.js');
class PancakeswapRouterContractFactory {
  constructor(_ethersProvider) {
    this._ethersProvider = _ethersProvider;
    this._pancakeswapRouterContract = this._ethersProvider.getContract(
      JSON.stringify(contract_context_1.ContractContext.routerAbi),
      contract_context_1.ContractContext.routerAddress,
    );
  }
  addLiquidity(
    tokenA,
    tokenB,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'addLiquidity',
      [
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
      ],
    );
  }
  addLiquidityETH(
    token,
    amountTokenDesired,
    amountTokenMin,
    amountETHMin,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'addLiquidityETH',
      [token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline],
    );
  }
  async factory() {
    return await this._pancakeswapRouterContract.factory();
  }
  async getAmountsOut(amountIn, path) {
    const amounts = await this._pancakeswapRouterContract.getAmountsOut(
      amountIn,
      path,
    );
    return amounts.map(c => c.toHexString());
  }
  async quote(amountA, reserveA, reserveB) {
    return (
      await this._pancakeswapRouterContract.quote(amountA, reserveA, reserveB)
    ).toHexString();
  }
  removeLiquidity(
    tokenA,
    tokenB,
    liquidity,
    amountAMin,
    amountBMin,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidity',
      [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline],
    );
  }
  removeLiquidityETH(
    token,
    liquidity,
    amountTokenMin,
    amountETHMin,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidity',
      [token, liquidity, amountTokenMin, amountETHMin, to, deadline],
    );
  }
  removeLiquidityETHSupportingFeeOnTransferTokens(
    token,
    liquidity,
    amountTokenMin,
    amountETHMin,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHSupportingFeeOnTransferTokens',
      [token, liquidity, amountTokenMin, amountETHMin, to, deadline],
    );
  }
  removeLiquidityETHWithPermit(
    token,
    liquidity,
    amountTokenMin,
    amountETHMin,
    to,
    deadline,
    approveMax,
    v,
    r,
    s,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHWithPermit',
      [
        token,
        liquidity,
        amountTokenMin,
        amountETHMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ],
    );
  }
  removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
    token,
    liquidity,
    amountTokenMin,
    amountETHMin,
    to,
    deadline,
    approveMax,
    v,
    r,
    s,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
      [
        token,
        liquidity,
        amountTokenMin,
        amountETHMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ],
    );
  }
  removeLiquidityWithPermit(
    tokenA,
    tokenB,
    liquidity,
    amountAMin,
    amountBMin,
    to,
    deadline,
    approveMax,
    v,
    r,
    s,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'removeLiquidityWithPermit',
      [
        tokenA,
        tokenB,
        liquidity,
        amountAMin,
        amountBMin,
        to,
        deadline,
        approveMax,
        v,
        r,
        s,
      ],
    );
  }
  swapExactETHForTokens(amountOutMin, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactETHForTokens',
      [amountOutMin, path, to, deadline],
    );
  }
  swapETHForExactTokens(amountOut, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapETHForExactTokens',
      [amountOut, path, to, deadline],
    );
  }
  swapExactETHForTokensSupportingFeeOnTransferTokens(
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactETHForTokensSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline],
    );
  }
  swapExactTokensForETH(amountIn, amountOutMin, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForETH',
      [amountIn, amountOutMin, path, to, deadline],
    );
  }
  swapTokensForExactETH(amountOut, amountInMax, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapTokensForExactETH',
      [amountOut, amountInMax, path, to, deadline],
    );
  }
  swapExactTokensForETHSupportingFeeOnTransferTokens(
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForETHSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline],
    );
  }
  swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForTokens',
      [amountIn, amountOutMin, path, to, deadline],
    );
  }
  swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapTokensForExactTokens',
      [amountOut, amountInMax, path, to, deadline],
    );
  }
  swapExactTokensForTokensSupportingFeeOnTransferTokens(
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
  ) {
    return this._pancakeswapRouterContract.interface.encodeFunctionData(
      'swapExactTokensForTokensSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline],
    );
  }
}
exports.PancakeswapRouterContractFactory = PancakeswapRouterContractFactory;
