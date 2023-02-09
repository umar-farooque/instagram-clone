import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { scale, verticalScale } from 'react-native-size-matters';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

let uri = require('../../../assets/instagram_logo.png');
export default function Header({ onAddClick }) {
  let height = {
    height:
      Constants.statusBarHeight < 35
        ? verticalScale(Constants.statusBarHeight + 40)
        : verticalScale(Constants.statusBarHeight + 20),
  };
  return (
    <View style={[styles.container, height]}>
      <Image source={uri} style={styles.logo} />
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons
          name='add-circle-outline'
          size={scale(22)}
          style={{ marginRight: 10 }}
          color='black'
          onPress={onAddClick}
        />
        <Ionicons name='paper-plane-outline' size={scale(22)} color='black' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
