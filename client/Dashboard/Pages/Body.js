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
            <List titleList={"Liste"+ index} key={index}/>
        ))}
        </View>
    )
  }
  
  return (
    <View style= {style.BodyPage}>
      <View style={style.container}>
        {isNavOpen && <DashNav createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
          <ScrollView style={style.listContainer}>
            {selectList(listList)}
          </ScrollView>
          <Pressable onPress={createList}>
            <Text style= {style.createListButton}>+</Text>
          </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  BodyPage: {
    width: "100%",
  },
  container: {
    flexDirection: 'row',
    justifyContent: "start",
    alignItems: "start",
  },
  listContainer: {
    display: "flex",
    flexDirection: 'row',
    marginBottom: 10,
  },
  createListButton: {
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#7B8BC7",
    fontSize: 20,
    borderRadius: 20
  }
});

export default Body;