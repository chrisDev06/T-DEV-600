import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Card from "./Card";


let titleList = "List"

const List = () => {

    const [listCard, setListCard]= useState([])

    const createCard = () => {
        setListCard([...listCard, {}]);
      }

    const deleteCard = (index) => {
        setListCard(listList.filter((project, i) => i !== index));
      }

    const displayCard = ()=>{
        return(
            <View>
            { listCard.map((card, index)=>(
                <Card titleCard={"fkdsvhfjfekndgnfhg,fdgbsvbdnfh,g;jcgnbxfljh"} key={index}/>
            ))}
            </View>
        )
    }
  return (
    <View style= {styles.ListPage}>
        <View style= {styles.ListHeader}>
            <Text style = {componentStyle.text}>{titleList}</Text>
            <TouchableOpacity onPress={deleteCard}>
                <Text style = {componentStyle.text}>update</Text>
            </TouchableOpacity> 
            <TouchableOpacity >
                <Text style = {componentStyle.text}>delete</Text>
            </TouchableOpacity>           
        </View>
        <View style = {styles.ListCard}>
           {displayCard(listCard)}
        </View>
        <View style= {styles.ListFooter}>
            <TouchableOpacity onPress={createCard}>
            <Text style = {componentStyle.text}>+ Add a card</Text> 
            </TouchableOpacity>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    ListPage : {
        backgroundColor: "#414141",
        maxWidth: "40%",
        maxHeight: 300,
        borderRadius: 20,
        margin: 20,
    },
    ListHeader: {
        backgroundColor: "#363636",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ListCard: {
        height: "65%",
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