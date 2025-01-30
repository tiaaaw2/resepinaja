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

function Home() {
  const navigation = useNavigation();
  // var resep = [];
  // for (let i = 1; i < 6; i++) {
  //   resep.push(
  //   ,
  //   );
  // }

  console.log('123');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding: 25}}>
        {/* HEADER */}
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 7,
            }}>
            Hi Faisss_1
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 40,
              textAlign: 'center',
            }}>
            What food do you want to cook today?
          </Text>
        </View>
        {/* HEADER */}
        {/* CARI */}
        <View style={{paddingHorizontal: 6}}>
          <TextInput
            placeholder="search recipe"
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
        {/* CARI */}
        {/* RECIPE */}
        <View>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Ingredients');
                }}>
                <View style={{margin: 5}}>
                  <View>
                    <Image
                      source={require('./../assets/ikanNila.jpg')}
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
                        marginLeft: 110,
                        letterSpacing: 1,
                      }}>
                      Mangut Ikan Nila
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
                          50 min
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
                          Agus
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* RECIPE */}
      </View>
    </ScrollView>
  );
}

export default Home;
