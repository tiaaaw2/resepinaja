import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_GRAY} from '../assets/color/color';

function Profile() {
  const navigation = useNavigation();
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
            Fais Pratama
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
            placeholder="Masukkan Nama"
            style={{
              marginTop: 10,
              marginBottom: 20,
              paddingHorizontal: 20,
              height: 50,
              width: '100%',
              color: '#EFBC5D',
              borderRadius: 10,
              borderColor: COLOR_GRAY.LIGHTEST,
              backgroundColor: COLOR_GRAY.LIGHTEST,
              borderWidth: 2,
            }}
          />
          {/* password */}
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
                placeholder="Masukkan Username"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
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
                placeholder="Masukkan Nomor Telepon"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
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
                placeholder="Masukkan Email"
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
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
        {/* Button logout */}
        <View
          style={{
            paddingHorizontal: 30,
            marginTop: -10,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Login');
            }}
            style={{
              backgroundColor: '#EFBC5D',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              source={require('./../assets/logout.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                position: 'absolute',
                left: 90,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
                letterSpacing: 1.5,
                fontWeight: 'semibold',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button logout */}
      </View>
    </ScrollView>
  );
}

export default Profile;
