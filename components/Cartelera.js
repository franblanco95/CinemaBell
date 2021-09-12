import React from 'react'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View, TouchableOpacity } from 'react-native'


export const Cartelera = ({ pelicula, navigation }) => {

    return (
        <View style={{ backgroundColor: 'black', padding: 10 }}>
            <ScrollView horizontal>
                <View style={styles.peliculacontainer}>

                    {pelicula?.map(pelicula => {
                        return (
                            <TouchableOpacity key={pelicula.id} onPress={() => navigation.navigate('PeliculaScreen', { id: pelicula.id })}>
                                <View style={styles.pelicula}>
                                    <Image
                                        style={styles.imagen}
                                        resizeMode='cover'
                                        source={pelicula.img}
                                        PlaceholderContent={< ActivityIndicator color="#fff" />}
                                    />
                                    <Text style={styles.titulo}>{pelicula.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView >
        </View >
    )

}

const styles = StyleSheet.create({
    peliculacontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    pelicula: {
        marginRight: 5,
        display: 'flex',
        alignItems: 'center',
        width: 150,
    },
    titulo: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    imagen: {
        width: 125,
        height: 200,
        marginVertical: 7,
    }

})

