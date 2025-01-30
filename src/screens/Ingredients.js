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

function Ingredients() {
  return (
    <View>
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./../assets/back.png')}
          style={{
            width: 15,
            height: 15,
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 12,
              color: 'black',
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* HEADER */}
    </View>
  );
}
export default Ingredients;
