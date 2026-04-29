'use strict';

const ErrorCodes = Object.freeze({
  noRoutesFound: 1,
  canNotFindChainId: 2,
  tokenChainIdContractDoesNotExist: 3,
  tradePathIsNotSupported: 4,
  generateApproveMaxAllowanceDataNotAllowed: 5,
  fromTokenContractAddressRequired: 6,
  fromTokenContractAddressNotValid: 7,
  toTokenContractAddressRequired: 8,
  toTokenContractAddressNotValid: 9,
  ethereumAddressRequired: 10,
  ethereumAddressNotValid: 11,
  invalidFromOrToContractToken: 13,
});

module.exports = { ErrorCodes };
