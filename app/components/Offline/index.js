import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
import colors from '../../constants/theme/colors';
import BodyText from '../Typography/BodyText';

function Offline(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <BodyText style={styles.text}>No Internet Connection</BodyText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 999,
  },
  text: {
    color: colors.text.white,
    fontSize: 18,
  },
});

export default Offline;
