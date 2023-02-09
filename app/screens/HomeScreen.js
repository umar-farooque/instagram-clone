import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import ScreenView from '../components/ScreenView';
import { Feed } from '../components/Cards';

export default function HomeScreen() {
  return (
    <ScreenView style={{ flex: 1 }}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View>
          {[0, 1, 2, 3, 4, 5, 6].map(() => (
            <Feed />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
}
