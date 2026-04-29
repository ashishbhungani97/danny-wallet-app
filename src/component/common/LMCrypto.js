import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import NumberFormat from 'react-number-format';
import {white} from './LMStyle';

export default function LMCrypto({...rest}) {
  const {value} = {...rest};
  let cryptoSymbol = 'DAN';
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      decimalScale={8}
      renderText={value => (
        <Text style={{color: white}}>
          {value} {cryptoSymbol}
        </Text>
      )}
    />
  );
}
const styles = StyleSheet.create({
  main: {
    fontSize: 14,
  },
  convert: {
    fontSize: 14,
    color: 'gray',
  },
});
