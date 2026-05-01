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
  try {
    const data = await CommonAPI.get(`stats`);

    const gasPrices = data?.gas_prices;

    if (!gasPrices) {
      throw new Error('No gas prices from Blockscout');
    }

    return {
      safeGasPrice: {
        ...(await calculateFee(gasPrices.slow, gasLimit)),
        key: 1,
      },
      proposeGasPrice: {
        ...(await calculateFee(gasPrices.average, gasLimit)),
        key: 2,
      },
      fastGasPrice: {
        ...(await calculateFee(gasPrices.fast, gasLimit)),
        key: 3,
      },
    };
  } catch (err) {
    console.warn('Gas API failed, fallback used:', err);

    // fallback (1 gwei)
    return {
      safeGasPrice: await calculateFee(1, gasLimit),
      proposeGasPrice: await calculateFee(1.2, gasLimit),
      fastGasPrice: await calculateFee(1.5, gasLimit),
    };
  }
}

async function calculateFee(gasPriceGwei, gasLimit) {
  // convert Gwei → Wei
  const priceWei = BigNumber.from(
    convert(gasPriceGwei.toString(), 'gwei', 'wei')
  );

  const totalFeeWei = priceWei.mul(BigNumber.from(gasLimit));

  const etherFee = await EtherUtilModule.formatUnits(
    totalFeeWei.toString()
  );

  return {
    wei: priceWei.toString(),
    ether: etherFee,
  };
}
