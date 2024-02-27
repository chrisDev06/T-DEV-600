import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={style.container}>
      <Text>Ceci est l'en tête</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        height: '20%',
        width: '100%'
      },
})

export default Header;