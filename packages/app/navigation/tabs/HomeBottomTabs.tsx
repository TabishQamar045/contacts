import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import { ContactSvg } from 'app/features/components/SvgImageComponent/ContactSvg'
import { HomeSvg } from 'app/features/components/SvgImageComponent/HomeSvg'
import { Plus2Svg } from 'app/features/components/SvgImageComponent/Plus2Svg'
import { PlusSvg } from 'app/features/components/SvgImageComponent/PlusSvg'
import { ProfileSvg } from 'app/features/components/SvgImageComponent/ProfileSvg'
import { SearchSvg } from 'app/features/components/SvgImageComponent/SearchSvg'
import AddScreen from 'app/features/screens/addition/AddScreen'
import ContactsScreen from 'app/features/screens/contacts/ContactsScreen'
import HomeScreen from 'app/features/screens/home/HomeScreen'
import MyProfileScreen from 'app/features/screens/profile/MyProfileScreen'
import SearchScreen from 'app/features/screens/search/SearchScreen'
const Tab = createBottomTabNavigator()

function HomeBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 100,
          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            // fontFamily: "MontserratR",
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          },

          // tabBarActiveTintColor: '#00052C',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: 35, height: 35 }}>
              <HomeSvg stroke={focused ? '#00052C' : '#5F5F75'} />
              {focused && (
                <View
                  style={{
                    width: 20,
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    borderRadius: 9,
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="contacts"
        component={ContactsScreen}
        options={{
          tabBarLabelStyle: {
            // fontFamily: "MontserratR",
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          },
          tabBarActiveTintColor: '#00052C',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: 35, height: 35 }}>
              <ContactSvg stroke={focused ? '#00052C' : '#5F5F75'} />
              {focused && (
                <View
                  style={{
                    width: 20,
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    borderRadius: 9,
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddScreen}
        options={{
          tabBarLabelStyle: {
            // fontFamily: "MontserratR",
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          },

          tabBarIcon: ({ focused }) => (
            // <PlusSvg />
            <Plus2Svg />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabelStyle: {
            // fontFamily: "MontserratR",
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          },
          tabBarActiveTintColor: '#00052C',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: 35, height: 35 }}>
              <SearchSvg stroke={focused ? '#00052C' : '#5F5F75'} />
              {focused && (
                <View
                  style={{
                    width: 20,
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    borderRadius: 9,
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="user_profile"
        component={MyProfileScreen}
        options={{
          tabBarLabelStyle: {
            // fontFamily: "MontserratR",
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          },
          tabBarActiveTintColor: '#00052C',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: 35, height: 35 }}>
              <ProfileSvg stroke={focused ? '#00052C' : '#5F5F75'} />
              {focused && (
                <View
                  style={{
                    width: 20,
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    borderRadius: 9,
                    marginTop: 5,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeBottomTabs
