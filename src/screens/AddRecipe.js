import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function AddRecipe() {
  return (
    <View>
      {/* header */}
      <View
        style={{
          paddingHorizontal: 30,
          backgroundColor: 'yellow',
          height: 60,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 40,
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{
              width: 21,
              height: 21,
              backgroundColor: 'red',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          add recipe
        </Text>
      </View>
      {/* header */}
    </View>
  );
}
export default AddRecipe;
