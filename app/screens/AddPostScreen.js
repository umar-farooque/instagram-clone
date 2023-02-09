import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AppTextInput } from '../components/Input';
import { Button } from '../components/Buttons';
const AddPostScreen = () => {
  const [image, setImage] = useState(null);
  let onPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View
      style={{
        alignItems: 'center',

        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            height: 300,
            width: '90%',
            marginTop: 20,
            resizeMode: 'contain',
          }}
        />
      ) : (
        <View
          style={{
            height: 300,
            width: '90%',
            marginTop: 20,
            backgroundColor: 'grey',
          }}
        />
      )}

      <Text onPress={onPress}>Add Post</Text>
      <View style={{ width: '90%', marginVertical: 10 }}>
        <AppTextInput
          placeholder='Caption'
          multiline
          inputStyle={{ borderWidth: 0 }}
          maxLength={200}
        />
      </View>
      <View style={{ width: '90%', marginVertical: 10 }}>
        <Button>Add Post</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddPostScreen;
