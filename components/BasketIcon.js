import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
    const basket = useSelector((state) => state.basket.items);
    
    let sum = 0;
    let counter = 0;
    for(let item in basket){
        counter+= basket[item]?.count
        sum += basket[item]?.count * basket[item]?.price
    }
    const navigation = useNavigation()
    return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity onPress={() => navigation.navigate('Basket')}  className='bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
            <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{counter}</Text>
            <Text className='flex-1 text-lg text-center text-white font-extrabold'>View Basket</Text>
            <Text className='text-lg text-white font-extrabold'>{sum}₼</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon