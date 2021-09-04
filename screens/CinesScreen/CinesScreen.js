import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export const CinesScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.text}>Soy Film Screen</Text>
            </View>
        </ScrollView>
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