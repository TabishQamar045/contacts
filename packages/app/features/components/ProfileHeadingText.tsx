import { View, Text } from 'react-native'

type ProfileHeadingTextProps = {
  text: string
}

const ProfileHeadingText = (props: ProfileHeadingTextProps) => {
  return (
    <Text className="text-sm font-normal leading-4 text-[#7F7F7F]">
      {props.text}
    </Text>
  )
}

export default ProfileHeadingText
