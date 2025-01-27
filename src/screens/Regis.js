import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Regis() {
  const navigation = useNavigation();
  return (
    <View>
      {/* HEADER */}
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 150,
          marginBottom: 30,
          gap: 8,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#EFBC5D',
            textAlign: 'center',
          }}>
          Resep-in <Text style={{color: 'black'}}>aja</Text>
        </Text>

        <Text
          style={{
            // backgroundColor: COLOR.RED,
            fontSize: 15,
            fontWeight: 'semibold',
            color: 'black',
            textAlign: 'center',
          }}>
          find your next favorite dish with tasty
        </Text>
      </View>
      {/* HEADER */}
      {/* FORM */}
      <View
        style={{
          padding: 20,
        }}>
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            height: 50,
            width: '100%',
            borderRadius: 10,
            borderColor: '#EFBC5D',
            borderWidth: 3,
          }}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholder="Password"
          style={{
            marginTop: -20,
            paddingHorizontal: 20,
            height: 50,
            width: '100%',
            color: 'black',
            borderRadius: 10,
            borderColor: '#EFBC5D',
            borderWidth: 3,
          }}
        />
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholder="Confirm Password"
          style={{
            marginTop: -20,
            paddingHorizontal: 20,
            height: 50,
            width: '100%',
            color: 'black',
            borderRadius: 10,
            borderColor: '#EFBC5D',
            borderWidth: 3,
          }}
        />
      </View>
      {/* FORM */}
      {/* signup button */}
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: '#EFBC5D',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              letterSpacing: 1,
              fontWeight: 'semi-bold',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {/* signup button */}
      {/* login */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'center',
          fontSize: 15,
          marginTop: '28%',
        }}>
        <Text>Already have account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* login */}
    </View>
  );
}

export default Regis;
