import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Divider from '../components/Divider';
import { AppTextInput } from '../components/Input';
import { Button } from '../components/Buttons';
import UploadImage from '../components/UploadImage';

const EditProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [bio, setBio] = useState(null);

  const handleOnChange = (str, field) => {
    switch (field) {
      case 'username':
        setUsername(str);
        break;

      case 'bio':
        setBio(str);
        break;

      default:
        setName(str);
        break;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ backgroundColor: '#fff', flex: 1 }}
    >
      <UploadImage image={image} setImage={setImage} />
      <Divider />
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder='Name'
          inputStyle={styles.input}
          value={name}
          onChangeText={(str) => handleOnChange(str, 'name')}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder='username'
          inputStyle={styles.input}
          value={username}
          onChangeText={(str) => handleOnChange(str, 'username')}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder='bio'
          inputStyle={styles.input}
          maxLength={60}
          value={bio}
          onChangeText={(str) => handleOnChange(str, 'bio')}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button disabled>Done</Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#fff',
  },
  inputContainer: { paddingHorizontal: 10, paddingVertical: 5 },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    bottom: 0,
  },
});

export default EditProfileScreen;
