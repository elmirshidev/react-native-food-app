import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { addToBasket, removeFromBasket } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
const DishRow = ({
  id,
  name,
  description,
  price,
  image
}) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.items);
  // const [count,setCount] = useState(basket[id]?.count)

 
  return (
 
    <>
      <TouchableOpacity className='bg-white border border-gray-200 p-4 flex-row items-center'>
        <View className='flex-1'>
          <Text className='text-lg mb-1'>{name}</Text>
          <Text className='text-gray-400'>{description}</Text>
          <Text className='text-gray-800 mt-2'>{price}₼</Text>
        </View>

        <View>
          {image && (
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4'
              }}
              className='w-20 h-20 bg-gray-300 p-4'
              source={{
                uri: urlFor(image).url()
              }}
            />
          )}

        </View>
      </TouchableOpacity>

      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 p-3'>
          <TouchableOpacity disabled={!basket[id]?.count} onPress={() => {

            if (basket[id]?.count == 1) {
              dispatch(removeFromBasket({
                id
              }))
            }
            else if (basket[id]?.count != 0) {
              dispatch(addToBasket({
                id,
                name,
                description,
                price,
                image,
                count: basket[id]?.count - 1
              }));
            }

          }}>
            <MinusCircleIcon size={40} color={basket[id]?.count == 0 ? 'gray' : '#00CCBB'} />
          </TouchableOpacity>
          <Text className='font-bold text-xl'>
            {basket[id]?.count || 0}
          </Text>
          <TouchableOpacity onPress={() => {

            dispatch(addToBasket({
              id,
              name,
              description,
              price,
              image,
              count: (basket[id]?.count ? basket[id]?.count : 0) + 1
            }));

          }}>
            <PlusCircleIcon size={40} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default DishRow