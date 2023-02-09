import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import Offline from './app/components/Offline';

export default function App() {
  const [fontsLoaded] = useFonts({
    SFRegular: require('./assets/SF-Pro-Display-Regular.ttf'),
    SFMedium: require('./assets/sf-pro-text-medium.ttf'),
    SFSemiBold: require('./assets/sf-pro-text-semibold.ttf'),
    SFBold: require('./assets/sf-pro-text-bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.log(error);
      }
    }
    prepare();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar style='auto' />
      <Offline />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
