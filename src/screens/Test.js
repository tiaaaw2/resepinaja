import React, {useState} from 'react';
import {View, Button, Image, StyleSheet, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Test = () => {
  const [imageUri, setImageUri] = useState(null);

  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to select image.  Please try again.');
      } else {
        const source = {uri: response.assets[0].uri};
        console.log(source);
        setImageUri(source.uri);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'Failed to take picture.  Please try again.');
      } else {
        const source = {uri: response.assets[0].uri};
        console.log(source);
        setImageUri(source.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Button title="Take Photo" onPress={handleTakePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Test;
