import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import routes from '../constants/routes';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen
        name={routes.ADD_POST}
        options={{
          headerShown: true,
          title: 'Add Post',
        }}
        component={AddPostScreen}
      />
    </Stack.Navigator>
  );
}

export function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
      <Stack.Screen
        name={routes.EDIT_PROFILE}
        options={{
          headerShown: true,
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}

export function SearchNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
}

export function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
}
