import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({ item, onSelected }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>

            <Image
                source={item.img}
                resizeMode='cover'
            />
            <View>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2f3441',
        borderRadius: 4,
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 25,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
