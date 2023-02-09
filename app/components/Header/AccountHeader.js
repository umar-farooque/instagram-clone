import React from 'react';
import { View, StyleSheet } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
import Constants from 'expo-constants';
import { Subheading } from '../Typography';
import Heading from '../Typography/Heading';

const AccountHeader = (props) => {
  return (
    <View style={styles.header}>
      <Heading>Username</Heading>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: verticalScale(Constants.statusBarHeight + 10),
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
});

export default AccountHeader;
