import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentUser, selectUser, logout } from '../redux/users/userSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((selectUser));
  const auth = getAuth();
  console.log(user);

  const HandleSignOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(logout)
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
 
  console.log('This is the user',user);
  return (
    <SafeAreaView>
    <View className='flex items-center justify-center'>
      <Text>ProfileScreen</Text>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={HandleSignOut}>
        <Text className='text-xl'>Sign Out</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen