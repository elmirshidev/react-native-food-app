import {View, Text, SafeAreaView, Image,TextInput,ScrollView,Platform} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import FeaturedRow from '../components/FeaturedRow';
import {
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "react-native-heroicons/outline"
import {SearchBar} from "react-native-screens";
import Categories from "../components/Categories";
import { useState } from 'react';
import { useEffect } from 'react';
import { client } from './../sanity';
export default function HomeScreen(){
    const navigation = useNavigation();
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown:false,

    //     })
    // },[])
    const [featuredCategories,setFeaturedCategories] = useState([]);
    useEffect(() => {
        client.fetch(`
        *[_type == "featured"]{
            ...,
            restaurants[]->{
                ...,
              dishes[]-> {
              
              }
            }
          }
        `).then(data => {
            setFeaturedCategories(data)
        })
    },[])
    return (
        <SafeAreaView 
        style={{
            paddingTop: Platform.OS === 'android' ? 25 : 0
        }}
        className={'bg-white'}>

            {/*HEADER STARTS*/}
                <View className='flex-row pb-3 mx-4 gap-x-2 items-center'>
                    <View className={'flex-row flex-1 items-center gap-x-2'}>
                        <Image
                            source={{
                                uri:'https://links.papareact.com/wru'
                            }}
                            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                        />
                        <View>
                            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                            <View className=' flex-row items-center'>
                                <Text className={'font-bold text-xl'}>Current Location</Text>
                                <ChevronDownIcon size={20} color="#00CCBB" />
                            </View>
                        </View>
                    </View>


                    <UserIcon size={35} color="#00CCBB" />
                </View>

            {/*SEARCH*/}
                <View className={'flex-row gap-x-2 items-center pb-2 mx-4'}>
                    <View className={'flex-row flex-1  gap-x-2 items-center bg-gray-200 p-3'}>
                        <MagnifyingGlassIcon color={'gray'} size={20} />
                        <TextInput placeholder={"Restaurants"} keyboardType={"default"} />
                    </View>
                    <AdjustmentsVerticalIcon color={'#00CCBB'} />
                </View>

        {/*BODY*/}
        <ScrollView className={'bg-gray-100'} 
        contentContainerStyle={{
            paddingBottom:150,
        }}
        
        >
            {/* CATEGORIES */}
            <Categories />

            {/* Featured ROWS */}
            
            {featuredCategories?.map((category) => (
                <FeaturedRow 
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
                />
            ))}
        </ScrollView>

        </SafeAreaView>
    )
}