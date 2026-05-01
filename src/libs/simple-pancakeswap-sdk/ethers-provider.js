'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.EthersProvider = void 0;
const ethers_1 = require('ethers');
class EthersProvider {
  constructor(providerUrl = 'https://mainnet.danscan.io') {
    this._ethersProvider = new ethers_1.providers.StaticJsonRpcProvider(
      providerUrl,
    );
  }
  /**
   * Creates a contract instance
   * @param abi The ABI
   * @param contractAddress The contract address
   */
  getContract(abi, contractAddress) {
    const contract = new ethers_1.Contract(
      contractAddress,
      abi,
      this._ethersProvider,
    );
    return contract;
  }
  /**
   * Get the network
   */
  network() {
    return this._ethersProvider.network;
  }
  /**
   * Get the ethers provider
   */
  get provider() {
    return this._ethersProvider;
  }
  /**
   * Get eth amount
   * @param ethereumAddress The ethereum address
   */
  async balanceOf(ethereumAddress) {
    return (
      await this._ethersProvider.getBalance(ethereumAddress)
    ).toHexString();
  }
}
exports.EthersProvider = EthersProvider;
