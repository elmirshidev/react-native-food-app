import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { useEffect } from 'react'
import { client } from '../sanity'
import { useState } from 'react'

const FeaturedRow = ({id,title,description}) => {
const [restaurants,setRestaurants] = useState([])
  useEffect(() => {
    client.fetch(`
    *[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
          ...,
        dishes[]-> {
          ...,
        }
      }
    }
    `,{id}).then(data => {
      setRestaurants(data[0].restaurants);
    })
  },[])
  return (
    <View>
      <View className='mt-4 px-4 flex-row items-center justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
    
     
    
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className='pt-4'
        >
           {/* RESTAURANT CARDS */}
           {restaurants?.map((r) => (
            <RestaurantCard
              key={r._id}
              id={r._id}
              imgUrl={r.image}
              address={r.address}
              title={r.name}
              dishes={r.dishes}
              short_description={r.short_description}
              genre={r.type?.name}
              long={r.long}
              lat={r.lat}
              rating={r.rating}
            />
           ))}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow