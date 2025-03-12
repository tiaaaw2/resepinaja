import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#EFBC5D',
          textAlign: 'center',
        }}>
        Resep-in <Text style={{color: 'black'}}>aja</Text>
      </Text>
    </View>
  );
}

export default SplashScreen;
