import * as React from 'react';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from './screens/HomeScreen';
import SchedulesScreen from './screens/SchedulesScreen';
import { StatusBar } from 'expo-status-bar';
import SignupScreen from './screens/auth/SignupScreen';
import LoginScreen from './screens/auth/LoginScreen';
import { useState } from 'react';
import { auth } from './firebase/firebase';
import { useEffect } from 'react';
import NotificationsScreen from './screens/NotificationsScreen';
import * as Icons from "react-native-heroicons/outline";
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [user, setUser] = useState('julius')
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const SchedulesStack = createNativeStackNavigator();
  const NotificationsStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  //this listerns to whether there is a user log in and changes the screens to use
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setUser(user)
  //     }
  //   })
  // }, [])



  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Dashboard" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  };

  const SchedulesStackScreen = () => {
    return (
      <SchedulesStack.Navigator>
        <SchedulesStack.Screen name="Schedule" component={SchedulesScreen} />
      </SchedulesStack.Navigator>
    );
  };
  const NotificationsStackScreen = () => {
    return (
      <NotificationsStack.Navigator>
        <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} />
      </NotificationsStack.Navigator>
    );
  };

  const ProfileStackScreen = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Worker Profile" component={ProfileScreen} options={{ headerLargeTitle: true, }} />
      </ProfileStack.Navigator>
    );
  };
  const AuthStackScreen = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Sign Up" component={SignupScreen} options={{ headerLargeTitle: true, }} />
        <AuthStack.Screen name="Log In" component={LoginScreen} options={{ headerLargeTitle: true, }} />
      </AuthStack.Navigator>
    );
  };


  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar />
        {user ? <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              title: "Requests",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                // <TabBarIcon name="calendar" color={color} />
                <Icons.HomeModernIcon size={24}/>
              ),
            }}
          />
          <Tab.Screen name="Schedules" component={SchedulesStackScreen} />
          <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
          : <AuthStackScreen />}
        {/* <AuthStackScreen/> */}

      </TailwindProvider>
    </NavigationContainer>
  );
}

