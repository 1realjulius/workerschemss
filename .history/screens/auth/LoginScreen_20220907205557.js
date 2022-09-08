import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState('')


  const handleLogin = () => {
    //put log in stuff here
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const handleEmailTextChange = (Email) => {
    setUserEmail(Email)
    console.log(userEmail);
  }
  const handlePasswordTextChange = (Password) => {
    setUserPassword(Password)
    console.log(userPassword);
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
              <TouchableOpacity className='px-4 py-2 bg-purple-800  rounded-md w-80 items-center' onPress={handleLogin}>
                <Text className="text-lg text-purple-200">Log In</Text>
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

export default LoginScreen