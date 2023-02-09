import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { scale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  let uri = require('../../../assets/instagram_logo.png');

  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.logo} />
      <Ionicons name='paper-plane-outline' size={scale(20)} color='black' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(Constants.statusBarHeight + 20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(10),
  },
  logo: {
    height: scale(50),
    width: scale(100),
    resizeMode: 'contain',
  },
});
