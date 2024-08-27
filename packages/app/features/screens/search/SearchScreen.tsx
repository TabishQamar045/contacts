import Divider from 'app/features/components/Divider'
import SearchComponent from 'app/features/components/SearchComponent'
import { SearchTabSvg } from 'app/features/components/SvgImageComponent/SearchTabSvg'
import { UserDetailInfo } from 'app/features/components/UserDetailInfo'
import { userInfo } from 'app/utils/constants'
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

const searchData = [
  {
    id: 1,
    searchBy: 'By Location',
    searchTitle: 'New York',
  },
  {
    id: 2,
    searchBy: 'By Interest',
    searchTitle: 'Women',
  },
  {
    id: 3,
    searchBy: 'By Date',
    searchTitle: 'January',
  },
  {
    id: 4,
    searchBy: 'By Relationship',
    searchTitle: 'married',
  },
  {
    id: 5,
    searchBy: 'By Location',
    searchTitle: 'New York',
  },
  {
    id: 6,
    searchBy: 'By Social Media',
    searchTitle: 'all',
  },
  {
    id: 7,
    searchBy: 'By Org',
    searchTitle: 'Jobit',
  },
]

const SearchScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-5">
      <View className="mb-3 flex-row items-center justify-between space-x-2 bg-yellow-500">
        <View className="flex-row items-center space-x-2">
          <SearchTabSvg stroke=''/>
          <TextInput placeholder="search" style={{ width: '75%' }} />
        </View>
        <TouchableOpacity>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      {searchData.map((item) => (
        <SearchComponent
          key={item.id}
          searchBy={item.searchBy}
          searchTitle={item.searchTitle}
        />
      ))}
      <View className="pb-5">
        <Text className="text-sm font-medium leading-5 text-[#504c6d]">
          Recent
        </Text>
        {userInfo.map((item) => (
          <UserDetailInfo
            key={item.id}
            socialPlatform={item.socialPlatform}
            joiningTime={item.joiningTime}
            userImage={item.userImage}
            userName={item.userName}
            tag={''}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
