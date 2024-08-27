import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'moti'
import { UserContactInfo } from 'app/features/components/UserContactInfo'

const { useParam } = createParam()

const userInfo = [
  {
    id: '1',
    socialImage: require('../../../assets/images/sc.png'),
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u1.png'),
    userName: 'Shoaib Ali',
  },
  {
    id: '2',
    socialImage: require('../../../assets/images/tw.png'),
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u2.png'),
    userName: 'Paul Dybala',
  },
  {
    id: '3',
    socialImage: require('../../../assets/images/fb.png'),
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u3.png'),
    userName: 'Panjnic',
  },
  {
    id: '4',
    socialImage: require('../../../assets/images/sc.png'),
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u4.png'),
    userName: 'Gavi',
  },
  {
    id: '5',
    socialImage: require('../../../assets/images/tw.png'),
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u5.png'),
    userName: 'Jamal Musiala',
  },
  {
    id: '6',
    socialImage: require('../../../assets/images/fb.png'),
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u6.png'),
    userName: 'Joe Clarke',
  },
  {
    id: '7',
    socialImage: require('../../../assets/images/sc.png'),
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u7.png'),
    userName: 'Broad',
  },
  {
    id: '8',
    socialImage: require('../../../assets/images/tw.png'),
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: require('../../../assets/images/u1.png'),
    userName: 'Anderson',
  },
]

// const UserContactInfo = ({
//   socialImage,
//   socialPlatform,
//   joiningTime,
//   userImage,
//   userName,
// }) => {
//   return (
//     <View className="mx-5 my-5 flex-row items-center justify-between ">
//       <Image
//         style={{ borderRadius: 28, height: 56, width: 56 }}
//         source={userImage}
//       />
//       <View className="mx-4">
//         <Text className="text-lg font-medium leading-5">{userName}</Text>
//         <View className="w-44 flex-row items-center justify-between ">
//           <Image
//             source={socialImage}
//             style={{ borderRadius: 2, height: 10, width: 10 }}
//           />
//           <Text style={{ color: '#817F96' }}>{socialPlatform}</Text>
//           <Text style={{ color: '#817F96' }}>{joiningTime}</Text>
//         </View>
//       </View>
//       <View className="items-center p-4">
//         <Image source={require('../../../assets/images/dot.png')} />
//         <Image
//           className="my-1"
//           source={require('../../../assets/images/dot.png')}
//         />
//         <Image source={require('../../../assets/images/dot.png')} />
//       </View>
//     </View>
//   )
// }

export function UserDetailScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity onPress={() => navigation.navigate('slide-contact')}>
        <Text className="my-4 text-2xl font-semibold">Contacts</Text>
      </TouchableOpacity>
      <View className="mx-5 flex-row">
        <View
          className="mr-2.5 rounded-xl"
          style={{ borderColor: '#E3E3E3', borderWidth: 0.5 }}
        >
          <TextInput
            placeholder="Search..."
            style={{
              paddingLeft: 10,
              paddingRight: 150,
              paddingVertical: 12,
            }}
          />
        </View>

        <View
          className="w-24 flex-row items-center justify-items-center space-x-4 rounded-xl p-2.5"
          style={{ borderColor: '#E3E3E3', borderWidth: 0.5 }}
        >
          <Text className="cl-red text-gray-400">Filter</Text>
          <Image source={require('../../../assets/images/dd.png')} />
        </View>
      </View>
      <FlatList
        data={userInfo}
        renderItem={({ item }) => (
          <UserContactInfo
            userName={item.userName}
            userImage={item.userImage}
            socialImage={item.socialImage}
            socialPlatform={item.socialPlatform}
            joiningTime={item.joiningTime}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
  // const [id] = useParam('id')

  // return (
  //   <View className="flex-1 items-center justify-center bg-white">
  //     <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
  //     <TextLink href="/">👈 Go Home</TextLink>
  //   </View>
  // )
}
