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
import {useNavigation} from '@react-navigation/native';

function Ingredients({route}) {
  const {title} = route.params;
  const {ingred} = route.params;
  const {step} = route.params;
  const {gbr} = route.params;
  const [activeTab, setActiveTab] = React.useState(0);
  const navigation = useNavigation();

  const formatText = text => {
    if (!text) return '';
    // Mengganti pemisah koma dengan titik dan spasi untuk format lebih baik
    return text
      .split(',')
      .map(item => `• \t${item.trim()}`) // Menggunakan bullet point dan indentasi
      .join('\n'); // Gabungkan dengan newline
  };

  return (
    <View style={{flex: 1}}>
      {/* HEADER */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={{uri: gbr}}
          style={{
            width: '100%',
            height: 250,
            borderRadius: 15,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          />
          <View
            style={{
              marginTop: 20,
              height: 50,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyTabs');
              }}
              style={{
                position: 'absolute',
                left: 30,
              }}>
              <Image
                source={require('./../assets/back.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: '700', // Gunakan string untuk fontWeight
                fontSize: 20,
                marginLeft: 10,
                color: 'white',
              }}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/* HEADER */}
      {/* 2 MENU */}
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-evenly',
          gap: 50,
          alignItems: 'center',
        }}>
        {/* ingredients */}
        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          style={{
            flexDirection: 'row',
            gap: 3,
          }}>
          <Image
            source={require('./../assets/bahan.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: activeTab === 0 ? '#EFBC5D' : 'black',
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: activeTab === 0 ? '#EFBC5D' : 'black',
            }}>
            Ingredients
          </Text>
        </TouchableOpacity>
        {/* cooking steps */}
        <TouchableOpacity
          onPress={() => setActiveTab(1)}
          style={{
            flexDirection: 'row',
            gap: 3,
          }}>
          <Image
            source={require('./../assets/masak.png')}
            style={{
              height: 23,
              width: 23,
              tintColor: activeTab === 1 ? '#EFBC5D' : 'black',
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: activeTab === 1 ? '#EFBC5D' : 'black',
            }}>
            Cooking Steps
          </Text>
        </TouchableOpacity>
      </View>
      {/* 2 MENU */}
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 10}}>
        {activeTab === 0 ? (
          <Text style={{marginLeft: 40, fontWeight: '500'}}>
            {/* Gunakan string untuk fontWeight */}
            {formatText(ingred)}
          </Text>
        ) : (
          <Text style={{marginLeft: 40, fontWeight: '500'}}>
            {formatText(step)}
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
export default Ingredients;
