import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileImage from './ProfileImage';
import Statistics from './Statistics';
import Bio from './Bio';
import { scale } from 'react-native-size-matters';

const AccountDetails = () => {
  return (
    <>
      <View style={styles.container}>
        <ProfileImage />
        <View style={styles.statisticsContainer}>
          <Statistics Subheading='59' Label='Posts' />
          <Statistics Subheading='509' Label='Followers' />
          <Statistics Subheading='500' Label='Following' />
        </View>
      </View>
      <View style={{ marginVertical: scale(10) }}>
        <Bio name='John Abraham' bio='Actor' />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
  },
});

export default AccountDetails;
