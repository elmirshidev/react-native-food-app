import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "../components/BasketIcon";
export default function RestaurantScreen() {
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    } = useRoute();
    const basket = useSelector((state) => state.basket.items);
    const dispatch = useDispatch()
    const navigation = useNavigation();
 
    return (
        <>
        <BasketIcon />
            <ScrollView
                // contentContainerStyle={{
                //     paddingBottom:100
                // }}
            >
                <View className='relative'>
                    <Image className='w-full h-56 bg-gray-300 p-4' source={{ uri: urlFor(imgUrl).url() }} />
                    <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                        <ArrowLeftIcon size={20} color={'#00CCBB'} />
                    </TouchableOpacity>
                </View>

                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold'>{title}</Text>
                        <View className='flex-row gap-x-2 my-1 items-center'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color={'green'} opacity={0.5} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>{rating}</Text> · {genre}
                                </Text>
                            </View>

                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon color={'gray'} opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    Nearby · {address}
                                </Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                    </View>
                    <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon color={'gray'} size={20} opacity={0.6} />
                        <Text className='pl-2 flex-1 text-md font-bold'>
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color={'#00CCBB'} />
                    </TouchableOpacity>

                    <View className=' pb-32'>
                        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                            Menu
                        </Text>

                        {/* DISH ROWS */}

                        {dishes.map((d => (
                            <DishRow
                                key={d._id}
                                id={d._id}
                                name={d.name}
                                description={d.short_description}
                                price={d.price}
                                image={d.image}
                            />
                        )))}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}