import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import LMSelect from './LMSelect';
import {useDispatch, useSelector} from 'react-redux';
import LMLoading from './LMLoading';
import {NetworkAction} from '../../persistent/network/NetworkAction';
import {white} from './LMStyle';

export default function LMNetworkSelector({...rest}) {
  const {activeNetwork, networks} = useSelector(state => state.NetworkReducer);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        LMSelect.show({
          data: networks,
          onPress: async item => {
            LMLoading.show();
            dispatch(NetworkAction.setActiveNetwork(item));
          },
          key: 'name',
          label: 'displayName',
          selected: activeNetwork,
        });
      }}>
      <Image
        source={{
          uri: 'https://alchemy.mypinata.cloud/ipfs/bafkreifp7a2j7tpyqvvdyw5go234t6yabkkhmrckiqovffbpcs2272u6ui',
        }}
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={{fontSize: 12, color: white}}>
        {activeNetwork.displayName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    marginBottom: 4,
  },
});
