import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../Component/navBar';
import MenuCreate from '../Component/MenuCreate';

const Header = ({OpenNav, openMenu}) => {
  return (
    <View style={style.container}>
        <NavBar OpenNav={OpenNav}/>
        <MenuCreate onPress={openMenu}/>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: '#A1B5FE',
        height: '10%',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
      },
})

export default Header;