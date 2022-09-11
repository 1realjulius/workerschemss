import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { IdentificationIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = () => {
    const [FName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [uEmail, setUEmail] = useState('')
    const [uPhone, setUPhone] = useState('')
    const [streetName, setStreetName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [image, setImage] = useState(null);


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleFName = (FName) => {
        setFName(FName)
        // console.log(FName);
    };
    const handleLName = (LName) => {
        setLName(LName)
        // console.log(LName);
    };
    const handleUEmail = (UEmail) => {
        setUEmail(UEmail)
        // console.log(UEmail);
    };
    const handleUPhone = (UPhone) => {
        setUPhone(UPhone)
        // console.log(UPhone);
    };
    const handleStreetName = (StreetName) => {
        setStreetName(StreetName)
        // console.log(StreetName);
    };
    const handleAddress = (Address) => {
        setAddress(Address)
        // console.log(Address);
    };
    const handleCity = (City) => {
        setCity(City)
        // console.log(City);
    };
    return (
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={60}>
            <ScrollView>
                <View className='p-4'>
                    <View className='flex flex-row items-center space-x-2 justify-center px-2'>
                        <Text className='text-lg'>User Details</Text>
                        <IdentificationIcon size={24} style={tw`text-black`} />
                    </View>
                    <View className='py-4'>
                        {/* image profile update */}
                        <View className="items-center">
                            <View className="border-4 flex relative justify-center items-center w-[170px] h-[164px] border-gray-300 rounded-full my-4">
                                <UserCircleIcon size='190px' style={tw`absolute text-gray-300`} />
                                {image && (
                                    <Image
                                        source={{ uri: image }}
                                        className=" w-40 h-40 rounded-full"
                                    />
                                )}
                            </View>
                            <TouchableOpacity onPress={pickImage} className="px-3 py-2 border-2 border-gray-300 rounded-md">
                                <Text>Edit Profile Photo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>First Name</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2  h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter First Name'
                                onChangeText={handleFName}
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
                                onChangeText={handleLName}
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <View className='mt-4'>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>Email</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2 rounded-b-lg h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter Email'
                                onChangeText={handleUEmail}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>
                    <View className='mb-4 mt-4'>
                        <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                            <View className='h-12 justify-center'>
                                <Text className='text-lg px-2'>Phone Number</Text>
                            </View>
                            <TextInput
                                className='bg-white border border-gray-200 p-2 rounded-b-lg h-12 leading-none text-[18px]'
                                // value={userEmail}
                                enablesReturnKeyAutomatically
                                placeholder='Enter Phone Number'
                                onChangeText={handleUPhone}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <View>
                        <View className=''>
                            <View className='border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-lg'>
                                <View className='h-12 justify-center'>
                                    <Text className='text-lg px-2'>Location</Text>
                                </View>
                                <TextInput
                                    className='bg-white border border-gray-200 p-2 h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter Street'
                                    onChangeText={handleStreetName}
                                    keyboardType="default"
                                />
                                <TextInput
                                    className='bg-white border border-gray-200 p-2 h-12 leading-none text-[18px]'
                                    // value={userEmail}
                                    enablesReturnKeyAutomatically
                                    placeholder='Enter Address'
                                    onChangeText={handleAddress}
                                    keyboardType="default"
                                />
                                <View className='flex-row divide-x-2 divide-gray-300'>
                                    <TextInput
                                        className='bg-white border flex-1 border-gray-200 p-2 rounded-bl-lg h-12 leading-none text-[18px]'
                                        // value={userEmail}
                                        enablesReturnKeyAutomatically
                                        placeholder='Enter City'
                                        onChangeText={handleCity}
                                        keyboardType="default"
                                    />
                                    <TextInput
                                        className='bg-white border flex-2 text-center w-40 border-gray-200 p-2 rounded-br-lg h-12 leading-none text-[18px]'
                                        value={'Ghana'}
                                        enablesReturnKeyAutomatically
                                        placeholder='Enter Country'
                                        // onChangeText={handleFirstNameChange}
                                        keyboardType="default"
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