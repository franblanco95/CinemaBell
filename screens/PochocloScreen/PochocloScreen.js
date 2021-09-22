import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';

export const PochocloScreen = ({ route }) => {

    const comida = useSelector(state => state.comidas.list.find((comida) => comida.id === route.params.id));

    return (
        <View>
            <Text> Hola soy Pochoclo Scren - {comida.name} </Text>
        </View>
    )
}
