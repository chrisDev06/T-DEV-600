import React from 'react';
import { View, Text } from 'react-native';
import List from "./List"


const Body = () => {
  return (
    <View style= {styles.BodyPage}>
      <List/>
    </View>
  );
};

const styles = {
  BodyPage: {
    backgroundColor: "#FFFFFF",
    height: "70%",
    width: "100%"
  }
}

export default Body;