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
import AuthFront from './screens/auth/AuthFront';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/users/userSlice'
import EditProfileScreen from './screens/Profile/EditProfileScreen';

const App = () => {
  const [user, setUser] = useState(null);
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const SchedulesStack = createNativeStackNavigator();
  const NotificationsStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();


  //whether there is a user log in and changes the screens to use
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.uid);
    } else {
      setUser(null)
    }
  });

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

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
        <ProfileStack.Screen name="Worker Profile" component={ProfileScreen} options={{}} />
        <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} options={{ headerBackTitle: '' }} />
      </ProfileStack.Navigator>
    );
  };
  const AuthStackScreen = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Auth Pick" component={AuthFront} options={{ headerLargeTitle: false, headerShown: false, }} />
        <AuthStack.Screen name="Sign Up" component={SignupScreen} options={{ headerLargeTitle: false, headerShown: false, }} />
        <AuthStack.Screen name="Log In" component={LoginScreen} options={{ headerLargeTitle: false, headerShown: false, }} />
      </AuthStack.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <StatusBar />
          {user ? <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <HomeIcon color={color} size={32} />
                ),
              }}
            />
            <Tab.Screen
              name="Schedules"
              component={SchedulesStackScreen} options={{
                title: "Schedules",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <CalendarDaysIcon color={color} size={32} />
                ),
              }} />
            <Tab.Screen
              name="Notifs"
              component={NotificationsStackScreen} options={{
                title: "Alerts",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <BellAlertIcon color={color} size={32} />
                ),
              }} />
            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen} options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <UserCircleIcon color={color} size={32} />
                ),
              }} />
          </Tab.Navigator>
            : <AuthStackScreen />}
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App