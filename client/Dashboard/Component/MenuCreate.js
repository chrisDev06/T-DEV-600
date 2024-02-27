import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MenuCreate = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={"ellipsis-h"} size={24} color={"white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop:40
  },
});

export default MenuCreate;
