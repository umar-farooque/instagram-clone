import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import ScreenView from '../components/ScreenView';
import { Feed } from '../components/Cards';
import routes from '../constants/routes';

export default function HomeScreen({ navigation }) {
  const onAddClick = useCallback(
    () => navigation.navigate(routes.ADD_POST),
    [navigation]
  );
  return (
    <ScreenView style={{ flex: 1 }}>
      <Header onAddClick={onAddClick} />
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        <View style={{ flex: 1 }}>
          {[0, 1, 2, 3, 4, 5, 6].map(() => (
            <Feed />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
}
