import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


let titleCard = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuioiuytresdfghjklm"
let title
let pressed = false

let tmp = titleCard.split("")
let tmp2 = [];
if(tmp.length > 22){
    let i= 0
    while( i< 22){
        tmp2.push(tmp[i])
        i++
    }
    let y= 0
    while(y< 3){
        tmp2.push(".")
        y++
    }
    
    title = tmp2.join("")
}
else{
    title = titleCard
}

const Card = () => {
  return (
    <View style= {styles.CardPage}>
        <View style= {styles.CardBody}>
            <TouchableOpacity onPress={()=> {
                console.log("tata")
                if(pressed == false){
                    title = titleCard
                    pressed == true
                }
                else if(pressed == true){
                    title = tmp2.join("")
                    pressed = false
                }
                console.log("toto")
             }
            }  
            >
                <Text style = {componentStyle.text}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            >
                <Text style = {componentStyle.button}>...</Text>
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
        padding: 7,
        margin: 7,
    },
        
})

const componentStyle = StyleSheet.create({
    text : {
        color: "black",
        maxWidth: 250,
    },
    button : {
        color: "black",
        position: "relative",
        bottom: 4,
    },
})

export default Card;