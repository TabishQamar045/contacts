import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { OnBoard4Svg } from 'app/features/components/SvgImageComponent/OnBoard4Svg'
import { YesSvg } from 'app/features/components/SvgImageComponent/YesSvg'
import { Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons'

import { CircleSvg } from 'app/features/components/SvgImageComponent/CircleSvg'
const { width, height } = Dimensions.get('window')
const subFeatures = [
  {
    id: '1',
    text: 'No Ads',
  },
  {
    id: '2',
    text: 'Unlimited Contact list',
  },
  {
    id: '3',
    text: 'Unlimited notes',
  },
]
const AvailSub = ({ price, providingService, borderColor, image }) => {
  return (
    <View
      className="flex-row"
      style={{
        marginTop: height * 0.005,
        alignSelf: 'center',
        borderRadius: 17,
        borderColor: borderColor,
        borderWidth: 2,
        width: width * 0.85,
      }}
    >
      <View className="m-4">
        {image === 'Yes' && <YesSvg />}
        {image === 'Circle' && <CircleSvg />}
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontWeight: '600', fontSize: 19, lineHeight: 23 }}>
          {price}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 17,
            color: '#646464',
          }}
        >
          {providingService}
        </Text>
      </View>
    </View>
  )
}

const SubFeatures = (props: any) => {
  return (
    <View
      style={{
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.05,
      }}
      key={props.id}
      className="flex-row space-x-5"
    >
      <YesSvg />
      <Text className="text-base font-normal">{props.title}</Text>
    </View>
  )
}

const SubscriptionScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white">
      <OnBoard4Svg />
      <View>
        <View className="mt-2 flex-row self-center">
          <Text
            className="text-[#1F2429]"
            style={{
              fontWeight: '700',
              fontSize: 38,
              textAlign: 'center',
              lineHeight: 44,
            }}
          >
            Contact List
          </Text>
          <Text
            className="ml-2 text-[#FF7A00]"
            style={{
              fontWeight: '700',
              fontSize: 38,
              textAlign: 'center',
              lineHeight: 44,
            }}
          >
            PRO
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          textAlign: 'center',
          lineHeight: 22,
        }}
      >
        Discover, organize your relationships
      </Text>
      <View>
        {subFeatures.map((item) => (
          <View key={item.id}>
            <SubFeatures title={item.text} id={item.id} />
          </View>
        ))}
      </View>
      <View
        style={{
          marginTop: height * 0.009,
          marginBottom: height * 0.05,
          alignSelf: 'center',
        }}
      >
        <AvailSub
          image={'Yes'}
          borderColor={'#FF7A00'}
          price={'$4.99/Week'}
          providingService={'3 days Free Trial, Auto-renewable'}
        />
        <AvailSub
          image={'Circle'}
          borderColor={'#ffffff'}
          price={'$4.99/Week'}
          providingService={'3 days Free Trial, Auto-renewable'}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('main')}
          style={{
            width: Dimensions.get('window').width * 0.85,
            backgroundColor: '#00052C',
            flexDirection: 'row',
            padding: 15,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // marginTop: height * 0.065,
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
            Start free trial
          </Text>
          <AntDesign
            style={{ position: 'absolute', color: 'white', left: width * 0.7 }}
            name="arrowright"
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View
        className="flex-row"
        style={{
          justifyContent: 'space-between',
          width: width * 0.85,
          alignSelf: 'center',
          marginTop: height * 0.025,
        }}
      >
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 22,
            color: '#4B5762',
          }}
        >
          Privacy and Terms
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 22,
            color: '#4B5762',
          }}
        >
          Restore
        </Text>
      </View>
    </View>
  )
}

export default SubscriptionScreen
