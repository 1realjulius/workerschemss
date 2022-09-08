import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthFront = () => {
    return (
        <View className="bg-[#090c10] min-h-screen py-10 px-4">
            <StatusBar style='light'/>
            <View className='flex items-center justify-center'>
                <View>
                    <Text className='text-white'>Put image Here</Text>
                </View>
                <View></View>
                <Text className="text-white">Hello</Text>
            </View>
        </View>
    )
}

export default AuthFront