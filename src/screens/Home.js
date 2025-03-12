import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import ProfileInitial from '../components/ProfileInitial';

function Home() {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        'http://192.168.183.118/API-RESEP/get_resep.php',
      );
      if (response.data.status === 'success') {
        setRecipes(response.data.data);
      } else {
        console.error('No recipes found');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{padding: 25}}>
        {/* HEADER */}
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 7}}>
            Hi Faisss_1
          </Text>
          <Text style={{fontSize: 17, marginTop: 40, textAlign: 'center'}}>
            What food do you want to cook today?
          </Text>
        </View>

        {/* SEARCH BAR */}
        <View style={{paddingHorizontal: 6}}>
          <TextInput
            placeholder="Search recipe"
            style={{
              marginTop: 10,
              marginBottom: 40,
              paddingHorizontal: 20,
              height: 50,
              width: '100%',
              borderRadius: 10,
              borderColor: '#EFBC5D',
              backgroundColor: '#EFBC5D',
              borderWidth: 2,
            }}
          />
        </View>

        {/* RECIPE LIST */}
        <View>
          {recipes.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Ingredients', {
                  title: item.title,
                  ingred: item.ingredients,
                  step: item.steps,
                  gbr: item.image_url,
                });
              }}>
              <View style={{margin: 5}}>
                <View>
                  <Image
                    source={{uri: item.image_url}}
                    style={{
                      width: '97%',
                      height: 170,
                      borderRadius: 15,
                      marginLeft: 7,
                      position: 'relative',
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      width: '97%',
                      height: 170,
                      marginLeft: 7,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    style={{
                      padding: 10,
                      color: 'white',
                      position: 'absolute',
                      fontSize: 20,
                      fontWeight: '500',
                      letterSpacing: 1,
                      alignSelf: 'flex-end',
                    }}>
                    {item.title}
                  </Text>
                  {/* pembuat */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      gap: 5,
                      alignItems: 'center',
                      position: 'absolute',
                      marginLeft: 25,
                      marginTop: 135,
                    }}>
                    <ProfileInitial
                      nama={item.user_name}
                      ukuran={25}
                      warnaLatar="#3498db"
                      warnaTeks="#ffffff"
                    />

                    <View>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'semibold',
                          fontSize: 13,
                          color: 'white',
                        }}>
                        {item.user_name}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
