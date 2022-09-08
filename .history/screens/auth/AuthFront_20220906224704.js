import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthFront = () => {
    return (
        <View className="flex flex-col bg-[#0f151d] min-h-full py-10 ">
            <StatusBar style='light' />
            <View className=' justify-between'>
                <View className=' flex-1 p-[120px] bg-blue-900 mt-4'>
                    <Text className='text-white'>Put image Here</Text>
                </View>
                {/* the buttoms will go here */}
                <View className='flex-1 mx-4 '>
                    <TouchableOpacity className='bg-purple-600 py-2 items-center justify-center rounded-xl'>
                        <Text className='text-white text-lg'>Sign Up free</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AuthFront