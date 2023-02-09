import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Subheading from '../Typography/Subheading';
import Label from '../Typography/Label';
import Heading from '../Typography/Heading';

const Statistics = ({ Subheading: title, Label: subtitle }) => {
  return (
    <View>
      <Heading style={styles.subheading}>{title}</Heading>
      <Label style={styles.label}>{subtitle}</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: { textAlign: 'center' },
  label: { fontSize: scale(11) },
});

export default Statistics;
