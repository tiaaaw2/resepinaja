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
              marginBottom: 50,
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
          <TouchableOpacity>
            <Image
              source={require('./../assets/ikanNila.jpg')}
              style={{
                width: '97%',
                height: 170,
                borderRadius: 15,
                marginLeft: 7,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* RECIPE */}
      </View>
    </ScrollView>
  );
}

export default Home;
