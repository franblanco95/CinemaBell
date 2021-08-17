import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const ListItem = ({ data, handleModalOpen }) => {

    return (
        <View style={styles.item}>
            <Text>{data.item.value}</Text>
            <TouchableOpacity onPress={() => handleModalOpen(data.item.id)}>
                <Text style={styles.button}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,

    },

    item: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginVertical: 5,
        borderRadius: 5,
    }

});