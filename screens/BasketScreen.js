import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import PlaceOrder from '../components/PlaceOrder'
import { removeFromBasket } from '../features/basketSlice'
const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const basketItems = useSelector((state) => state.basket.items);
  let allSum = 0;
  // if (!basketItems[0]) {
  //   return (
  //     <SafeAreaView
  //     className='h-full w-full justify-center items-center'
  //       style={{
  //         paddingTop: Platform.OS === 'android' ? 25 : 0
  //       }}
  //     >
        
  //         <Text className='text-2xl font-bold '>You have not added anything😐</Text>
  //         <TouchableOpacity onPress={() => navigation.goBack()} className='mt-4 bg-[#00CCBB] px-4 py-2 rounded-lg'>
  //           <Text className='text-white font-semibold text-lg'>Go Back</Text>
  //         </TouchableOpacity>
  //     </SafeAreaView>
  //   )
  // }
  return (
    <SafeAreaView
      className='flex-1 relative'
      style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
    >
      <View className='flex-row items-center px-4 bg-white py-4'>
        <View className='flex-1'>
          <Text className='font-bold text-center text-lg'>Basket</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <XCircleIcon size={35} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>

      <View className='mt-4 bg-white p-4 flex-row items-center'>
        <Image
          className='h-10 w-10 rounded-full'
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
        />
        <View className='flex-1'>
          <Text className='text-center font-semibold'>Deliver in 50-75 min</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text className=' text-base text-[#00CCBB]'>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 50,
        }}
      >
        {Object.values(basketItems)?.map(food => {
          allSum = allSum + food?.count * food?.price;
          let id = food?.id;
          return (
            <View key={id} className='bg-white space-x-2 p-4 flex-row items-center'>
              <Text className='text-[#00CCBB] font-bold'>{food?.count} x</Text>
              <View className='flex-row items-center justify-between flex-1'>
                <View className='flex-row items-center space-x-2'>
                  <Image
                    className='w-12 h-12 rounded-full'
                    source={{
                      uri: urlFor(food?.image).url()
                    }}
                  />
                  <Text className='font-semibold'>
                    {food?.name}
                  </Text>
                </View>
                <Text>{food?.price}₼</Text>
              </View>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id }))}>
                <Text className='text-[#00CCBB]'>Remove</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>

      <PlaceOrder allSum={allSum} />
    </SafeAreaView>
  )
}

export default BasketScreen