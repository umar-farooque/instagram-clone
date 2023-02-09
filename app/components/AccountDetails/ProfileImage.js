import React from 'react';
import { View, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const ProfileImage = () => {
  return <View style={styles.image}></View>;
};

const styles = StyleSheet.create({
  image: {
    height: verticalScale(80),
    width: verticalScale(80),
    backgroundColor: 'grey',
    borderRadius: verticalScale(40),
  },
});

export default ProfileImage;
