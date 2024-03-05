import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Pressable, Text } from 'react-native';
import DashNav from '../Component/DashNav';
import List from "./List"

const Body = ({isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen}) => {
  
  const [listCard,setListCard]=useState([{},{}])

  const [listList, setListList]= useState([])

  const createList = () => {
      setListList([...listList, {}]);
    }
  const selectList = ()=>{
    return(
        <View>
        { listList.map((card, index)=>(
            <List titleCard={"Liste"+ index} key={index}/>
        ))}
        </View>
    )
  }
  
  return (
    <View>
    <ScrollView style= {style.BodyPage}>
      <View style={style.container}>
        {isNavOpen && <DashNav createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
          <View style={style.listContainer}>
           {selectList(listList)}
          </View>
      </View>
    </ScrollView>
    <Pressable onPress={createList}>
      <Text style= {style.createListButton}>+</Text>
    </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
 container: {
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  createListButton: {
    padding: 10,
    backgroundColor: "#7B8BC7",
    fontSize: 20,
    borderRadius: 20
  }
});

export default Body;