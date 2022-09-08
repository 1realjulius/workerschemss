import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase/firebase'

const SignupScreen = () => {
    const [userEmail, setUserEmail] = useState("mark@esi.com")
    const [userPassword, setUserPassword] = useState('1235678')


    const handleSignUp = () => {
        console.log(userEmail)
        //  auth
        //    .createUserWithEmailAndPassword(userEmail,userPassword)
        //    .then(userCredentials => {
        //      const user = userCredentials.user;
        //      console.log(user.userEmail);
        //    })
        //    .catch(error => alert(error.message))

           auth.signInWithEmailAndPassword(userEmail, userPassword)
           .then(this.onLoginSuccess.bind(this))
           .catch(() => {
             firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
             .then(this.onLoginSucess.bind(this))
             .catch(this.onLoginFail.bind(this));
           });

           onLoginSuccess = () => {
            this.setState({
              email: '',
              password: '',
              loading: false,
              error: ''
            });
        }
        
        onLoginFail = () => {
            this.setState({
              error: 'Authentication Failed',
              loading: false
            });
        }
    }

    

    const handleLogin = () => {
         auth
           .signInWithEmailAndPassword(userEmail,userPassword)
           .then(userCredentials => {
             const user = userCredentials.user;
             console.log('logged in with', user.userEmail);
           })
           .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className='flex flex-col items-center justify-center my-4'>
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
                            <TouchableOpacity className='px-4 py-2 bg-purple-300 rounded-md' onPress={handleSignUp}>
                                <Text className="text-lg">Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='p-4'>
                            <TouchableOpacity className='px-4 py-2 bg-purple-300 rounded-md' onPress={handleLogin}>
                                <Text className="text-lg">Log IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignupScreen