import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Menu = ({ createProject, deleteOpen, getAllBoards }) => {
    return (
        <View>
            <TouchableOpacity style={style.menuItem} onPress={createProject}>
                <Text style={style.menuText}>Create</Text>
                <FontAwesome name={"plus"} size={18} color={"#636363"} />
            </TouchableOpacity>
            <TouchableOpacity style={style.menuItem}>
                <Text style={style.menuText}>Update</Text>
                <FontAwesome name={"pencil"} size={18} color={"#636363"} />
            </TouchableOpacity>
            <TouchableOpacity style={style.menuItem} onPress={deleteOpen}>
                <Text style={style.menuText}>Delete</Text>
                <FontAwesome name={"trash"} size={18} color={"#636363"} />
            </TouchableOpacity>
            <TouchableOpacity style={style.menuItem} onPress={getAllBoards}>
                <Text style={style.menuText}>All boards</Text>
                <FontAwesome name={"list"} size={18} color={"#636363"} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F7FB",
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 5,
        borderRadius: 5,
    },
    menuText: {
        marginRight: 10,
        fontWeight: "bold",
        color: "#636363"
    },
});

export default Menu;
