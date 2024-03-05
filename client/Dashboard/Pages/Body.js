import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DashNav from '../Component/DashNav';
import List from "./List"

const Body = ({ isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen, openNav }) => {
  return (
    <ScrollView style={style.BodyPage}>
      <View style={style.container}>
        {isNavOpen && <DashNav openNav={openNav} createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen} />}
        <View style={style.listContainer}>
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
          <List style={style.listContainer} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
});

export default Body;