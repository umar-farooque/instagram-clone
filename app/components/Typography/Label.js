import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function Label(props) {
  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(10),
    fontFamily: 'SFRegular',
    color: colors.text.primary,
  },
});
