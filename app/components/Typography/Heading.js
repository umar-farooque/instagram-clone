import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function Heading({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(15),
    fontFamily: 'SFBold',
    color: colors.text.primary,
  },
});
