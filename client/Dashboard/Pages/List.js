import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const List = () => {
  return (
    <View style= {styles.ListPage}>
        <View>
            <Text>List 1</Text>
            <Button
                title = "..."
                onpressed = {console.log("affichage menu action pour une list")}
            />            
        </View>
        <View>
            <TextInput
                onChangeText={console.log("Card ajouté")}
                placeholder="Add a card"
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ListPage : {
        backgroundColor: "#414141",
        width: "400",
        height: "700",

    }
})

export default List;