import ButtonText from 'app/features/components/ButtonText'
import Divider from 'app/features/components/Divider'
import PersonInfo from 'app/features/components/PersonInfo'
import ProfileHeadingText from 'app/features/components/ProfileHeadingText'
import { View, ScrollView, Text, Image } from 'react-native'

const MyProfileScreen = ({ navigation }) => {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-5">
      <PersonInfo
        name="John Smith"
        address="Vancouver, Toronto, Canada"
        profileImg={'MyProfile'}
      />
      <View className="flex-row justify-between py-7">
        <ButtonText text="EDIT"  navigation={''} />
        <View style={{ height: 46, backgroundColor: '#EAEAEA', width: 1 }} />
        <ButtonText text="ADD NOTE"  navigation="" />
        <View style={{ height: 46, backgroundColor: '#EAEAEA', width: 1 }} />
        <ButtonText
          text="CREATE CATEGORY"
          navigation={() => navigation.navigate('add-user')}
        />
      </View>
      <View>
        <ProfileHeadingText text="BIO" />
        <View className="my-2.5">
          <Divider />
        </View>
        <Text className="mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it.
        </Text>
      </View>
      <View>
        <ProfileHeadingText text="MOMENTS" />
        <View className="my-2.5">
          <Divider />
        </View>
        <View>
          <Text className="py-2.5 text-base leading-4 text-[#000000]">
            RE: Are you available?
          </Text>
          <Text className="text-sm leading-4 text-[#7C7C7C]">
            Last email - 2 hours ago
          </Text>
        </View>
        <View className="my-2.5">
          <Text className="py-2.5 text-base leading-4 text-[#000000]">
            RE: Are you available?
          </Text>
          <Text className="text-sm leading-4 text-[#7C7C7C]">
            Last email - 2 hours ago
          </Text>
        </View>
      </View>
      <View className="py-7">
        <ProfileHeadingText text="EXPERIENCE" />
        <View className="my-2.5">
          <Divider />
        </View>
        <View>
          <Text className="py-2.5 text-base leading-4 text-[#000000]">
            Product Designer
          </Text>
          <Text className="text-sm leading-4 text-[#7C7C7C]">
            Slack . Nov 2022 - Current{' '}
          </Text>
        </View>
        <View>
          <Text className="py-2.5 text-base leading-4 text-[#000000]">
            Product Designer
          </Text>
          <Text className="text-sm leading-4 text-[#7C7C7C]">
            Slack . Nov 2022 - Current{' '}
          </Text>
        </View>
        <View className="pt-7 pb-10">
          <ProfileHeadingText text="CATEGORIES" />
          <View className="my-2.5">
            <Divider />
          </View>
          <View className="flex-row space-x-2.5">
            <View
              className="flex-row items-center space-x-1 p-2"
              style={{
                borderColor: '#C9C9C9',
                borderWidth: 1,
                borderRadius: 4,
              }}
            >
              <Image source={require('../../../assets/images/b.png')} />
              <Text className="text-base leading-4 text-[#1877F2]">Fast</Text>
            </View>
            <View
              className="flex-row items-center space-x-1 p-2"
              style={{
                borderColor: '#C9C9C9',
                borderWidth: 1,
                borderRadius: 4,
              }}
            >
              <Image source={require('../../../assets/images/r.png')} />
              <Text className="text-base leading-4 text-[#E9665A]">Work</Text>
            </View>
            <View
              className="flex-row items-center space-x-1 p-2"
              style={{
                borderColor: '#C9C9C9',
                borderWidth: 1,
                borderRadius: 4,
              }}
            >
              <Image source={require('../../../assets/images/y.png')} />
              <Text className="text-base leading-4 text-[#F6B704]">Hard</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MyProfileScreen
