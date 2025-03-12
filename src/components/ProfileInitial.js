import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileInitial = ({
  nama,
  ukuran = 50,
  warnaLatar = '#6200ea',
  warnaTeks = '#ffffff',
}) => {
  const getInisial = nama => {
    if (!nama) return '?';
    const namaArray = nama.trim().split(' ');
    const inisial = namaArray
      .map(n => n[0].toUpperCase())
      .slice(0, 2)
      .join('');
    return inisial;
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: ukuran,
          height: ukuran,
          borderRadius: ukuran / 2,
          backgroundColor: warnaLatar,
        },
      ]}>
      <Text style={[styles.text, {fontSize: ukuran / 2.5, color: warnaTeks}]}>
        {getInisial(nama)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ProfileInitial;
