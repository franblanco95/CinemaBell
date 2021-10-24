import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux';

export const EstrenoScreen = () => {

    const estrenoId = useSelector(state => state.estrenos.selectedID);
    const estreno = useSelector(state => state.estrenos.list.find(item => item.id === estrenoId))

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {estreno.name}</Text>
            <Image
                style={styles.imagen}
                resizeMode='cover'
                source={estreno.img}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
    imagen: {
        width: 125,
        height: 200,
        marginHorizontal: 13,
    }

})