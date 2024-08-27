import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { UserDetailInfo } from 'app/features/components/UserDetailInfo'
import { ProfileSvg } from 'app/features/components/SvgImageComponent/ProfileSvg'
import { NotificationSvg } from 'app/features/components/SvgImageComponent/NotificationSvg'
import { ActivitySvg } from 'app/features/components/SvgImageComponent/ActivitySvg'

const recentlyAdded = [
  {
    id: '1',
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: 'P1',
    userName: 'Shoaib Ali',
  },
  {
    id: '2',
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: 'P2',
    userName: 'Paul Dybala',
  },
  {
    id: '3',
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: 'P3',
    userName: 'Panjnic',
  },
  {
    id: '4',
    tag: 'Spammer',
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: 'P4',
    userName: 'Gavi',
  },
  {
    id: '5',
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: 'P5',
    userName: 'Jamal Musiala',
  },
  {
    id: '6',
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: 'P6',
    userName: 'Joe Clarke',
  },
]

const userInfo = [
  {
    id: '1',
    tag: 'New',
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: 'P1',
    userName: 'Shoaib Ali',
  },
  {
    id: '2',
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: 'P2',
    userName: 'Paul Dybala',
  },
  {
    id: '3',
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: 'P3',
    userName: 'Panjnic',
  },
  {
    id: '4',
    tag: 'Favorite',
    socialPlatform: 'Google',
    joiningTime: '07:44 PM',
    userImage: 'P4',
    userName: 'Gavi',
  },
  {
    id: '5',
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: 'P5',
    userName: 'Jamal Musiala',
  },
  {
    id: '6',
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: 'P6',
    userName: 'Joe Clarke',
  },
]
const HomeScreen = ({ navigation }) => {
  // const {navigation}=useNavigation();
  return (
    <ScrollView
      className="flex-1 bg-white px-5 pb-10 pt-5"
      style={{ backgroundColor: '#FDFDFD' }}
    >
      <View className="flex-row justify-between">
        <Text
          className="text-sm font-normal leading-6"
          style={{ color: '#504244' }}
        >
          Hi John,
        </Text>

        <View className="flex-row">
          <TouchableOpacity onPress={() => navigation.navigate('contacts')}>
            <NotificationSvg />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-xl font-normal font-semibold leading-7 text-black">
        Welcome Back
      </Text>
      <View className="mt-6 mb-5 flex-row">
        <View
          className="mr-2 "
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ActivitySvg />
        </View>
        <Text className="my">Activity</Text>
      </View>
      <View>
        {userInfo.map((item) => (
          <UserDetailInfo
            key={item.id}
            tag={item.tag}
            userName={item.userName}
            socialPlatform={item.socialPlatform}
            userImage={item.userImage}
            joiningTime={item.joiningTime}
          />
        ))}
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#eeeeee',
          width: 320,
          alignSelf: 'center',
        }}
      />
      <View className="py-4">
        <Text
          className="text-sm font-normal leading-6"
          style={{ color: '#504244' }}
        >
          Recently Added
        </Text>
        {recentlyAdded.map((item) => (
          <UserDetailInfo
            key={item.id}
            tag={item.tag}
            userName={item.userName}
            socialPlatform={item.socialPlatform}
            userImage={item.userImage}
            joiningTime={item.joiningTime}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default HomeScreen
