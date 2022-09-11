import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
            <ScrollView>
                <View className='p-4'>
                    <View>
                        <View>
                            <View>
                                <Text className='text-lg'>First Name</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 rounded-md p-2  h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter First Name'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="default"
                            />
                            <View>
                                <Text className='text-lg mx-2>Last Name</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 rounded-md p-2 h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter First Name'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="default"
                            />
                            </View>
                        </View>
                        <View></View>
                        <View></View>
                    </View>
            </ScrollView>
            <View className='mx-4 my-2'>
                <TouchableOpacity className='items-center py-4 bg-white rounded-lg'>
                    <Text className='text-lg'>Update</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default EditProfileScreen