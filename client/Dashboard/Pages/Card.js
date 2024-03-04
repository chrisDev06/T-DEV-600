import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


let titleCard = "Card"
const Card = () => {
  return (
    <View style= {styles.CardPage}>
        <View style= {styles.CardBody}>
            <Text style = {componentStyle.text}>{titleCard}</Text>
            <TouchableOpacity
                onpressed = {console.log("affichage menu action pour une card")}
            >
                <Text style = {componentStyle.text}>...</Text>
            </TouchableOpacity>           
        </View>
    </View>
  )}

const styles = StyleSheet.create({
    CardPage : {
        backgroundColor: "#ffffff",
        width: 265,
        height: 50,
        justifyContent: "center",
        borderRadius: 20,
        margin: 5
    },
    CardBody: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        margin: 5,
    },
        
})

const componentStyle = StyleSheet.create({
    text : {
        color: "black"
    }
})

export default Card;