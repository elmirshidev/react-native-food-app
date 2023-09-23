import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const PlaceOrder = ({allSum}) => {
    const navigation = useNavigation()
    return (
    <View className='absolute gap-y-4 bottom-2 z-50 w-full p-4 bg-white'>
        <View className='flex-row justify-between'>
            <Text className='opacity-70'>Subtotal</Text>
            <Text className='opacity-70'>{allSum}₼</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text className='opacity-70'>Delivery Fee</Text>
            <Text className='opacity-70'>{5}₼</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text className='font-bold text-lg'>Order Total</Text>
            <Text className='font-bold text-lg'>{allSum+5}₼</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Preparing') } className='bg-[#00CCBB] py-3 rounded-[15px]'>
            <Text className='text-white text-lg font-semibold text-center'>
                Place Order
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default PlaceOrder