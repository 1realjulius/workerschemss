import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectUser, logout } from '../redux/users/userSlice';
import { ArrowRightOnRectangleIcon, BriefcaseIcon, IdentificationIcon } from 'react-native-heroicons/outline';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null)
  const auth = getAuth();

  const HandleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      console.log('user has been logged out')
      dispatch(setCurrentUser(null))
    } else {
      // User is signed out
      // ...
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.email)
    } else {
      // User is signed out
      setUser(null)
    }
  });

  console.log('This is the user email', user);
  return (
    <SafeAreaView>
      <ScrollView className='h-full'>
        <View className='flex flex-col'>
          {/* The image */}
          <View className="relative items-center justify-center p-4">
            <View className='h-[184px] w-[184px] border-4 border-gray-300 rounded-full absolute '></View>
            <Image source={require('../assets/Images/tatoo-2.jpg')} className=" w-[180px] h-[180px] rounded-full" />
          </View>
          {/* User Personal Details */}
          <View className='px-4'>
            <Text className='py-1 px-4 text-lg font-semibold'>User Details</Text>
            <View className='border-2 border-gray-300 rounded-md divide-y-2 divide-gray-300'>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>User Name</Text>
                <Text className='text-lg text-gray-500'>Julius Eghan</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Email</Text>
                <Text className='text-lg text-gray-500'>iamjulius@gmail.com</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Phone Number</Text>
                <Text className='text-lg text-gray-500'>0549321512</Text>
              </View>
              <View className='px-4 py-2 flex flex-row items-center justify-between'>
                <Text className='text-lg'>Address</Text>
                <Text className='text-lg text-gray-500'>Accra, Ghana</Text>
              </View>
            </View>
          </View>
          {/* The action buttoms */}
          <View className='p-4'>
            <View>
              <TouchableOpacity  className='my-1 bg-gray-300 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2'>
                <Text className='text-lg'>Edit Personal Details</Text>
                <IdentificationIcon size={24} style={tw`text-black`}/>
              </TouchableOpacity>
              <TouchableOpacity  className='my-1 bg-gray-300 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2'>
                <Text className='text-lg'>Edit Work Profile</Text>
                <BriefcaseIcon size={24} style={tw`text-black`}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={HandleSignOut} className='my-1 bg-red-200 px-3 py-2 items-center rounded-md flex flex-row justify-center space-x-2'>
                <Text className='text-lg text-red-600 font-semibold'>Sign Out</Text>
                <ArrowRightOnRectangleIcon size={24} style={tw`text-red-600`}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='hidden'>
          {/* <Text>ProfileScreen</Text>
        {user ?<Text>Welcome, {user}</Text> : <Text>The user id not here</Text>}
        <TouchableOpacity onPress={HandleSignOut} className='my-4 bg-blue-200 px-3 py-2'>
          <Text className='text-xl'>Sign Out</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen