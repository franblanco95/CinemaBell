import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const Item = ({ pelicula }) => {
    return (
        <View>
            <Text>{pelicula.name}</Text>

            <Image
                source={pelicula.img}
                resizeMode='cover'
                style={styles.imagen}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: 150,
        height: 250,
    }
});
