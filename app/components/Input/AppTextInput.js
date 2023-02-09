import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import colors from '../../constants/theme/colors';

export default function AppTextInput({
  style,
  inputStyle,
  type = 'text',
  ...props
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput type={type} style={[styles.input, inputStyle]} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { width: '100%', minHeight: verticalScale(40) },
  input: {
    minHeight: verticalScale(40),
    borderWidth: scale(0.5),
    borderColor: colors.text.grey,
    backgroundColor: '#FAFAFA',
    // padding: scale(10),
    borderRadius: scale(5),
    fontFamily: 'SFRegular',
    fontSize: moderateScale(15),
  },
});
