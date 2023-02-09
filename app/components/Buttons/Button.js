import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { BodyText } from '../Typography';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function Button({
  style,
  textStyle,
  disabled,
  children,
  primary = true,
  secondary,
  ...props
}) {
  style = {
    ...style,
    backgroundColor:
      primary && disabled
        ? colors.button.primary.disabled
        : secondary
        ? colors.background.secondary
        : colors.button.primary.main,
    borderWidth: secondary ? 0.2 : 0,
    borderColor: colors.text.primary,
  };

  textStyle = {
    ...textStyle,
    color: secondary ? colors.text.primary : colors.text.white,
  };

  return (
    <Pressable style={[styles.button, style]} {...props}>
      <BodyText style={[styles.text, textStyle]}>{children}</BodyText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: verticalScale(40),
    borderRadius: scale(5),
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: 'SFSemiBold',
  },
});
