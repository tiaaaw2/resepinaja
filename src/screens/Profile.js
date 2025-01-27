import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Profile() {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ini PROFILE</Text>
    </TouchableOpacity>
  );
}
export default Profile;
