import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const CartItem = ({ item, onDelete }) => {

    return (
        <View style={styles.container}>

            <Image
                source={item.img}
                resizeMode='cover'
            />

            <View>
                <Text style={styles.header}>{item.name}</Text>
                <Text style={styles.subheader}>Cantidad: {item.quantity}</Text>
            </View>
            <Text style={styles.header}>$ {item.price}</Text>


            <TouchableOpacity
                style={styles.detail}
                onPress={() => onDelete(item.id)}>
                <Ionicons name="trash" size={24} color="#e33e38" />
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f3441',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginBottom: 10,

    },
    header: {
        fontSize: 18,
        color: 'white',
    },
    subheader: {
        color: 'lightgray',
    },
    detail: {
        marginRight: 20,
    },
    text: {
        fontSize: 16,
    },

})