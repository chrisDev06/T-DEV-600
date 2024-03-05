import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import MenuCreate from './MenuCreate';
import Menu from './Menu';
import { FontAwesome } from '@expo/vector-icons';

const DashNav = ({ createProject, listProject, deleteProject, isdeleteProject, deleteOpen, isDeleteOpen, openNav }) => {
  const numList = () => {
    return (
      <View style={styles.projectContainer}>
        {listProject.map((project, index) => (
          <View key={index} style={styles.projectStyle}>
            <Text>project {index}</Text>
            {isDeleteOpen && <TouchableOpacity style={styles.boutonTrashStyle} onPress={() => deleteProject(index)}>
              <FontAwesome name={"trash"} size={18} color={"white"} />
            </TouchableOpacity>}
          </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isdeleteProject}
      onRequestClose={() => deleteOpen(false)} // Ferme la modal si l'utilisateur appuie sur le bouton de retour Android
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Your Board</Text>
          <TouchableOpacity onPress={openNav} style={styles.closeButton}>
            <FontAwesome name="times" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.menuContainer}>
            <MenuCreate />
          </View>
          <Menu
            createProject={createProject}
            deleteProject={deleteProject}
            deleteOpen={deleteOpen}
          />
          {listProject ? numList() : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#A1B5FE',
    height: '30%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    backgroundColor: "#7B8BC7",
    height: 35,
    paddingTop: 8,
    paddingLeft: 20,
    color: "#FFFFFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  menuContainer: {
    flexDirection: "row",
  },
  projectContainer: {
    marginTop: 10,
  },
  projectStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boutonTrashStyle: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default DashNav;
