import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from '../components/Buttons';
import { AppTextInput, PasswordInput } from '../components/Input';
import ScreenView from '../components/ScreenView';
import { BodyText } from '../components/Typography';
import { verticalScale, scale } from 'react-native-size-matters';
import colors from '../constants/theme/colors';
import routes from '../constants/routes';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let isDisabled = Boolean(!username || !password);
  let onChange = (str) => {
    setUsername(str);
  };
  let onPasswordChange = (str) => {
    setPassword(str);
  };
  let onButtonPress = () => {
    isDisabled ? alert('Button Disabled') : alert('Button Pressed');
  };
  let Navigate = () => {
    setUsername('');
    setPassword('');
    navigation.navigate(routes.SIGNUP);
  };
  let uri = require('../../assets/instagram_logo.png');
  return (
    <ScreenView style={styles.container}>
      <Image source={uri} style={styles.logo} />
      <AppTextInput
        type='text'
        placeholder='Enter Username'
        value={username}
        onChangeText={onChange}
        style={styles.input}
      />
      <PasswordInput
        placeholder='Enter Password'
        value={password}
        onChangeText={onPasswordChange}
        style={styles.input}
      />
      <Button
        style={styles.button}
        onPress={onButtonPress}
        disabled={isDisabled}
      >
        Login
      </Button>
      <View>
        <BodyText style={styles.alternativeText}>
          Don't have an Account?
          <BodyText style={styles.link} onPress={Navigate}>
            Sign Up
          </BodyText>
        </BodyText>
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: { marginBottom: verticalScale(25) },
  alternativeText: { color: colors.text.grey, fontFamily: 'SFRegular' },
  link: {
    color: '#3797EF',
    fontFamily: 'SFRegular',
  },
  input: {
    marginVertical: verticalScale(15),
  },
  logo: {
    height: scale(80),
    width: scale(200),
    resizeMode: 'contain',
  },
});
