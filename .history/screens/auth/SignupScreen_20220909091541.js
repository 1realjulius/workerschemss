import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useState } from 'react'
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import {db} from '../../firebase/firebase'
import { Alert } from "react-native";
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/users/userSlice'


const SignupScreen = ({ navigation }) => {
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState('')
    const dispatch = useDispatch();


    const handleSignUp = () => {
        //put signup stuff here
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const uName = user.displayName;
                const uEmail = user.email;
                const uPhone = user.phoneNumber;
                const uID = user.uid;
                const cUser = { userID: uID, userName: uName, userMail: uEmail, userPhone: uPhone };
                dispatch(setCurrentUser({ user: cUser }));
                console.log(user.email);
                Alert.alert("Awsome,welcome" + user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                Alert.alert("ohh shit!", error.code);
                // ..l
            });
    }

    const handleSignUp1 = async (userEmail, userPassword, userLastName, userFirstName) => {
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(userEmail, userPassword)
            const currentUser = auth.currentUser;

            db.collection("workerUsers")
                .doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    lastName: userLastName,
                    firstName: userFirstName,
                });
                const uID = currentUser.uid;
                const uFirstName = currentUser.firstName;
                const uLastName = userLastName;
                const uEmail = currentUser.email;
                const cUser = { userID: uID, userFirstName: uFirstName, userLastName: uLastName, userMail: uEmail };
                dispatch(setCurrentUser({ user: cUser }));
                console.log(cUser);
        } catch (err) {
            Alert.alert("There is something wrong!!!!", err.message);
        }

    }


    const handleEmailTextChange = (Email) => {
        setUserEmail(Email)
        console.log(userEmail);
    }
    const handlePasswordTextChange = (Password) => {
        setUserPassword(Password)
        console.log(userPassword);
    }
    const handleFirstNameChange = (firstName) => {
        setUserFirstName(firstName)
        console.log(userFirstName);
    }
    const handleLastNameChange = (lastName) => {
        setUserLastName(lastName)
        console.log(userLastName);
    }

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