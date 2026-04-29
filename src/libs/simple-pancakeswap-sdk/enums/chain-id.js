'use strict';

const ChainId = Object.freeze({
  BSC: 97,
});

const ChainNames = new Map([[ChainId.BSC, 'bsc']]);

module.exports = { ChainId, ChainNames };
