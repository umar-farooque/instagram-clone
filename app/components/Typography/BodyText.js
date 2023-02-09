import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function BodyText({ children, style, ...props }) {
  //console.log(props);
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(12),
    fontFamily: 'SFMedium',
    color: colors.text.primary,
  },
});
