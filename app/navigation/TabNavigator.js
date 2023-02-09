import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeNavigator,
  SearchNavigator,
  AccountNavigator,
} from './StackNavigator';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

const TabNavigation = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#000',
  tabBarInactiveTintColor: '#111111A8',
};

// const screenOptions = ({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//         switch (route.name) {
//             case "Home":

//                 break;

//             default:
//                 break;
//         }
//     //   let iconName;
//     //   let iconType;
//     //   if (route.name === "Home") {
//     //     iconName = focused ? "home" : "home-outline";
//     //     iconType = "ionicon";
//     //   } else if (route.name === "Search") {
//     //     // iconName = focused ? "search-outline" : "search-outline";
//     //     iconName = focused ? "md-search-circle" : "md-search-circle-outline";
//     //     iconType = "ionicon";
//     //     size = 33;
//     //   } else if (route.name === "Account") {
//     //     iconName = focused ? "newspaper" : "newspaper-outline";
//     //     iconType = "ionicon";
//     //   } else {
//     //     iconName = focused ? "ios-person" : "ios-person-outline";
//     //     iconType = "ionicon";
//     //   }

//     //   return <Icon name={iconName} type={iconType} size={size} color={color} />;
//     },
//   });
export function TabNavigator() {
  return (
    <TabNavigation.Navigator screenOptions={tabBarOptions}>
      <TabNavigation.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
        }}
      />
      <TabNavigation.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='search1' color={color} size={size + 2} />
          ),
        }}
      />
      <TabNavigation.Screen
        name='Account'
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
}
