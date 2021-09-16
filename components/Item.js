import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({ comida }) => {

    return (

        <TouchableOpacity style={styles.container}>
            <Image
                source={comida.img}
                resizeMode='cover'
                style={styles.imagen}
            />
            <Text style={styles.text}>{comida.name}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.2)',
        borderRadius: 4,
        width: 150,
        paddingBottom: 10,
        margin: 20,
    },
    imagen: {
        width: 100,
        height: 175,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
