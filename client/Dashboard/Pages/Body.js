import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DashNav from '../Component/DashNav';
import Menu from '../Component/Menu';

const Body = ({ isNavOpen, isMenuOpen }) => {
  return (
    <View style={style.container}>
      {isNavOpen && <DashNav/>}
      <View style={style.MenuStyle}>
        {isMenuOpen && <Menu/>}
      </View>
       
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '80%',
    width:"100%",
  },
  MenuStyle:{
    position:"absolute",
    minHeight: '40%',
    minWidth:"20%",
    borderRadius: 50,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    right: 4,
    overflow: 'hidden',
  }
});

export default Body;