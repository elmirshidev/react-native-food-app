import { View, Text, SafeAreaView,Platform,Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.navigate("Delivery")
        },2000)

        return () => {
            clearTimeout(timer)
        }
    },[])
  return (
    <SafeAreaView
    className='bg-[#00CCBB] justify-center items-center flex-1'
    style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }}
    >
      <Animatable.Image 
        // className='w-96 h-96'
        source={require('../assets/loading.gif')}
        animation={'slideInUp'}
        iterationCount={1}
      />

      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      > 
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Bar progress={0.3} indeterminate={true} width={200} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen