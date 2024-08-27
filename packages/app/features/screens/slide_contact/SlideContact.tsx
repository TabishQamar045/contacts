import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { UserDetailInfo } from 'app/features/components/UserDetailInfo'
import { NotificationSvg } from 'app/features/components/SvgImageComponent/NotificationSvg'
import { ActivitySvg } from 'app/features/components/SvgImageComponent/ActivitySvg'
import { UndoSvg } from 'app/features/components/SvgImageComponent/UndoSvg'
import { DeleteSvg } from 'app/features/components/SvgImageComponent/DeleteSvg'

const recentlyAdded = [
  {
    id: '1',
    // tag: require('../../../assets/images/new.png'),
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: 'P1',
    userName: 'Shoaib Ali',
  },
  {
    id: '2',
    tag: 'Spam',
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
    // tag: require('../../../assets/images/fav.png'),
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
const SlideContact = ({ navigation }) => {
  // const {navigation}=useNavigation();
  return (
    <ScrollView
      className="flex-1 bg-white px-5 pt-5"
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
          <TouchableOpacity onPress={() => navigation.navigate('user-detail')}>
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
        <View className="flex-row items-center space-x-2">
          <View className="mr-2">
            <UndoSvg />
          </View>
          <DeleteSvg />

          <View className="rounded-2xl bg-slate-50 pl-4 ">
            <UserDetailInfo
              tag="New"
              userImage={''}
              userName={'Anderson'}
              joiningTime={'05:00 PM'}
              socialPlatform={'Facebook'}
            />
          </View>
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
          Yesterday
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

export default SlideContact
