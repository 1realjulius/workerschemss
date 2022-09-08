import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import tatoo1 from '../../assets/Images/tatoo-2.jpg'

const AuthFront = () => {
    return (
        <View className="flex flex-col bg-gray-200 min-h-full py-10 ">
            <StatusBar style='dark' />
            <View className=''>
                <View className='items-center p-[120px] bg-blue-400 mt-4 mx-4'>
                    <Text className='text-black'>Put image Here</Text>
                </View>
                {/* the buttoms will go here */}
                <View className='mx-4 my-8 space-y-2'>
                    <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-center rounded-xl'>
                        <Text className='text-black text-lg'>Sign Up free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-between px-4 rounded-xl'>
                        <Image source={require('../../assets/Images/Google.png')} style={tw` w-6 h-6 rounded-full `} />
                        <Text className='text-black text-lg flex-1 text-center'>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-between px-4 rounded-xl'>
                        <Image source={require('../../assets/Images/Facebook.png')} style={tw` w-6 h-6 rounded-full `} />
                        <Text className='text-black text-lg flex-1 text-center'>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-between px-4 rounded-xl'>
                        <Image source={require('../../assets/Images/apple.png')} style={tw` w-6 h-6 rounded-full `} />
                        <Text className='text-black text-lg flex-1 text-center'>Continue with Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className=' py-2 items-center  px-4 '>
                        <Text className='text-black text-lg flex-1 text-center'>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AuthFront