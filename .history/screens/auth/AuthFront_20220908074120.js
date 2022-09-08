import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import tatoo1 from '../../assets/Images/tatoo-2.jpg'

const AuthFront = ({ navigation }) => {

const logotUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                }).catch((error) => {
                    // An error happened.
                });
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

    return (
        <View className="flex flex-col justify-between bg-gray-200 min-h-full py-10 ">
            <StatusBar style='dark' />
            <View className='items-center p-[120px] bg-blue-400 mt-4 mx-4'>
            </View>
            {/* the buttoms will go here */}
            <View className='mx-4 mb-14 space-y-2'>
                <TouchableOpacity className='flex-row border-2 border-gray-400 py-2 items-center justify-center rounded-xl' onPress={() => navigation.navigate("Sign Up")}>
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
                <TouchableOpacity className=' py-2 items-center  px-4 ' onPress={() => navigation.navigate("Log In")}>
                    <Text className='text-black text-xl flex-1 text-center font-extrabold'>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AuthFront