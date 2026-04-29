'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const contract_context_1 = require('./common/contract-context.js');
const ethers_provider_1 = require('./ethers-provider.js');
const ethereum_address_mock_1 = require('./mocks/ethereum-address.mock.js');
describe('EthersProvider', () => {
  const ethersProvider = new ethers_provider_1.EthersProvider();
  it('getContract', () => {
    const result = ethersProvider.getContract(
      JSON.stringify(contract_context_1.ContractContext.pairAbi),
      contract_context_1.ContractContext.pairAddress,
    );
    expect(result).not.toBeUndefined();
  });
  it('balanceOf', () => {
    const result = ethersProvider.balanceOf(
      (0, ethereum_address_mock_1.MockEthereumAddress)(),
    );
    expect(result).not.toBeUndefined();
  });
});
