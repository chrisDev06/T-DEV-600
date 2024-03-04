import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


let titleList = "List"
const List = () => {
  return (
    <View style= {styles.ListPage}>
        <View style= {styles.ListHeader}>
            <Text style = {componentStyle.text}>{titleList}</Text>
            <TouchableOpacity
                onpressed = {console.log("affichage menu action pour une list")}
            >
                <Text style = {componentStyle.text}>...</Text>
            </TouchableOpacity>           
        </View>
        <View style = {styles.ListCard}></View>
        <View style= {styles.ListFooter}>
            <TextInput
                style = {componentStyle.text}
                onChangeText={console.log("Card ajouté")}
                placeholder="+ Add a card"
                placeholderTextColor= "#A1B5FE"
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
        borderRadius: 20,
        margin: 20

    },
    ListHeader: {
        height: "20%",
        backgroundColor: "#363636",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ListCard: {
        height: "70%"
    },
    ListFooter: {
        height: "10%",
        backgroundColor: "#363636",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})

const componentStyle = StyleSheet.create({
    text : {
        color: "#A1B5FE"
    }
})

export default List;