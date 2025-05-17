import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_GRAY} from '../assets/color/color';
import axios from 'axios';
import {BASE_URL} from '../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';

function AddRecipe() {
  //
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [cookingSteps, setCookingSteps] = useState('');
  const [ingredients, setIngredients] = useState('');

  // upload gmbr
  const [imageUri, setImageUri] = useState(null);
  const [imageName, setImageName] = useState(null);
  const postRecipes = async () => {
    console.log('test');

    const userId = await AsyncStorage.getItem('userId');

    const payload = {
      title: title,
      id: parseInt(userId),
      ingredients: ingredients,
      steps: cookingSteps,
      image: {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      },
    };
    // console.log('id', imageUri);

    // Only add photo if it exists
    if (imageUri) {
      payload.image = {
        uri: imageUri,
        type: 'image/jpeg',
        name: imageName,
      };
    } else {
      payload.image = null;
    }

    // Create FormData object
    const formDataObj = new FormData();
    Object.keys(payload).forEach(key => {
      if (key === 'image' && payload.image) {
        formDataObj.append('image', payload.image);
      } else {
        formDataObj.append(key, payload[key]);
      }
    });

    console.log(formDataObj);

    if (userId) {
      try {
        const response = await axios.post(
          `${BASE_URL}/API-RESEP/post_resep.php`,
          formDataObj,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (response.data.status === 'success') {
          console.log('Recipe added successfully');
          Alert.alert('add Recipe successfully');
          setImageUri('');
          setTitle('');
          setCookingSteps('');
          setIngredients('');
          navigation.navigate('MyRecipe');
        } else {
          console.log('Error adding recipe:', response.data.message);
        }
      } catch (error) {
        console.log('Error posting recipe:', error);
      }
    }
  };

  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to select image.  Please try again.');
      } else {
        const source = {uri: response.assets[0].uri};
        console.log(source);
        setImageUri(source.uri);
        setImageName(response.assets[0].fileName);
      }
    });
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
              {imageUri && (
                <Image
                  source={{uri: imageUri}}
                  style={{width: 200, height: 200, marginBottom: 20}}
                />
              )}

              <TouchableOpacity
                onPress={handleChoosePhoto}
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
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'gray'}}>Upload gambar</Text>
              </TouchableOpacity>
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
                value={title}
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
                value={ingredients}
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
                value={cookingSteps}
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
