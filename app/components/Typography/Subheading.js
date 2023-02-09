import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function Subheading({ children, style, ...props }) {
  return (
    <Text style={[styles.text, styles.red, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(13),
    fontFamily: 'SFSemiBold',
    color: colors.text.primary,
  },
});
