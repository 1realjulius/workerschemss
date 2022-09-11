import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
            <ScrollView>
                <View>
                    <Text>Hello</Text>
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity className='items-center py-4 my-1'>
                    <Text>Update</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default EditProfileScreen