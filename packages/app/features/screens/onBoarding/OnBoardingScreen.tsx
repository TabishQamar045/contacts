import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native'
import React, { MutableRefObject } from 'react'
import { OnBoard1Svg } from 'app/features/components/SvgImageComponent/OnBoard1Svg'
import { OnBoard2Svg } from 'app/features/components/SvgImageComponent/OnBoard2Svg'
import { OnBoard3Svg } from 'app/features/components/SvgImageComponent/OnBoard3Svg'
import { OnBoard2_1Svg } from 'app/features/components/SvgImageComponent/OnBoard2_1Svg'
import { ContinueButton } from 'app/features/components/ContinueButton'
import Paginator from 'app/features/components/Paginator'
const slides = [
  {
    id: '1',
    title: 'Everyone you know in one place',
  },
  {
    id: '2',
    title: 'Search with generated ai suggestions',
  },
  {
    id: '3',
    title: 'Add & save your notes on profile',
  },
]
const { width, height } = Dimensions.get('window')
const Slide = ({ item }) => {
  return (
    <View className="items-center">
      {item.id === '1' && <OnBoard1Svg />}
      {/* {item.id === '2' && <OnBoard2Svg />} */}
      {item.id === '2' && (
        <Image
          style={{ width, height: height / 2 }}
          source={require('../../../assets/images/onboard2.png')}
        />
      )}
      {item.id === '3' && <OnBoard3Svg />}
      <View
        style={{
          width,
          paddingTop: height / 10,
        }}
      >
        <Text
          className="text-4xl"
          style={{
            textAlign: 'center',
          }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  )
}

const OnBoardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const scrollX = React.useRef(new Animated.Value(0)).current
  const slidesRef = React.useRef<any>(null)
  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentSlideIndex(viewableItems[0].index)
  }).current

  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current

  const scrollTo = () => {
    if (currentSlideIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlideIndex + 1 })
    } else {
      navigation.navigate('Subscription')
    }
  }

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setCurrentSlideIndex(currentIndex)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFDFD' }}>
      <StatusBar backgroundColor={'#FDFDFD'} />
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        horizontal
        ref={slidesRef}
        viewabilityConfig={viewConfig}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <ContinueButton scrollTo={scrollTo} />
      <Paginator data={slides} scrollX={scrollX} />
    </SafeAreaView>
  )
}

export default OnBoardingScreen
