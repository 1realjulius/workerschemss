import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
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
    <SafeAreaView>
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={HandleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen