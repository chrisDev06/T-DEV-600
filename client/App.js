import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Dashboard/Pages/Header';
import Body from './Dashboard/Pages/Body';
import Footer from './Dashboard/Pages/Footer';
import { useState } from 'react';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const OpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const MenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <View style={headerStyle.container}>
      <Header OpenNav ={OpenNav} openMenu={MenuOpen}/>
      <Body isNavOpen={isNavOpen} isMenuOpen={isMenuOpen}/>
      <Footer/>
    </View>
  );
}


const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D6D8',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});