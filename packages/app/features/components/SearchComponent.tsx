import { View, Text } from 'react-native'

type SearchComponentProp = {
  searchBy: string
  searchTitle: string
}

const SearchComponent = (props: SearchComponentProp) => {
  return (
    <View className="flex-row justify-between my-2">
      <Text className="font-normal leading-4 text-[#7f7f7f]">
        {props.searchBy}
      </Text>
      <View style={{ backgroundColor: '#e4e4e4', borderRadius: 20 }}>
        <Text className="px-2.5 py-0.5 font-medium leading-5 text-[#000000]">
          {props.searchTitle}
        </Text>
      </View>
    </View>
  )
}

export default SearchComponent
