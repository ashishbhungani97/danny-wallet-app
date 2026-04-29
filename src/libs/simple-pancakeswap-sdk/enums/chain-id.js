'use strict';

const ChainId = Object.freeze({
  BSC: 69,
});

const ChainNames = new Map([[ChainId.BSC, 'bsc']]);

module.exports = { ChainId, ChainNames };
