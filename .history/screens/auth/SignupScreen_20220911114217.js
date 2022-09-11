import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useState } from 'react'
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, push, set } from "firebase/database";
import { db } from '../../firebase/firebase'
import { Alert } from "react-native";
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/users/userSlice'
import { doc, setDoc } from 'firebase/firestore'


const SignupScreen = ({ navigation }) => {
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState('')
    const dispatch = useDispatch();


    const handleSignUp = async () => {
        //put signup stuff here
        const db = getFirestore();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const uEmail = user.email;

                const docRef = doc(db, 'workerDetails', user.email);
                const payload = {
                    FirstName: userFirstName,
                    LastName: userLastName,
                    Email: user.email,
                };
                await setDoc(docRef, payload)
                dispatch(setCurrentUser({ user: uEmail }));
                console.log(user.email);
                Alert.alert("Welcome " + userFirstName);

            })
            .catch((error) => {
                const errorCode = error.code;
                Alert.alert("ohh shit!", error.code);
                // ..l
            });
    };

    const handleEmailTextChange = (Email) => {
        setUserEmail(Email)
        console.log(userEmail);
    };
    const handlePasswordTextChange = (Password) => {
        setUserPassword(Password)
        console.log(userPassword);
    };
    const handleFirstNameChange = (firstName) => {
        setUserFirstName(firstName)
        console.log(userFirstName);
    };
    const handleLastNameChange = (lastName) => {
        setUserLastName(lastName)
        console.log(userLastName);
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className='flex flex-col px-6 my-2'>
                        <View className='py-2 items-center'>
                            <Text className='text-lg'>Welcome, Create an account</Text>
                        </View>
                        <View className='flex flex-colpy-2 space-y-2'>
                            <View className=''>
                                <Text className='text-base my-1 px-2'>First Name</Text>
                                <TextInput
                                    className='bg-white border border-gray-200 rounded-md p-2  h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter First'
                                    onChangeText={handleFirstNameChange}
                                    keyboardType="default"
                                />
                            </View>
                            <View className=''>
                                <Text className='text-base my-1 px-2'>Last Name</Text>
                                <TextInput
                                    className='bg-white border border-gray-200 rounded-md p-2  h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter Last Name'
                                    onChangeText={handleLastNameChange}
                                    keyboardType="default"
                                />
                            </View>
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
                            <TouchableOpacity className='px-2 py-2 bg-purple-800  rounded-md my-4 items-center' onPress={handleSignUp}>
                                <Text className="text-lg text-purple-200">Sign Up</Text>
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

export default SignupScreen