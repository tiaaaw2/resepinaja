import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_GRAY} from '../assets/color/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../env';

function Profile() {
  const navigation = useNavigation();

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const postProfil = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/API-RESEP/edit_profile.php`,
        {
          id: 6,
          name: name,
          username: username,
          phonenumber: phonenumber,
        },
      );
      if (response.data.status === 'success') {
        console.log('Profile updated');
        Alert.alert('Profile updated');
      } else {
        console.error('Profile update failed');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {
      const response = await axios.get(
        `${BASE_URL}/API-RESEP/get_profile.php?id=${userId}`,
      );
      if (response.data.status === 'success') {
        console.log(response.data.data);
        setProfile(response.data.data);
        setName(response.data.data.name);
        setUsername(response.data.data.username);
        setPhoneNumber(response.data.data.phonenumber);
        setEmail(response.data.data.email);
      } else {
        console.error('No recipes found');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
        }}>
        {/* HEADER */}
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.removeItem('userId');
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
            }}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              right: 30,
              top: 30,
              borderRadius: 5,
              backgroundColor: '#EFBC5D',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./../assets/logout.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
        </View>
        {/* HEADER */}
        {/* IMAGE */}
        <ImageBackground
          source={require('./../assets/user.png')}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
            marginTop: -10,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 100,
            }}
            source={{
              uri: 'https://siplah-oss.tokoladang.co.id/merchant/17185/product/6lpxX1FSfLXdLpJQZCws5R0Lsih2IxxBfSgwGoxs.jpg',
            }}
          />
        </ImageBackground>
        {/* IMAGE */}
        {/* NAME */}
        <View style={{alignItems: 'center', marginTop: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {profile?.name || '-'}
          </Text>
        </View>
        {/* USER NAME */}
        {/* FORM */}
        <View
          style={{
            padding: 30,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 15}}>
            Name
          </Text>
          <TextInput
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Masukkan Nama"
            style={{
              marginTop: 10,
              marginBottom: 20,
              paddingHorizontal: 20,
              height: 50,
              width: '100%',
              color: COLOR_GRAY.DARK,
              borderRadius: 10,
              borderColor: COLOR_GRAY.LIGHTEST,
              backgroundColor: COLOR_GRAY.LIGHTEST,
              borderWidth: 2,
            }}
          />
          {/* usernsme */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Username</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1}}>
              <TextInput
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Masukkan Username"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  color: COLOR_GRAY.DARK,
                  borderColor: COLOR_GRAY.LIGHTEST,
                  backgroundColor: COLOR_GRAY.LIGHTEST,
                  borderWidth: 2,
                  paddingRight: 50,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  top: '35%',
                }}></TouchableOpacity>
            </View>
          </View>
          {/* phone number */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Phone Number</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1}}>
              <TextInput
                onChangeText={text => setPhoneNumber(text)}
                value={phonenumber}
                placeholder="Masukkan Nomor Telepon"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  color: COLOR_GRAY.DARK,
                  borderColor: COLOR_GRAY.LIGHTEST,
                  backgroundColor: COLOR_GRAY.LIGHTEST,
                  borderWidth: 2,
                  paddingRight: 50,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  top: '35%',
                }}></TouchableOpacity>
            </View>
          </View>
          {/* Email */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Email</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1}}>
              <TextInput
                editable={false}
                value={email}
                placeholder="Masukkan Email"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  color: COLOR_GRAY.DARK,
                  borderColor: COLOR_GRAY.LIGHTEST,
                  backgroundColor: COLOR_GRAY.LIGHTEST,
                  borderWidth: 2,
                  paddingRight: 50,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  top: '35%',
                }}></TouchableOpacity>
            </View>
          </View>
        </View>
        {/* FORM */}
        {/* Button save */}
        <View
          style={{
            paddingHorizontal: 30,
            marginTop: -10,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              //pnggil fungsi
              postProfil();
            }}
            style={{
              backgroundColor: '#EFBC5D',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
                letterSpacing: 1.5,
                fontWeight: 'semibold',
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button save */}
      </View>
    </ScrollView>
  );
}

export default Profile;
