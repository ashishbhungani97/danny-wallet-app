/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {defaultBackground, gray, white} from '../../component/common/LMStyle';
import {useDispatch, useSelector} from 'react-redux';
import LMFlatList from '../../component/common/LMFlatList';
import LMBackButton from '../../component/common/LMBackButton';
import {TokenAction} from '../../persistent/token/TokenAction';
import LMImage from '../../component/common/LMImage';
import LMTokenIcon from '../../component/common/LMTokenIcon';
import _ from 'lodash';
import LMGradient from '../../component/common/LMGradient';

export default function TokenScreen({navigation, lang, route}) {
  const {search} = route.params;
  const {tokens} = useSelector(state => state.TokenReducer);
  const filteredTokens = _.filter(tokens, function (tk) {
    return tk.symbol != search;
  });
  const {activeNetwork} = useSelector(state => state.NetworkReducer);
  const [keyword, setKeywords] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TokenAction.getTokens({chainId: activeNetwork.chainId}));
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={async () => {
          navigation.goBack();
          await route.params.onSelect(item);
        }}>
        <View
          style={{
            width: 40,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <LMTokenIcon uri={item.logoURI} />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 14, color: white}}>{item.symbol}</Text>
        </View>
      </TouchableOpacity>
    );
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              fontWeight: 'bold',
              color: white,
            }}>
            {lang.token}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.logo,
            {alignItems: 'flex-end', justifyContent: 'center'},
          ]}
          onPress={() => {
            navigation.navigate('AddTokenScreen');
          }}>
          <LMGradient style={styles.iconContainer}>
            <LMImage
              source={require('../../../assets/plus.png')}
              style={styles.icon}
              resizeMode={'cover'}
            />
          </LMGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Search name or paste address'}
            placeholderTextColor={gray}
            value={keyword}
            onChangeText={text => {
              setKeywords(text);
            }}
            onEndEditing={() => {
              dispatch(
                TokenAction.filterTokens(keyword, activeNetwork.chainId),
              );
            }}
          />
        </View>
        <LMFlatList
          data={filteredTokens}
          keyExtractor={item => item.symbol}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultBackground,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
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
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: 32, height: 32, borderRadius: 5},
  item: {
    width: '100%',
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2b2b2b',
    flexDirection: 'row',
  },
  searchContainer: {
    width: '100%',
    height: 50,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    borderWidth: 0.2,
    borderColor: '#3f3f3f',
    borderRadius: 5,
    paddingLeft: 10,
    color: white,
    backgroundColor: '#121212',
  },
});
