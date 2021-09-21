import React from 'react'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import * as Linking from 'expo-linking'

export const FuturosEstrenos = ({ pelicula, navigation }) => {

    return (
        <View style={{ backgroundColor: 'rgb(21, 21, 21)', padding: 10 }}>
            <ScrollView>
                <View style={styles.peliculacontainer}>

                    {pelicula?.map(pelicula => {
                        return (
                            <View key={pelicula.id} style={styles.pelicula}>
                                <TouchableOpacity onPress={() => navigation.navigate('Pelicula', { id: pelicula.id })}>
                                    <Image
                                        style={styles.imagen}
                                        resizeMode='cover'
                                        source={pelicula.img}
                                        PlaceholderContent={< ActivityIndicator color="#fff" />}
                                    />
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.titulo}>{pelicula.name}</Text>
                                    <Text style={styles.info}>{pelicula.horario}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Idioma: </Text>
                                        <Text style={styles.info}>{pelicula.idioma}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Genero: </Text>
                                        <Text style={styles.info}>{pelicula.genero}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Clasificación: </Text>
                                        <Text style={styles.info}>{pelicula.clasificacion}</Text>
                                    </View>

                                    <Button
                                        title="Ver Trailer"
                                        onPress={() => Linking.openURL(`https://www.youtube.com/${pelicula.trailer}`)}
                                    />
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView >
        </View >
    )

}

const styles = StyleSheet.create({
    peliculacontainer: {
        margin: 5,
        marginBottom: 80,
    },
    pelicula: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',

    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(135, 206, 250)',
    },
    info: {
        color: 'white',
    },
    info2: {
        color: 'white',
    },
    imagen: {
        width: 115,
        height: 175,
        marginRight: 15,
    }

})