import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export const PeliculaScreen = ({ route }) => {

    const pelicula = useSelector(state => state.peliculas.list.find((pelicula) => pelicula.id === route.params.id));

    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.text}>Hola Soy PeliculaScreen</Text>
                <Text style={styles.text}>Id: {route.params.id}</Text>
                <Text style={styles.text}>Nombre: {pelicula.name}</Text>
                <Text style={styles.text}>Cine: {pelicula.location}</Text>
                <Text style={styles.text}>Precio: $ {pelicula.price}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'black',
        height: 800,
    },
    text: {
        color: 'white',
    }
});
