import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import tatoo1 from '../../assets/Images/tatoo-2.jpg'

const AuthFront = () => {
    return (
        <View className="flex flex-col bg-gray-900 min-h-full py-10 ">
            <StatusBar style='light' />
            <View className=''>
                <View className='p-[120px] bg-blue-900 mt-4'>
                    <Text className='text-white'>Put image Here</Text>
                </View>
                {/* the buttoms will go here */}
                <View className='mx-4 my-8 space-y-2'>
                    <TouchableOpacity className='bg-purple-400 py-2 items-center justify-center rounded-xl'>
                        <Text className='text-black text-lg'>Sign Up free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-between px-4 rounded-xl'>
                        <Image source={require('../../assets/Images/tatoo-2.jpg')} style={tw` w-8 h-8 rounded-full `} />
                        <Text className='text-white text-lg flex-1 text-center'>Sign Up free</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AuthFront