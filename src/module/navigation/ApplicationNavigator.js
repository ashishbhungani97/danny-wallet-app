import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserAction} from '../../persistent/user/UserAction';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import {CurrencyAction} from '../../persistent/currency/CurrencyAction';
import {NetworkAction} from '../../persistent/network/NetworkAction';
import {LanguageAction} from '../../persistent/language/LanguageAction';
import {black} from '../../component/common/LMStyle';

function ApplicationNavigator() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {passwordConfirmed} = useSelector(state => state.UserReducer);
  const {language} = useSelector(state => state.LanguageReducer);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    dispatch(UserAction.rememberMe()).then(async () => {
      dispatch(CurrencyAction.getCurrency());
      dispatch(NetworkAction.list());
      dispatch(LanguageAction.set());
      await sleep(1000); //how many seconds for splash screen
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: black,
        }}>
        {/*replace logo.png by your photo*/}
        <Image
          source={require('../../../assets/danwallet-logo.png')}
          style={{width: 100, height: 100}}
          resizeMode={'contain'}
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: black}}>
        {passwordConfirmed ? (
          <DrawerNavigator lang={language} />
        ) : (
          <AuthStackNavigator lang={language} />
        )}
      </View>
    </NavigationContainer>
  );
}
export default ApplicationNavigator;
