import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const postLogin = async () => {
    try {
      const response = await axios.post(
        'http://192.168.183.118/API-RESEP/login.php',
        {
          //nama body dan nama variabel
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.status === 'success') {
        console.log('Recipe added successfully');
        navigation.replace('MyTabs');
      } else {
        console.error('Error adding recipe:', response.data.message);
      }
    } catch (error) {
      console.error('Error posting recipe:', error);
    }
  };

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
          onChangeText={text => setPassword(text)}
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
      {/* FORM */}
      {/* login button */}
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            //pnggil fungsi
            postLogin();
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* login button */}
      {/* sign up */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'center',
          fontSize: 15,
          marginTop: '47%',
        }}>
        <Text>Don't have account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Regis');
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {/* sign up */}
    </View>
  );
}

export default Login;
