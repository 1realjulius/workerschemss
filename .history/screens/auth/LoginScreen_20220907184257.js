import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState("mark@esi.com")
  const [userPassword, setUserPassword] = useState('1235678')

  
  const handleLogin = () => {
    //put log in stuff here
}

  return (
    <SafeAreaView>
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='flex flex-col items-center justify-center my-10'>
                <View className='py-4'>
                    <Text className='font-bold text-lg'>Welcome back, Log In</Text>
                </View>
                <View className='py-2 space-y-2'>
                    <View>
                        <TextInput
                            className='bg-gray-50 border border-gray-200 rounded-md p-2 w-80 h-12 leading-none text-[18px]'
                            value={userEmail}
                            enablesReturnKeyAutomatically
                            placeholder='Enter Email'
                            keyboardType="email-address"
                        />
                    </View>
                    <View>
                        <TextInput
                            className='bg-gray-50 text-[18px] border border-gray-200 rounded-md p-2 w-80 h-12  leading-none'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={userPassword}
                            secureTextEntry
                            enablesReturnKeyAutomatically
                            placeholder='Enter Password'
                            keyboardType="default"
                        />
                    </View>
                </View>
                <View className='p-4'>
                    <TouchableOpacity className='px-4 py-2 bg-purple-800  rounded-md w-80 items-center' onPress={handleLogin}>
                        <Text className="text-lg text-purple-200">Log In</Text>
                    </TouchableOpacity>
                </View>
                <View className=''>
                    <TouchableOpacity className='flex flex-row items-center px-4 rounded-md space-x-2' onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon size={24} style={tw`text-black`}/>
                        <Text className="text-lg font-bold">Go back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
</SafeAreaView>
  )
}

export default LoginScreen