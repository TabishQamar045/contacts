import { createParam } from 'solito'
import { Dimensions } from 'react-native'
import { TextLink } from 'solito/link'
import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'moti'
import { UserContactInfo } from 'app/features/components/UserContactInfo'
import { DownSvg } from 'app/features/components/SvgImageComponent/DownSvg'

const { useParam } = createParam()

const { width, height } = Dimensions.get('window')

const userInfo = [
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
  {
    id: '7',
    socialPlatform: 'Google',
    joiningTime: '07:44 PM',
    userImage: 'P7',
    userName: 'Broad',
  },
  {
    id: '8',
    socialPlatform: 'Twitter',
    joiningTime: '07:44 PM',
    userImage: 'P8',
    userName: 'Anderson',
  },
  {
    id: '9',
    socialPlatform: 'Sim Contact',
    joiningTime: '07:44 PM',
    userImage: 'P4',
    userName: 'Gavi',
  },
  {
    id: '10',
    socialPlatform: 'Google',
    joiningTime: '07:44 PM',
    userImage: 'P5',
    userName: 'Jamal Musiala',
  },
  {
    id: '11',
    socialPlatform: 'Facebook',
    joiningTime: '07:44 PM',
    userImage: 'P6',
    userName: 'Joe Clarke',
  },
]

export default function ContactsScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('slide-contact')}>
          <Text className="mb-4 text-2xl font-semibold">Contacts</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4 flex-row self-center py-2">
        <View
          className="mr-2.5 rounded-xl"
          style={{
            borderColor: '#E3E3E3',
            borderWidth: 0.5,
            width: width / 1.5,
          }}
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
          className="flex-row items-center justify-items-center space-x-4 rounded-xl p-2.5"
          style={{
            borderColor: '#E3E3E3',
            borderWidth: 0.5,
            width: width / 4.5,
          }}
        >
          <Text className=" mr-3 text-gray-400">Filter</Text>
          <DownSvg />
        </View>
      </View>
      <FlatList
        style={{ alignSelf: 'center' }}
        data={userInfo}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <UserContactInfo
            key={item.id}
            userName={item.userName}
            userImage={item.userImage}
            socialPlatform={item.socialPlatform}
            joiningTime={item.joiningTime}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
