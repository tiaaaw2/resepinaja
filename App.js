import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Regis from './src/screens/Regis';
import Profile from './src/screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  // button bawah (home,add, profil)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add Recipe" component={AddRecipe} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    // pindah pindah tab

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Regis" component={Regis} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
