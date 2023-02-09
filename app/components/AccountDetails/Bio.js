import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading, BodyText } from '../Typography';

const Bio = ({ name, bio, style }) => {
  return (
    <View styles={style}>
      <Subheading>{name}</Subheading>
      <BodyText style={styles.bio}>{bio}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  bio: {
    fontFamily: 'SFRegular',
  },
});

export default Bio;
