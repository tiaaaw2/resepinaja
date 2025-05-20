import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../env';

function MyRecipe() {
  const navigation = useNavigation();
  const [myRecipe, setMyRecipes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      fetchRecipes();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const fetchRecipes = async () => {
    const userId = await AsyncStorage.getItem('userId');

    try {
      const response = await axios.get(
        `${BASE_URL}/API-RESEP/get_resep_by_user.php?id_user=${userId}`,
      );
      if (response.data.status === 'success') {
        setMyRecipes(response.data.data);
      } else {
        // console.error('No recipes found');
        setMyRecipes([]);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setMyRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async recipeId => {
    try {
      const response = await fetch(`${BASE_URL}/API-RESEP/delete_resep.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: recipeId}),
      });

      const result = await response.json();

      if (result.status === 'success') {
        console.log('Recipe deleted successfully');
        onRefresh(); // Misal kamu ingin refresh data setelah hapus
      } else {
        console.error('Delete failed:', result.message);
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchRecipes();
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* header */}
        <View
          style={{
            padding: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            My Recipe
          </Text>
        </View>

        {/* header */}
        {/* list resep */}
        {myRecipe.length === 0 && (
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('./../assets/notfound2.png')}
              style={{height: 200, width: 200, marginTop: '50%'}}
            />
          </View>
        )}
        <View style={{minHeight: 300, padding: 17, gap: 10}}>
          {myRecipe.map((item, index) => (
            <View
              key={index}
              style={{
                minHeight: 20,
                width: '100%',
                backgroundColor: '#fff',
                flexDirection: 'row',
                elevation: 5,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={{uri: BASE_URL + '/api-resep/' + item.image_url}}
                style={{
                  height: 72,
                  width: 90,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <View style={{width: 170}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Ingredients', {
                      title: item.title,
                      ingred: item.ingredients,
                      step: item.steps,
                      gbr: BASE_URL + '/api-resep/' + item.image_url,
                    });
                  }}
                  style={{paddingLeft: 20}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'semibold',
                      // backgroundColor: 'aqua',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 13,
                      backgroundColor:
                        item.status === 0 ? '#FCF259' : '#67AE6E',
                      fontWeight: 'bold',
                      color: item.status === 0 ? 'black' : 'white',
                      fontSize: 12,
                      borderRadius: 3,
                      width: 60,
                      textAlign: 'center',
                      paddingVertical: 2,
                    }}>
                    {item.status === 0 ? 'pending' : 'upload'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Konfirmasi Hapus',
                      'Apakah kamu yakin ingin menghapus resep ini?',
                      [
                        {
                          text: 'Batal',
                          style: 'cancel',
                        },
                        {
                          text: 'Hapus',
                          onPress: () => {
                            deleteRecipe(item.id);
                          },
                          style: 'destructive',
                        },
                      ],
                      {cancelable: true},
                    );
                  }}>
                  <Image
                    source={require('./../assets/delete.png')}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        {/* list resep  */}
      </ScrollView>
    </View>
  );
}
export default MyRecipe;
