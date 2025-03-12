import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_GRAY} from '../assets/color/color';
import axios from 'axios';

function AddRecipe() {
  //
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [cookingSteps, setCookingSteps] = useState('');
  const [ingredients, setIngredients] = useState('');

  const postRecipes = async () => {
    try {
      const response = await axios.post(
        'http://192.168.183.118/API-RESEP/post_resep.php',
        {
          //nama body dan nama variabel
          title: title,
          id: 1,
          ingredients: ingredients,
          steps: cookingSteps,
          image_url: imageUrl,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.status === 'success') {
        console.log('Recipe added successfully');
        navigation.navigate('Home');
      } else {
        console.error('Error adding recipe:', response.data.message);
      }
    } catch (error) {
      console.error('Error posting recipe:', error);
    }
  };

  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
                // menampung aksi mengetik
                onChangeText={text => setImageUrl(text)}
                placeholder="upload gamabr makanan "
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
          {/* title */}
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Title</Text>
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
                onChangeText={text => setTitle(text)}
                placeholder="add title  "
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
                onChangeText={text => setIngredients(text)}
                placeholder="add ur ingradient "
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 150,
                  width: '100%',
                  borderRadius: 10,
                  borderColor: COLOR_GRAY.LIGHTEST,
                  backgroundColor: COLOR_GRAY.LIGHTEST,
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
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Cooking Steps
            </Text>
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
                onChangeText={text => setCookingSteps(text)}
                placeholder="How To Cook? "
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 150,
                  width: '100%',
                  borderRadius: 10,
                  borderColor: COLOR_GRAY.LIGHTEST,
                  backgroundColor: COLOR_GRAY.LIGHTEST,
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
            onPress={() => {
              postRecipes();
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
        {/* BUTTON SAVE */}
      </View>
    </ScrollView>
  );
}
export default AddRecipe;
