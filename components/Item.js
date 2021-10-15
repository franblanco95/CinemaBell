import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({ comida, navigation }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Pochoclo', { id: comida.id, name: `${comida.name}` })}>

            <Image
                source={comida.img}
                resizeMode='cover'
            />
            <View>
                <Text style={styles.text}>{comida.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(100, 100, 100, 0.2)',
        borderRadius: 4,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
