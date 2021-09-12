import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export const PeliculaScreen = ({ route }) => {

    const pelicula = useSelector(state => state.peliculas.list.find((pelicula) => pelicula.id === route.params.id));

    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={{ color: 'white' }}>Hola Soy PeliculaScreen</Text>
                <Text style={{ color: 'white' }}>{route.params.id}</Text>
                <Text style={{ color: 'white' }}>{pelicula.name}</Text>
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
});
