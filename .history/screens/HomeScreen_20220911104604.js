import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/users/userSlice';
import { useEffect } from 'react';

const HomeScreen = () => {
  const user = useSelector(selectUser);
  console.log(user.user)

  useEffect(() => {
    if (user.user === null) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      console.log('user has been logged out');
    }

  }, [])
  return (
    <View className='flex flex-col justify-center items-center'>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen