import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Soy Profile Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: 'black',
        height: 800,
    },
    text: {
        color: 'white',
    }

})
