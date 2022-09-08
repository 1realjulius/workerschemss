import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useState } from 'react'
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const SignupScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState('')


    const handleSignUp = () => {
        //put signup stuff here
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleEmailTextChange = (Email) => {
        console.log(Email);
        if (userEmail.length > 0){
            setUserEmail(Email)
        }else{
            setUserEmail(null)
        }
        
    }
    const handlePasswordTextChange = (Password) => {
        console.log(Password);
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className='flex flex-col items-center justify-center my-10'>
                        <View className='py-4'>
                            <Text className='font-bold text-lg'>Welcome, create an account</Text>
                        </View>
                        <View className='py-2 space-y-2'>
                            <View>
                                <TextInput
                                    className='bg-gray-50 border border-gray-200 rounded-md p-2 w-80 h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter Email'
                                    onChangeText={handleEmailTextChange}
                                    keyboardType="email-address"
                                />
                            </View>
                            <View>
                                <TextInput
                                    className='bg-gray-50 text-[18px] border border-gray-200 rounded-md p-2 w-80 h-12  leading-none'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    // value={userPassword}
                                    onChangeText={handlePasswordTextChange}
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
                        <View className=''>
                            <TouchableOpacity className='flex flex-row items-center px-4 rounded-md space-x-2' onPress={() => navigation.goBack()}>
                                <ArrowLeftIcon size={24} style={tw`text-black`} />
                                <Text className="text-lg font-bold">Go back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignupScreen