import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavBar = ({ openNav, isNavOpen }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openProfile = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={openNav}>
          <FontAwesome name="list" size={24} color="#BABBBF" />
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={openProfile}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.profileImage}
          />

        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={[styles.modalContainer, styles.modalContent]}>
          <Text>This is a modal.</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default NavBar;
