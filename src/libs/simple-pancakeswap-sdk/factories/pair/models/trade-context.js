'use strict';

const TradeContext = Object.freeze({
  baseConvertRequest: '',
  minAmountConvertQuote: '',
  expectedConvertQuote: '',
  liquidityProviderFee: '',
  tradeExpires: 0,
  routePathTokenMap: [],
  routeText: '',
  routePath: [],
  allTriedRoutesQuotes: [],
  hasEnoughAllowance: false,
  approvalTransaction: undefined,
  fromToken: null,
  toToken: null,
  fromBalance: Object.freeze({
    hasEnough: false,
    balance: '',
  }),
  transaction: null,
  quoteChanged$: null,
  destroy: () => undefined,
});

module.exports = {TradeContext};
