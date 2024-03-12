<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DashNav from '../Component/DashNav';
import List from "./List"

const Body = ({ isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen, openNav }) => {
=======
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
        <View style= {style.selectList}>
        { listList.map((card, index)=>(
            <List titleList={"Liste"+ index} key={index}/>
        ))}
        </View>
    )
  }
  
>>>>>>> main
  return (
    <ScrollView style={style.BodyPage}>
      <View style={style.container}>
<<<<<<< HEAD
        {isNavOpen && <DashNav openNav={openNav} createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen} />}
        <View style={style.listContainer}>
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
        </View>
=======
        {isNavOpen && <DashNav createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
          <ScrollView style={style.listContainer}>
            {selectList(listList)}
          </ScrollView>
          <Pressable onPress={createList}>
            <Text style= {style.createListButton}>+</Text>
          </Pressable>
>>>>>>> main
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
<<<<<<< HEAD
  container: {
=======
  BodyPage: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
>>>>>>> main
    flexDirection: 'row',
    height: "100%"
  },
  listContainer: {
    display: "flex",
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: "wrap"
  },
  createListButton: {
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#7B8BC7",
    fontSize: 20,
    borderRadius: 20
  },
  selectList: {
    display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
  }
});

export default Body;