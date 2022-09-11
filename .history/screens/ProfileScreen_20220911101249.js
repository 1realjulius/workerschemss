import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, selectEmail } from '../redux/users/userSlice';
import { ArrowRightOnRectangleIcon, BriefcaseIcon, IdentificationIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const auth = getAuth();
  const [userDetails, setUserDetails] = useState([])

  const HandleSignOut = () => {
    if (user) {
      dispatch(logout());
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      console.log('user has been logged out');
    } else {
      // User is signed out
      // ...
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //done
    } else {
      // User is signed out
    }
  });

  //This gets the data fro the firebase database to show
  useEffect(() => {
    const userData = onSnapshot(doc(db, "workerDetails", user.user), (doc) => {
      setUserDetails(doc.data())
      // console.log("Current data: ", doc.data());
      // console.log(userDetails);
    });
  }, []);

  console.log("The User fist name", userDetails.FirstName);
  // console.log('This is the user email', user);
  return (
    <SafeAreaView>
      <ScrollView className='h-full'>
        <View className='flex flex-col'>
          {/* The image */}
          <View className="relative items-center justify-center p-4">
            <View className='h-[180px] w-[180px] border-4 border-gray-300 rounded-full absolute '></View>
            {/* <Image source={require('../assets/Images/tatoo-2.jpg')} className=" w-[180px] h-[180px] rounded-full" /> */}
            <UserCircleIcon size='200px' style={tw`text-gray-300`} />
          </View>
          {/* User Personal Details */}
          <View className='flex flex-row items-center justify-center'>
            <View className='bg-white p-4 items-center'>
              <Text className='text-lg'>You Are Currently Logged In</Text>
              <Text className='text-lg'>This is Your Email: <Text className='bg-blue-200 px-1'>{userDetails.Email}</Text></Text>
              <Text className='text-lg'>Edit Personal Details Below to View Your Data</Text>
            </View>
          </View>
          <View className='px-4'>
            <Text className='py-1 px-4 text-lg text-gray-500'>Account Details</Text>
            <View className='border-2 border-gray-300 rounded-md divide-y-2 divide-gray-300'>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>User Name</Text>
                <Text className='text-lg text-gray-500'>Julius Eghan</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Email</Text>
                <Text className='text-lg text-gray-500'>{user.user}</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Phone Number</Text>
                <Text className='text-lg text-gray-500'>0549321512</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Location</Text>
                <Text className='text-lg text-gray-500'>Accra, Ghana</Text>
              </View>
            </View>
          </View>
          {/* The action buttoms */}
          <View className='px-4 py-8'>
            <View>
              <TouchableOpacity className='my-1 bg-gray-300 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2' onPress={() => navigation.navigate('Edit Profile')}>
                <Text className='text-lg'>Edit Personal Details</Text>
                <IdentificationIcon size={24} style={tw`text-black`} />
              </TouchableOpacity>
              <TouchableOpacity className='my-1 bg-gray-300 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2'>
                <Text className='text-lg'>Edit Work Profile</Text>
                <BriefcaseIcon size={24} style={tw`text-black`} />
              </TouchableOpacity>
              <TouchableOpacity onPress={HandleSignOut} className='my-1 bg-red-200 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2'>
                <Text className='text-lg text-red-600'>Sign Out</Text>
                <ArrowRightOnRectangleIcon size={24} style={tw`text-red-600`} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen