import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import Offline from './app/components/Offline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProvider from './app/context/UserProvider';
import { getToken } from './app/storage/token';
import { View } from 'react-native';
export default async function App() {
  const queryClient = new QueryClient();
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
    //prepare();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

{
  /* <QueryClientProvider client={queryClient}>
      <StatusBar style='auto' />
      <Offline />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </QueryClientProvider> */
}
