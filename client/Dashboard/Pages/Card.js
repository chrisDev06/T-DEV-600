import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const Card = ({ titleCard }) => {
  const [title, setTitle] = useState(() => {
    if (titleCard.length > 15) {
      return titleCard.slice(0, 15) + '...';
    } else {
      return titleCard;
    }
  });

  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (!pressed) {
      setTitle(titleCard);
    } else {
      setTitle(titleCard.length > 15 ? titleCard.slice(0, 15) + '...' : titleCard);
    }
  };

  return (
    <View style={styles.CardPage}>
      <View style={styles.CardBody}>
        <Pressable onPress={handlePress}>
          <Text style={componentStyle.text}>{title}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardPage: {
    maxWidth: 200,
    minHeight: 30,
  },
  CardBody: {
    backgroundColor: '#ffffff',
    maxWidth: "90%",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 7,
    borderRadius: 20,
  },
});

const componentStyle = StyleSheet.create({
  text: {
    color: 'black',
    maxWidth: 120
  },
  button: {
    color: 'black',
    position: 'relative',
    bottom: 4,
  },
});

export default Card;
