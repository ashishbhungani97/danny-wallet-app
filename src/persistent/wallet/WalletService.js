import React from 'react';
import CommonAPI from '../../module/api/CommonAPI';
import {ApplicationProperties} from '../../ApplicationProperties';
import WalletModule from '../../module/etherjs/WalletModule';
import {BigNumber} from 'ethers';
import convert from 'ether-converter';
import EtherUtilModule from '../../module/etherjs/EtherUtilModule';
import {green, orange, red} from '../../component/common/LMStyle';
import moment from 'moment';
import _ from 'lodash';

export const WalletService = {
  fromMnemonic,
  fromPrivateKey,
  getTransactions,
  sendTransaction,
  getFeeSuggestions,
};

async function fromMnemonic(mnemonics) {
  const wallet = await WalletModule.fromMnemonic(mnemonics);
  return {
    success: wallet ? true : false,
    data: wallet,
  };
}
async function fromPrivateKey(pk) {
  const wallet = await WalletModule.fromPrivateKey(pk);
  return {
    success: wallet ? true : false,
    data: wallet,
  };
}
async function sendTransaction(wallet, tx) {
  const transaction = await WalletModule.sendTransaction(wallet, tx);
  return {
    success: !_.isNil(transaction.Error) ? true : false,
    data: transaction,
  };
}

async function getTransactions(address) {
  const { items } = await CommonAPI.get(`addresses/${address}/transactions`);

  const data = items || [];

  return data.map(transaction => {
    const isSent =
      transaction.from?.hash?.toUpperCase() === address.toUpperCase();

    return {
      ...transaction,
      sentOrReceived: isSent ? 'Sent' : 'Received',
      status:
        transaction.status === 'ok'
          ? 'Confirmed'
          : transaction.status === 'error'
          ? 'Failed'
          : 'Pending',
      date: moment(transaction.timestamp).format(
        'MMMM Do YYYY, h:mm:ss a',
      ),
      etherValue: convert(transaction.value, 'wei').ether,
      etherGasValue: convert(
        transaction.gas_price * transaction.gas_used,
        'wei',
      ).ether,
    };
  });
}

async function getFeeSuggestions(gasLimit) {
  const data = await CommonAPI.get(`stats`);

  // fallback values (Blockscout doesn't give oracle like Etherscan)
  const gasPrice = 1e9; // 1 Gwei fallback or fetch via RPC

  return {
    safeGasPrice: await calculateFee(gasPrice, gasLimit),
    proposeGasPrice: await calculateFee(gasPrice * 1.2, gasLimit),
    fastGasPrice: await calculateFee(gasPrice * 1.5, gasLimit),
  };
}

async function calculateFee(gasPrice, gasLimit) {
  const price = BigNumber.from(convert(gasPrice / 10, 'gwei', 'wei'));
  let etherFee = price.mul(BigNumber.from(gasLimit));
  etherFee = await EtherUtilModule.formatUnits(etherFee.toString());
  return {
    wei: price,
    ether: etherFee,
  };
}
