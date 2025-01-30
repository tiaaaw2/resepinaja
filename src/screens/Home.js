import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://192.168.219.118/api-resep/resep.php', {
      method: 'GET',
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRecipes(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
                navigation.navigate('Ingredients');
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
                  {/* waktunya */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      gap: 5,
                      alignItems: 'center',
                      position: 'absolute',
                      right: 10,
                      padding: 10,
                      marginTop: 30,
                    }}>
                    <Image
                      source={require('./../assets/clock.png')}
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: 'white',
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'bold',
                          fontSize: 12,
                          color: 'white',
                        }}>
                        {item.duration} min
                      </Text>
                    </View>
                  </View>
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
                    <Image
                      source={{
                        uri: 'https://siplah-oss.tokoladang.co.id/merchant/17185/product/6lpxX1FSfLXdLpJQZCws5R0Lsih2IxxBfSgwGoxs.jpg',
                      }}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: 'red',
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'semibold',
                          fontSize: 13,
                          color: 'white',
                        }}>
                        {item.author}
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
