import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

const SignupScreen = () => {
    const [userEmail, setUserEmail] = useState("mark@esi.com")
    const [userPassword, setUserPassword] = useState('1235678')


    const handleSignUp = () => {
        //put signup stuff here
    }

    

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
                        <View>
                            <Text>Put an image here</Text>
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
                            <TouchableOpacity className='px-4 py-2 bg-purple-800  rounded-md w-80 items-center' onPress={handleSignUp}>
                                <Text className="text-lg text-purple-200">Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='p-4'>
                            <TouchableOpacity className='flex flex-row items-center px-4 py-2 rounded-md' onPress={handleLogin}>
                                <ChevronLeftIcon size={24}/>
                                <Text className="text-lg">Go back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignupScreen