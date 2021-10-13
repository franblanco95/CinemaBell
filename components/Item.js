import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export const Item = ({ comida, navigation }) => {

    const [counter, setCounter] = useState(0)

    return (

        <View style={styles.container} onPress={() => navigation.navigate('Pochoclo', { id: comida.id })}>
            <Image
                source={comida.img}
                resizeMode='cover'
            />
            <View>
                <Text style={styles.text}>{comida.name}</Text>
                <Text style={styles.text}>$ {comida.price}</Text>
            </View>
            <View style={{ alignItems: 'center', marginRight: 25}}>

                <Text style={styles.text}>{counter}</Text>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCounter(counter + 1)}>
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCounter(counter - 1)}>
                        <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'lightblue',
        width: 40,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
    }
});
