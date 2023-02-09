import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/theme/colors';

export default function PasswordInput({
  placeholder,
  style,
  textStyle,
  Next,
  char,
  ...otherProps
}) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textInpContainer}>
        <TextInput
          secureTextEntry={!visible}
          placeholder={placeholder}
          style={[styles.text, textStyle]}
          {...otherProps}
        />

        <TouchableWithoutFeedback
          onPress={() => setVisible(!visible)}
          style={{ backgroundColor: 'red' }}
        >
          <Ionicons
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={scale(20)}
            color={visible ? colors.primary : colors.text.grey}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  container: {
    height: verticalScale(40),
    borderWidth: scale(0.5),
    backgroundColor: '#FAFAFA',
    padding: scale(10),
    borderRadius: scale(5),
    width: '100%',
  },
  text: {
    fontSize: moderateScale(15),
    fontFamily: 'SFRegular',
    width: '92%',
  },
});
