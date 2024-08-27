import { View, Image, Text, Dimensions } from 'react-native'
import { DotSvg } from './SvgImageComponent/DotSvg'
import { FbSvg } from './SvgImageComponent/FbSvg'
import { GoogleSvg } from './SvgImageComponent/GoogleSvg'
import { P1Svg } from './SvgImageComponent/P1Svg'
import { P2Svg } from './SvgImageComponent/P2Svg'
import { P3Svg } from './SvgImageComponent/P3Svg'
import { P4Svg } from './SvgImageComponent/P4Svg'
import { P5Svg } from './SvgImageComponent/P5Svg'
import { P6Svg } from './SvgImageComponent/P6Svg'
import { P7Svg } from './SvgImageComponent/P7Svg'
import { P8Svg } from './SvgImageComponent/P8Svg'
import { ScSvg } from './SvgImageComponent/ScSvg'
import { TwSvg } from './SvgImageComponent/TwSvg'

const { width, height } = Dimensions.get('window')
type UserDetailProps = {
  socialPlatform: string
  joiningTime: string
  userImage: any
  userName: string
}
export const UserContactInfo = (props: UserDetailProps) => {
  return (
    <View className="my-1.5 flex-row items-center">
      <View
        className="space-x-4"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          {props.userImage === 'P1' && <P1Svg />}
          {props.userImage === 'P2' && <P2Svg />}
          {props.userImage === 'P3' && <P3Svg />}
          {props.userImage === 'P4' && <P4Svg />}
          {props.userImage === 'P5' && <P5Svg />}
          {props.userImage === 'P6' && <P6Svg />}
          {props.userImage === 'P7' && <P7Svg />}
          {props.userImage === 'P8' && <P8Svg />}
        </View>
        <View style={{ width: width / 2 }}>
          <Text className="text-lg font-medium leading-5">
            {props.userName}
          </Text>
          <View className="flex-row items-center space-x-2">
            {props.socialPlatform === 'Facebook' && <FbSvg />}
            {props.socialPlatform === 'Google' && <GoogleSvg />}
            {props.socialPlatform === 'Twitter' && <TwSvg />}
            {props.socialPlatform === 'Sim Contact' && <ScSvg />}
            <Text style={{ color: '#817F96' }}>{props.socialPlatform}</Text>
            <Text style={{ color: '#817F96' }}>{props.joiningTime}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: width / 6 }}>
        <DotSvg />
      </View>
    </View>
  )
}
