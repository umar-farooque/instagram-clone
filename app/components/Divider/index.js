import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../constants/theme/colors';
import { scale } from 'react-native-size-matters';

const Divider = ({ style }) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.text.disabled,
    //marginVertical: scale(5),
  },
});

export default Divider;
