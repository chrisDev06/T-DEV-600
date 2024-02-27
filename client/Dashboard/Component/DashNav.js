import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DashNav = () => {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Your Board</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#A1B5FE',
        minWidth: '35%',
        height: '100%'
      },
    textStyle: {
      backgroundColor: "#7B8BC7",
      height: 35,
      paddingTop: 8,
      paddingLeft: 20,
      color:"#FFFFFF"
    }
})

export default DashNav;