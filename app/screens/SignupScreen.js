import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ScreenView from '../components/ScreenView';
import { Button } from '../components/Buttons';
import { AppTextInput, PasswordInput } from '../components/Input';
import { BodyText } from '../components/Typography';
import { verticalScale, scale } from 'react-native-size-matters';
import colors from '../constants/theme/colors';
import routes from '../constants/routes';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../api/Auth';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync, isError, error } = useMutation(signup);
  let isDisabled = Boolean(!username || !password);
  let onChange = (str) => {
    setUsername(str);
  };
  let onPasswordChange = (str) => {
    setPassword(str);
  };
  let onButtonPress = async () => {
    try {
      const result = await mutateAsync({ username, password });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  let Navigate = () => {
    setUsername('');
    setPassword('');
    navigation.navigate(routes.LOGIN);
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
        Signup
      </Button>
      <View>
        <BodyText style={styles.alternativeText}>
          Already have an Account?
          <BodyText style={styles.link} onPress={Navigate}>
            Login
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
