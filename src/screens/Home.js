import * as React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>ini home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
