import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Card from "./Card";


let titleList = "List"
const List = () => {
  return (
    <View style= {styles.ListPage}>
        <View style= {styles.ListHeader}>
            <Text style = {componentStyle.text}>{titleList}</Text>
            <TouchableOpacity>
                <Text style = {componentStyle.text}>...</Text>
            </TouchableOpacity>           
        </View>
        <View style = {styles.ListCard}>
            <Card titleCard={"azerzteghryjtukyilukyutjyhrtgdrsfqdzEQFSRGD"}/>
            <Card titleCard={"azerzteghryjtukyilukyutjyhrtgdrsfqdzEQFSRGD"}/>
        </View>
        <View style= {styles.ListFooter}>
            <TouchableOpacity 
                onPress={ 
                    ()=>{
                        return <Card/>
                    }
                }
            >
            <Text  style = {componentStyle.text} >+ Add a card</Text> 
            </TouchableOpacity>
        </View>
    </View>
  );
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
        height: "60%",
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