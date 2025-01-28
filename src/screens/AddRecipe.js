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
          // backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Add your recipe
        </Text>
      </View>
      {/* header */}
      {/* FORM */}
      <View style={{padding: 30}}>
        {/* image */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Image</Text>
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
              placeholder="upload gamabr makanan "
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                marginBottom: 10,
                height: 50,
                width: '100%',
                borderRadius: 10,
                borderColor: 'grey',
                backgroundColor: 'grey',
                borderWidth: 2,
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
        {/* ingradient */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Ingradient</Text>
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
              placeholder="add ur ingradient "
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                marginBottom: 10,
                height: 150,
                width: '100%',
                borderRadius: 10,
                borderColor: 'grey',
                backgroundColor: 'grey',
                borderWidth: 2,
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
        {/* COOKING STEPS */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Cooking Steps</Text>
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
              placeholder="How To Cook? "
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                marginBottom: 10,
                height: 150,
                width: '100%',
                borderRadius: 10,
                borderColor: 'grey',
                backgroundColor: 'grey',
                borderWidth: 2,
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
        {/* COOKING STEPS */}
      </View>
      {/* FORM */}
      {/* BUTTON SAVE */}
      <View
        style={{
          paddingHorizontal: 30,
          marginTop: -15,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.replace('Login');
          // }}
          style={{
            backgroundColor: '#EFBC5D',
            height: 48,
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
      {/* BUTTON SAVE */}
    </View>
  );
}
export default AddRecipe;
