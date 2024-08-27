import { View, Text, Image } from 'react-native'
import { MyProfileSvg } from './SvgImageComponent/MyProfileSvg'

type PersonInfoProps = {
  name: string
  address: string
  profileImg: any
}

const PersonInfo = (props: PersonInfoProps) => {
  return (
    <View className="flex-row justify-between">
      <View className="justify-center">
        <Text className="text-xl font-semibold leading-7 text-black">
          {props.name}
        </Text>
        <Text className="text-sm font-normal leading-6 text-[#504244]">
          {props.address}
        </Text>
      </View>
      {props.profileImg === 'MyProfile' && <MyProfileSvg />}
    </View>
  )
}

export default PersonInfo
