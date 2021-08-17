import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export const AddItem = ({ textInput, handleAddPress, handleChangeText }) => {
    return (
        <View style={styles.view}>
            <TextInput
                onChangeText={handleChangeText}
                value={textInput}
                style={styles.input}
                placeholder="Escribe aqui" />
            <Button onPress={handleAddPress} title="Agregar" color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 200,
        marginRight: 20,
    },
});
