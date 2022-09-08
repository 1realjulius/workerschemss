import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectUser, logout } from '../redux/users/userSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [user,setUser] = useState(null)
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
      <ScrollView>
      <View className='flex items-center justify-center'>
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