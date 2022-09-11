import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
            <ScrollView>
                <View>
            //your view
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default EditProfileScreen