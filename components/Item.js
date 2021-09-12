import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const Item = ({ comida }) => {

    return (

        <View>
            <Text style={{ color: 'red' }}>{comida.name}</Text>
            <Image
                source={comida.img}
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
