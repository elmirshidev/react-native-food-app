import { View, Text, SafeAreaView, Platform, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress'
// import MapView,{Marker} from 'react-native-maps'
const Delivery = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView
            className='bg-[#00CCBB] flex-1'
            style={{
                paddingTop: Platform.OS === 'android' ? 25 : 0
            }}
        >
            <View className='flex-row items-center justify-between p-5'>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XCircleIcon size={30} color={'white'} />
                </TouchableOpacity>

                <Text className='font-light text-white text-lg'>
                    Order Help
                </Text>
            </View>

            <View className='z-50 mx-5 p-5 shadow-md rounded-md bg-white'>
                <View className='flex-row justify-between'>
                    <View>
                        <Text className='text-lg text-gray-400 '>Estimated Arrival</Text>
                        <Text className='text-4xl font-bold'>45-55 Minutes</Text>
                    </View>
                    <Image
                        className='h-20 w-20'
                        source={{
                            uri: "https://links.papareact.com/fls"
                        }}
                    />
                </View>

                <Progress.Bar color='#00CCBB' progress={0.3} indeterminate={true} width={200} />
                <Text className='mt-3 text-gray-500'>
                    Your order is being prepared
                </Text>
            </View>

            {/* <MapView
                initialRegion={{
                    latitude:40,
                    longitude:49,
                    latitudeDelta:0.005,
                    longitudeDelta:0.005
                }
            }
                
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker 
                    coordinate={{
                        latitude:40,
                        longitude:49,
                    }}
                    description='Sumgait'
                    pinColor='#00CCBB'
                />
            </MapView> */}
        </SafeAreaView>
    )
}

export default Delivery