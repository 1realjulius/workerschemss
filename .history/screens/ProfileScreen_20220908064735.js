import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentUser, selectUser, logout } from '../redux/users/userSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((_setCurrentUser)=> user);
  const auth = getAuth();

  const HandleSignOut = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const addMe = () => {
    dispatch(useSelector())
  }
  console.log('This is the user',user);
  return (
    <SafeAreaView>
    <View className='flex items-center justify-center'>
      <Text>ProfileScreen</Text>
      {user ? <Text>The user is {user.uid}</Text> : <Text>The is no user</Text>}
      <TouchableOpacity onPress={HandleSignOut}>
        <Text className='text-xl'>Sign Out</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen