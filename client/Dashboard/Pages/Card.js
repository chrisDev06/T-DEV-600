import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


let titleCard = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuioiuytresdfghjklmAZERTYUIOPQSDFGHJKLMWXCVBNazertyuioiuytresdfghjklm"
let pressed = false

let titleReduce;
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
    
    titleReduce= tmp2.join("")
}
else{
    titleReduce= titleCard
}

const Card = () => {
    const [title, setTitle] = useState(titleReduce)

  return (
    <View style= {styles.CardPage}>
        <View style= {styles.CardBody}>
            <TouchableOpacity onPress={()=> {  
                if(pressed == false){
                    setTitle(titleCard)
                    pressed = true

                }
                else if(pressed == true){
                    setTitle(titleReduce)
                    pressed = false
                }
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
        justifyContent: "center",
        borderRadius: 20,
        margin: 5
    },
    CardBody: {
        maxWidth: 260,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 7,
    },
})

const componentStyle = StyleSheet.create({
    text : {
        color: "black",
        maxWidth: 230,
    },
    button : {
        color: "black",
        position: "relative",
        bottom: 4,
    },
})

export default Card;