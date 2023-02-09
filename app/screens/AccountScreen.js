import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileImage from '../components/AccountDetails/ProfileImage';
import AccountHeader from '../components/Header/AccountHeader';
import ScreenView from '../components/ScreenView';
import { scale, verticalScale } from 'react-native-size-matters';
import { BodyText, Subheading } from '../components/Typography';
import Label from '../components/Typography/Label';
import Statistics from '../components/AccountDetails/Statistics';
import Bio from '../components/AccountDetails/Bio';
import Divider from '../components/Divider';
import { Button } from '../components/Buttons';
import colors from '../constants/theme/colors';
import AccountDetails from '../components/AccountDetails';
import routes from '../constants/routes';

export default function AccountScreen({ navigation }) {
  let handleOnClick = () => navigation.navigate(routes.EDIT_PROFILE);
  return (
    <ScreenView style={{ backgroundColor: '#fff' }}>
      <View style={{ paddingHorizontal: scale(10), marginBottom: scale(10) }}>
        <AccountHeader />
        <AccountDetails />
        <Button secondary onPress={handleOnClick}>
          Edit Profile
        </Button>
      </View>
      <Divider />
      <ScrollView
        style={{ flex: 1, flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            flex: 1,
          }}
        >
          {new Array(22).fill(0).map((i, k) => (
            <View
              style={{
                width: '33.3%',
                height: verticalScale(100),
                backgroundColor: '#FFFFFF',
                borderWidth: 0.2,
                borderColor: 'black',
              }}
            ></View>
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
}
