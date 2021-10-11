import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({ comida, navigation }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Pochoclo', { id: comida.id })}>
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
        width: 120,
        height: 130,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
