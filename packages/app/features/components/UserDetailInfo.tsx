import { View, Dimensions, Text } from 'react-native'
import { FavSvg } from './SvgImageComponent/FavSvg'
import { FbSvg } from './SvgImageComponent/FbSvg'
import { GoogleSvg } from './SvgImageComponent/GoogleSvg'
import { NewSvg } from './SvgImageComponent/NewSvg'
import { P1Svg } from './SvgImageComponent/P1Svg'
import { P2Svg } from './SvgImageComponent/P2Svg'
import { P3Svg } from './SvgImageComponent/P3Svg'
import { P4Svg } from './SvgImageComponent/P4Svg'
import { P5Svg } from './SvgImageComponent/P5Svg'
import { P6Svg } from './SvgImageComponent/P6Svg'
import { P7Svg } from './SvgImageComponent/P7Svg'
import { P8Svg } from './SvgImageComponent/P8Svg'
import { ScSvg } from './SvgImageComponent/ScSvg'
import { SpamSvg } from './SvgImageComponent/SpamSvg'
import { TwSvg } from './SvgImageComponent/TwSvg'
const { width, height } = Dimensions.get('window')
type UserDetailProps = {
  socialPlatform: string
  joiningTime: string
  userImage: any
  userName: string
  tag: any
}
export const UserDetailInfo = (props: UserDetailProps) => {
  return (
    <View
      className=" my-1 flex-row items-center justify-between"
    >
      <View className="">
        <View className="flex-row items-center">
          <Text className="mr-2 text-lg font-medium leading-5">
            {props.userName}
          </Text>
          {props.tag === 'New' && <NewSvg />}
          {props.tag === 'Favorite' && <FavSvg />}
          {props.tag === 'Spammer' && <SpamSvg />}
        </View>
        <View className="w-44 flex-row items-center space-x-2">
          {props.socialPlatform === 'Facebook' && <FbSvg />}
          {props.socialPlatform === 'Google' && <GoogleSvg />}
          {props.socialPlatform === 'Twitter' && <TwSvg />}
          {props.socialPlatform === 'Sim Contact' && <ScSvg />}

          <Text style={{ color: '#817F96' }}>{props.socialPlatform}</Text>
          <Text style={{ color: '#817F96' }}>{props.joiningTime}</Text>
        </View>
      </View>
      <View className="items-center ">
        {props.userImage === 'P1' && <P1Svg />}
        {props.userImage === 'P2' && <P2Svg />}
        {props.userImage === 'P3' && <P3Svg />}
        {props.userImage === 'P4' && <P4Svg />}
        {props.userImage === 'P5' && <P5Svg />}
        {props.userImage === 'P6' && <P6Svg />}
        {props.userImage === 'P7' && <P7Svg />}
      </View>
    </View>
  )
}
