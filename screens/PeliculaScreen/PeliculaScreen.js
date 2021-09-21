import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, Image, ActivityIndicator } from 'react-native';

export const PeliculaScreen = ({ route }) => {

    const pelicula = useSelector(state => state.peliculas.list.find((pelicula) => pelicula.id === route.params.id));

    return (
        <ScrollView>

            <View style={styles.container}>
                <Image
                    style={styles.imagen}
                    resizeMode='cover'
                    source={pelicula.img}
                    PlaceholderContent={< ActivityIndicator color="#fff" />}
                />

                <Text style={styles.text}>Id: {route.params.id}</Text>
                <Text style={styles.text}>Nombre: {pelicula.name}</Text>
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
    imagen: {
        width: 155,
        height: 275,
        marginRight: 15,
    },
    text: {
        color: 'white',
    }
});
