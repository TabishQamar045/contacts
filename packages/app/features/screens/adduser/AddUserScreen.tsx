import { AddSvg } from 'app/features/components/SvgImageComponent/AddSvg'
import { CrossSvg } from 'app/features/components/SvgImageComponent/CrossSvg'
import { TickSvg } from 'app/features/components/SvgImageComponent/TickSvg'
import { View, Text, Image, TextInput } from 'react-native'

const AddUserScreen = () => {
  return (
    <View className="flex-1 bg-white px-5 pt-5 pb-10">
      <View className="flex-row justify-between">
        <Text className="text-base font-semibold text-[#00052C]">
          Create Category
        </Text>
        <TickSvg />
      </View>
      <View
        className="mt-9 flex-row items-center justify-between px-6 py-5"
        style={{ borderColor: '#e8e8e8', borderRadius: 6, borderWidth: 1 }}
      >
        <Text className="text-base font-semibold text-[#00052C]">
          New Category
        </Text>
        <AddSvg />
      </View>
      <View
        className="mt-9 flex-row items-center justify-between px-6 py-5"
        style={{ borderColor: '#e8e8e8', borderRadius: 6, borderWidth: 1 }}
      >
        <TextInput placeholder="category" />
        <CrossSvg />
      </View>
    </View>
  )
}

export default AddUserScreen
