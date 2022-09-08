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
import ProfileScreen from './screens/ProfileScreen';
import { BellAlertIcon, CalendarDaysIcon, HomeIcon, UserCircleIcon } from "react-native-heroicons/outline";

export default function App() {
  const [user, setUser] = useState(null)
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const SchedulesStack = createNativeStackNavigator();
  const NotificationsStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  //this listerns to whether there is a user log in and changes the screens to use
  //  useEffect(() => {
  //    auth.onAuthStateChanged(user => {
  //      if (user === user) {
  //        setUser(user)
  //      }else{
  //       setUser(null)
  //      }
  //    })
  //  }, [])


  // const currenUser = auth.currentUser;

  // if (currenUser) {
  //   // setUser(currenUser)
  //   // User is signed in, see docs for a list of available properties
  //   // https://firebase.google.com/docs/reference/js/firebase.User
  //   // ...
  // } else {
  //   // setUser(null)
  //   // No user is signed in.
  // }


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
        <AuthStack.Screen name="Sign Up" component={SignupScreen} options={{ headerLargeTitle: false,headerShown: false, }} />
        <AuthStack.Screen name="Log In" component={LoginScreen} options={{ headerLargeTitle: false,headerShown: false, }} />
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
              <HomeIcon color={color} size={30} />
            ),
            }}
          />
          <Tab.Screen
            name="Schedules"
            component={SchedulesStackScreen} options={{
            title: "Schedules",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <CalendarDaysIcon color={color} size={30} />
            ),
            }} />
          <Tab.Screen
            name="Notifications"
            component={NotificationsStackScreen} options={{
            title: "Notifications",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <BellAlertIcon color={color} size={30} />
            ),
            }} />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen} options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <UserCircleIcon color={color} size={30} />
            ),
            }} />
        </Tab.Navigator>
          : <AuthStackScreen />}
        {/* <AuthStackScreen/> */}

      </TailwindProvider>
    </NavigationContainer>
  );
}

