import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Menu = () => {
  return (
    <View style={style.textStyle}>
        <TouchableOpacity style={style.boutonPlusStyle}>
            <FontAwesome name={"plus"} size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={style.boutonPencilStyle}>
            <FontAwesome name={"pencil"} size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={style.boutonTrashStyle}>
            <FontAwesome name={"trash"} size={24} color={"white"} />
        </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    textStyle: {
      backgroundColor: "#A1B5FE",
      height:185,
      width:70,
    },
    boutonPencilStyle:{
        paddingTop: 25,
        paddingLeft: 25,
    },
    boutonPlusStyle:{
        paddingTop: 20,
        paddingLeft: 25,
    },
    boutonTrashStyle:{
        paddingTop: 25,
        paddingLeft: 25,
    }
})

export default Menu;