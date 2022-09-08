import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthFront = () => {
    return (
        <View className="bg-[#0f151d] min-h-full py-10 px-4">
            <StatusBar style='light'/>
            <View className=' items-center'>
                <View className='p-[120px] bg-blue-900 my-4'>
                    <Text className='text-white'>Put image Here</Text>
                </View>
                {/* the buttoms will go here */}
                <View className=''>
                    <View className='flex flex-col items-center space-y-2 py-4'>
                        <TouchableOpacity className='bg-purple-600 w-80 h-14 items-center justify-center rounded-xl'>
                            <Text className='text-white text-lg'>Sign Up free</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-purple-600 w-80 h-14 items-center justify-center rounded-xl'>
                            <Text className='text-white text-lg'>Sign Up free</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-purple-600 w-80 h-14 items-center justify-center rounded-xl'>
                            <Text className='text-white text-lg'>Sign Up free</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-purple-600 w-80 h-14 items-center justify-center rounded-xl'>
                            <Text className='text-white text-lg'>Sign Up free</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AuthFront