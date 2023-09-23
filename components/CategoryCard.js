import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image className='h-20 w-20 rounded' source={{uri:urlFor(imgUrl)?.url()}} />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard