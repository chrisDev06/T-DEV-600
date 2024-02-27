import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const List = () => {
  return (
    <View style= {styles.ListPage}>
        <View style= {styles.ListHeader}>
            <Text>List 1</Text>
            <Button
                title = "..."
                onpressed = {console.log("affichage menu action pour une list")}
            />            
        </View>
        <View style= {styles.ListFooter}>
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
        width: 275,
        height: 500,
        margin: 20,
        borderRadius: 20
    },
    ListHeader: {
        height: "20%",
        backgroundColor: "#363636",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    ListFooter: {
        height: "20%",
        backgroundColor: "#363636"
    }
})

export default List;