import { View, Text } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const ProfileScreen = () => {

  const HandleSignOut = () => {
    //sign out options here
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen