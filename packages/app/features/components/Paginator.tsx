import {
  View,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native'

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
        height: 45,
        marginTop: 35,
        width: width * 0.15,
        justifyContent: 'space-between',
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [14, 14, 14],
          extrapolate: 'clamp',
        })

        const dotHeight = scrollX.interpolate({
          inputRange,
          outputRange: [14, 14, 14],
          extrapolate: 'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.1, 1, 0.3],
          extrapolate: 'clamp',
        })
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
                height: dotHeight,
                borderRadius: 50,
              },
            ]}
            key={i.toString()}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#00052C',
  },
})
