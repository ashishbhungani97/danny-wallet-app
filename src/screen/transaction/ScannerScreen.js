import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import LMBackButton from '../../component/common/LMBackButton';
import {black} from '../../component/common/LMStyle';

export default function ScannerScreen({navigation, route}) {
  const {screenName} = route.params;
  const onSuccess = e => {
    navigation.pop();
    navigation.navigate(screenName, {
      qrCodeAddress: e.data,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <LMBackButton
          color={'white'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={require('../../../assets/danwallet-logo.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <View style={{width: 40}} />
      </View>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        fadeIn={false}
        reactivate={true}
        showMarker={true}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  logo: {
    width: 70,
    height: 50,
  },
});
