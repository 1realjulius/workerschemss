import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectUser, logout } from '../redux/users/userSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((setCurrentUser));
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
      console.log('h1')
    } else {
      // User is signed out
      console.log('hello')
    }
  });

  console.log('This is the user', user.uid);
  return (
    <SafeAreaView>
      <View className='flex items-center justify-center'>
        <Text>ProfileScreen</Text>
        {user ?<Text>Welcome, {user.user}</Text> : <Text>The user id not here</Text>}
        <TouchableOpacity onPress={HandleSignOut} className='my-4 bg-blue-200 px-3 py-2'>
          <Text className='text-xl'>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen