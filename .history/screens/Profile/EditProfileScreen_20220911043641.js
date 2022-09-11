import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={60}>
            <ScrollView>
                <View className='p-4'>
                    <View>
                        <Text className='text-lg px-2'>User Name</Text>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>First Name</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2  h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter First Name'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="default"
                            />
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>Last Name</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2 h-12 leading-none rounded-b-lg text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter First Name'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <View className='mt-4'>
                        <Text className='text-lg px-2'>User Email</Text>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>Email</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2 rounded-b-lg h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter Email'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <View className='mb-4 mt-4'>
                        <Text className='text-lg px-2'>User Phone Number</Text>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>Phone Number</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2 rounded-b-lg h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter Phone Number'
                                // onChangeText={handleFirstNameChange}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <View>
                        <View className='mb-4'>
                            <Text className='text-lg px-2'>User Phone Number</Text>
                            <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                                <View className='h-12 justify-center'>
                                    <Text className='text-lg px-2'>Phone Number</Text>
                                </View>
                                <TextInput
                                    className='bg-white border border-gray-200 p-2 h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter Phone Number'
                                    // onChangeText={handleFirstNameChange}
                                    keyboardType="number-pad"
                                />
                                <View className='flex-row divide-x-2 divide-gray-300'>
                                    <TextInput
                                        className='bg-white border flex-1 border-gray-200 p-2 rounded-bl-lg h-12 leading-none text-[18px]'
                                        // value={userEmail}
                                        enablesReturnKeyAutomatically
                                        placeholder='Enter City'
                                        // onChangeText={handleFirstNameChange}
                                        keyboardType="number-pad"
                                    />
                                    <TextInput
                                        className='bg-white border flex-2 text-center w-40 border-gray-200 p-2 rounded-br-lg h-12 leading-none text-[18px]'
                                        value={'Ghana'}
                                        enablesReturnKeyAutomatically
                                        placeholder='Enter Country'
                                        // onChangeText={handleFirstNameChange}
                                        keyboardType="number-pad"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='mx-4 my-2'>
                <TouchableOpacity className='items-center py-3 bg-purple-400 rounded-lg'>
                    <Text className='text-lg text-purple-900'>Update</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default EditProfileScreen