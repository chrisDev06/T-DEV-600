import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DashNav from '../Component/DashNav';

const Body = ({isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen}) => {
  return (
    <View style={style.container}>
      {isNavOpen && <DashNav createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '80%',
    width:"100%",
  },
});

export default Body;