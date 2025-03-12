import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Regis from './src/screens/Regis';
import Profile from './src/screens/Profile';
import AddRecipe from './src/screens/AddRecipe';
import Ingredients from './src/screens/Ingredients';
import SplashScreen from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const icons = {
            Home: require('./src/assets/home.png'),
            AddRecipe: require('./src/assets/add.png'),
            Profile: require('./src/assets/profile.png'),
          };

          return (
            <Image
              source={icons[route.name]}
              style={{
                width: size,
                height: size,
                tintColor: focused ? '#EFBC5D' : '#ccc',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#EFBC5D',
        tabBarInactiveTintColor: '#ccc',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          backgroundColor: '#FFF',
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Beranda'}}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={{tabBarLabel: 'Tambah Resep'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profil'}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    // pindah pindah tab

    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Regis" component={Regis} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Ingredients" component={Ingredients} />
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
