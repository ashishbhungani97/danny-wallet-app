import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LMSelect from './LMSelect';
import LMIcon from './LMIcon';
import {useDispatch, useSelector} from 'react-redux';
import LMLoading from './LMLoading';
import {NetworkAction} from '../../persistent/network/NetworkAction';
import {white} from './LMStyle';

export default function LMNetworkSelector({...rest}) {
  const {activeNetwork, networks} = useSelector(state => state.NetworkReducer);
  useEffect(() => {}, []);
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
      <LMIcon hash={activeNetwork.displayName} size={18} />
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
});
