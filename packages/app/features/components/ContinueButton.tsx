import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
// import { FontSize } from 'app/utils/Sizes'
// import { Colors } from 'app/utils/Colors'
// import { Inter_600SemiBold } from '@expo-google-fonts/dev'
import { useFonts } from 'expo-font'
// import { AntDesign } from '@expo/vector-icons'
const { width, height } = Dimensions.get('window')
export function ContinueButton({ scrollTo }) {
  let [fontsLoaded] = useFonts({
    // Inter_600SemiBold,
  })
  if (!fontsLoaded) {
    return <View className="flex-1 bg-black" />
  }
  return (
    <TouchableOpacity
      onPress={scrollTo}
      style={{
        width: Dimensions.get('window').width * 0.85,
        backgroundColor: '#00052C',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
      }}
    >
      <Text
        style={{
          color: '#ffffff',
          fontWeight: '600',
          fontSize: 22,
          letterSpacing: 1,
          // fontFamily: 'Inter_600SemiBold',
        }}
      >
        Continue
      </Text>
      <AntDesign
        style={{ position: 'absolute', color: 'white', left: width * 0.70 }}
        name="arrowright"
        size={25}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
