import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../constants/theme/colors';
import Subheading from '../../components/Typography/Subheading';

const imgConfig = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};
const UploadImage = ({ image = null, setImage }) => {
  console.log('image==>', image, setImage);
  let onUploadImage = async () => {
    let permissions = await ImagePicker.getCameraPermissionsAsync();
    if (permissions.status !== 'granted') {
      let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      let camera = await ImagePicker.requestCameraPermissionsAsync();
    } else {
      let result = await ImagePicker.launchImageLibraryAsync(imgConfig);
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };
  return (
    <View style={styles.container}>
      {!image && <View style={styles.dummyImg} />}
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Subheading style={styles.uploadBtn} onPress={onUploadImage}>
        {image ? 'Update Image' : 'Upload Image'}
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 10 },
  uploadBtn: { marginVertical: 10, color: colors.primary },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  dummyImg: {
    width: 150,
    height: 150,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
});

export default UploadImage;
