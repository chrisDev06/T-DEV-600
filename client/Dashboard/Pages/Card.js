import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


let titleCard = "Card"
const Card = () => {
  return (
    <View sttyle= {styles.CardPage}>
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
        borderRadius: 20,
        margin: 20
    },
    CardBody: {
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
        
})

const componentStyle = StyleSheet.create({
    text : {
        color: "#A1B5FE"
    }
})

export default Card;