import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthFront = () => {
    return (
        <View className="bg-[#090c10] min-h-full py-10 px-4">
            <StatusBar style='light'/>
            <View className='flex items-center'>
                <View className='p-[120px] bg-blue-900'>
                    <Text className='text-white'>Put image Here</Text>
                </View>
                {/* the buttoms will go here */}
                <View>
                    <View className='flex flex-col items-center space-y-2 py-2'>
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