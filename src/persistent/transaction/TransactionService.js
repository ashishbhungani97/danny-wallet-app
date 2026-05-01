import React from 'react';
import TransactionUtil from './TransactionUtil';
import CommonAPI from '../../module/api/CommonAPI';
import {ApplicationProperties} from '../../ApplicationProperties';
import axios from 'axios';

export const TransactionService = {
  add,
  list,
};

async function add({wallet, to, value, gasPrice, gasLimit}) {
  const transaction = await TransactionUtil.createTransaction(
    to,
    value,
    gasPrice,
    gasLimit,
  );
  if (transaction.success) {
    const sendTransaction = await TransactionUtil.sendTransaction(
      wallet,
      transaction.data,
    );
    if (sendTransaction.success) {
      console.log(
        await wallet.provider.waitForTransaction(sendTransaction.data.hash),
      );
    }
    return sendTransaction;
  }
  return transaction;
}

async function list(params) {
  const { address } = params;

  const { data } = await axios.get(
    `${ApplicationProperties.ACTIVE_NETWORK.api2Url}/api`,
    {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10,
        sort: 'desc',
        // ❌ no apikey needed for Blockscout
      },
    }
  );

  return data.status === '1' ? data.result : [];
}
