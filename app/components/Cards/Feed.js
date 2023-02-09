import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Subheading } from '../Typography';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Caption from './components/Caption';

let text = `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s Lorem Ipsum is simply dummy text of
the printing and typesetting industry.`;
export default function Feed() {
  let [isLiked, setIsLiked] = useState(false);
  //console.log('Post ReRendered');
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.userImg} />
          <Subheading>Name</Subheading>
        </View>
      </View>
      <View style={styles.image} />
      <View style={styles.iconContainer}>
        <AntDesign
          name={`${isLiked ? 'heart' : 'hearto'}`}
          color={`${isLiked ? 'red' : 'black'}`}
          onPress={() => setIsLiked(!isLiked)}
          size={30}
        />
        <Ionicons
          name='ios-chatbubble-outline'
          size={30}
          style={{ marginLeft: 15 }}
        />
        <Ionicons
          name='bookmark-outline'
          size={30}
          style={{ marginLeft: 10 }}
        />
      </View>
      <Caption text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(430),
    width: '100%',
    //backgroundColor: 'black',
  },
  headerContainer: {
    height: verticalScale(45),
    padding: scale(10),
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: verticalScale(30),
    width: verticalScale(30),
    backgroundColor: 'grey',
    borderRadius: verticalScale(20),
    marginRight: scale(5),
  },
  image: {
    height: verticalScale(300),
    backgroundColor: 'grey',
  },
  iconContainer: {
    padding: scale(10),
    display: 'flex',
    flexDirection: 'row',
  },
});
