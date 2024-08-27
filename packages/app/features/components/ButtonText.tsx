import { View, Text, Image, Pressable } from 'react-native'
import { AddNoteSvg } from './SvgImageComponent/AddNoteSvg'
import { CreateCatSvg } from './SvgImageComponent/CreateCatSvg'
import { EditBioSvg } from './SvgImageComponent/EditBioSvg'

type ButtonTextProps = {
  text: string
  navigation: any
}

const ButtonText = (props: ButtonTextProps) => {
  return (
    <View className="items-center justify-center">
      <Pressable onPress={props.navigation}>
        {props.text === 'CREATE CATEGORY' && <CreateCatSvg />}
        {props.text === 'ADD NOTE' && <AddNoteSvg />}
        {props.text === 'EDIT' && <EditBioSvg />}
      </Pressable>
      <Text className="mt-2.5 text-sm font-medium leading-4 text-[#4C4C4C]">
        {props.text}
      </Text>
    </View>
  )
}

export default ButtonText
