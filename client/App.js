import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Dashboard/Pages/Header';
import Body from './Dashboard/Pages/Body';
import Footer from './Dashboard/Pages/Footer';

export default function App() {
  return (
    <View style= {headerStyle.container } >
      <Header style={headerStyle.header }/>
      <Body style={headerStyle.body }/>
      <Footer style={headerStyle.footer }/>
    </View>
  );
}


const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D6D8',
    alignItems: 'center',
    justifyContent: 'collapse',
  },
 
});