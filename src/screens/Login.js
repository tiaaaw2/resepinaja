import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../env';
import {COLOR_GRAY} from '../assets/color/color';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (!validateEmail(email)) {
      Alert.alert('format email salah');
    } else if (password.length === 0) {
      Alert.alert('password harus diisi');
    } else {
      postLogin();
    }
    console.log(validateEmail(email));
  };
  const postLogin = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/API-RESEP/login.php`,
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
          console.log('login successfully');
          console.log(response.data.user.id);
          await AsyncStorage.setItem(
            'userId',
            response.data.user.id.toString(),
          );
          navigation.replace('MyTabs');
        } else {
          console.log(' login failed:', response.data.message);
          Alert.alert(response?.data?.message || 'Gagal Login');
        }
      } catch (error) {
        console.log('login failed:', error);
        Alert.alert(error.response.data.message || 'Gagal Login');
      } finally {
        setLoading(false);
      }
    }, 1000);
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
          disabled={loading}
          onPress={() => {
            //pnggil fungsi
            handleLogin();
          }}
          style={{
            backgroundColor: loading ? COLOR_GRAY.NORMAL : '#EFBC5D',
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
            {loading ? 'Loading...' : 'Sign In'}
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
