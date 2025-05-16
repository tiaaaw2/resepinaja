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
import {BASE_URL} from '../../env';
import {SearchBar} from '@rneui/themed';

function Home() {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/API-RESEP/get_resep.php`);
      if (response.data.status === 'success') {
        setRecipes(response.data.data);
      } else {
        // console.error('No recipes found');
        setRecipes([]);
      }
    } catch (error) {
      setRecipes([]);

      // console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const [debouncedText, setDebouncedText] = useState('');

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(searchQuery);
    }, 500); // 500ms setelah berhenti mengetik

    return () => clearTimeout(timer); // clear saat user masih mengetik
  }, [searchQuery]);

  // Effect saat debounce selesai
  useEffect(() => {
    if (debouncedText !== '') {
      searchRecipes(debouncedText); // Panggil fungsi cari
    }
  }, [debouncedText]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/API-RESEP/search_resep.php?search=${searchQuery}`,
      );
      if (response.data.status === 'success') {
        setRecipes(response.data.data);
      } else {
        setRecipes([]);
        // console.error('No recipes found');
      }
    } catch (error) {
      setRecipes([]);
      // console.error('Error fetching recipes:', error);
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

  const ucapan = () => {
    const jam = new Date().getHours();
    let ucapan;

    if (jam >= 5 && jam < 12) {
      ucapan = 'Selamat Pagi!';
    } else if (jam >= 12 && jam < 15) {
      ucapan = 'Selamat Siang!';
    } else if (jam >= 15 && jam < 18) {
      ucapan = 'Selamat Sore!';
    } else {
      ucapan = 'Selamat Malam!';
    }

    return ucapan;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={{padding: 25, flex: 1}}>
        {/* HEADER */}
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 7}}>
            {ucapan()}
          </Text>
          <Text style={{fontSize: 17, marginTop: 40, textAlign: 'center'}}>
            What food do you want to cook today?
          </Text>
        </View>

        <View style={{}}></View>
        {/* SEARCH BAR */}
        <View style={{marginHorizontal: -4}}>
          <TextInput
            placeholder="Search recipe"
            onChangeText={text => setSearchQuery(text)}
            // value={this.state.value}
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
        <View style={{marginHorizontal: -19}}>
          {recipes.length === 0 && (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./../assets/notfound2.png')}
                style={{height: 200, width: 200, marginTop: '20%'}}
              />
            </View>
          )}
          {recipes.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Ingredients', {
                  title: item.title,
                  ingred: item.ingredients,
                  step: item.steps,
                  gbr: BASE_URL + '/api-resep/' + item.image_url,
                });
              }}>
              <View style={{margin: 5}}>
                <View>
                  <Image
                    source={{uri: BASE_URL + '/api-resep/' + item.image_url}}
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
                    {/* <ProfileInitial
                      nama={item?.user_name}
                      ukuran={25}
                      warnaLatar="#3498db"
                      warnaTeks="#ffffff"
                    /> */}

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
