import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactsScreen from 'app/features/screens/contacts/ContactsScreen'
import SlideContact from 'app/features/screens/slide_contact/SlideContact'
import { MainScreen } from 'app/features/screens/s_home/main'

import HomeScreen from '../../features/screens/home/HomeScreen'
import { UserDetailScreen } from '../../features/screens/user/detail-screen'
import HomeBottomTabs from '../tabs/HomeBottomTabs'
import { View } from 'react-native'
import AddUserScreen from 'app/features/screens/adduser/AddUserScreen'
import OnBoardingScreen from 'app/features/screens/onBoarding/OnBoardingScreen'
import SubscriptionScreen from 'app/features/screens/Subscription/SubscriptionScreen'
// const Stack = createNativeStackNavigator<{
//   home: undefined
//   contact:undefined
//   'user-detail': {
//     id: string
//   }
// }>()

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnBoardingScreen}
        options={{
          title: 'onboard',
          headerShown: false,
          // header: () => (
          //   <View style={{ height: 30, backgroundColor: 'white' }}></View>
          // ),
        }}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{
          title: 'Subscription',
          headerShown: false,
          // header: () => (
          //   <View style={{ height: 30, backgroundColor: 'white' }}></View>
          // ),
        }}
      />
      <Stack.Screen
        name="main"
        component={HomeBottomTabs}
        options={{
          title: 'Home',
          header: () => (
            <View style={{ height: 30, backgroundColor: 'white' }}></View>
          ),
        }}
      />
      <Stack.Screen
        name="slide-contact"
        component={SlideContact}
        options={{
          title: 'SlideContact',
          header: () => (
            <View style={{ height: 30, backgroundColor: 'white' }}></View>
          ),
        }}
      />
      <Stack.Screen
        name="add-user"
        component={AddUserScreen}
        options={{
          title: 'AddUser',
          header: () => (
            <View style={{ height: 30, backgroundColor: 'white' }}></View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}
