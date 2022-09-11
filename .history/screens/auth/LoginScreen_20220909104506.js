import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, selectUser } from '../../redux/users/userSlice'

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState('')
  const dispatch = useDispatch();



  const handleLogin = () => {
    //put log in stuff here
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uName = user.displayName;
        const uEmail = user.email;
        const uPhone = user.phoneNumber;
        const uID = user.uid;
        const cUser = { userID: uID, userName: uName, userMail: uEmail, userPhone: uPhone };
        dispatch(setCurrentUser({ user: cUser }));
        console.log(uEmail);
        console.log('Doneee Loged in', 'This is the user info', (cUser));
        Alert.alert("Awsome,Welcome " + user.email);
        // ...
      })
      .catch((error) => {
        console.log('there is no user')
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("ohh Shit!",errorCode, errorMessage);
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
          <View className='flex flex-col px-6 my-10'>
            <View className='py-4 items-center'>
              <Text className='text-lg'>Welcome Back, Log in</Text>
            </View>
            <View className='flex flex-colpy-2 space-y-2'>
              <View className=''>
                <Text className='text-base my-1 px-2'>Email</Text>
                <TextInput
                  className='bg-white border border-gray-200 rounded-md p-2  h-12 leading-none text-[18px]'
                  // value={userEmail}
                  enablesReturnKeyAutomatically
                  placeholder='Enter Email'
                  onChangeText={handleEmailTextChange}
                  keyboardType="email-address"
                />
              </View>
              <View>
                <Text className='text-base my-1 px-2'>Password</Text>
                <TextInput
                  className='bg-white text-[18px] border border-gray-200 rounded-md p-2  h-12  leading-none'
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
            <View className=''>
              <TouchableOpacity className='px-2 py-2 bg-purple-800  rounded-md my-4 items-center' onPress={handleLogin}>
                <Text className="text-lg text-purple-200">Log In</Text>
              </TouchableOpacity>
            </View>

            <View className='items-center'>
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