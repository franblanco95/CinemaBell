import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.header}> {item.name}</Text>
            </View>

            <View style={styles.detail}>

                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="yellow" />
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans',
    },

})