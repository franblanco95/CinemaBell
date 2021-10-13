import React from 'react'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View, TouchableOpacity } from 'react-native'
import * as Linking from 'expo-linking'

export const FuturosEstrenos = ({ pelicula, navigation }) => {

    return (

        <ScrollView style={styles.container}>
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
                        <View style={{ width: '60%', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={styles.titulo}>{pelicula.name}</Text>
                                <Text style={styles.info}>{pelicula.horario}</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.subtitulo}>Idioma: </Text>
                                    <Text style={styles.info}>{pelicula.language}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.subtitulo}>Genero: </Text>
                                    <Text style={styles.info}>{pelicula.genero}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.subtitulo}>Duración: </Text>
                                    <Text style={styles.info}>{pelicula.duracion}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.trailerButton}
                                onPress={() => Linking.openURL(`https://www.youtube.com/${pelicula.trailer}`)}
                            >
                                <Image
                                    source={require("../assets/playicon2.png")}
                                    style={{ height: 20, width: 20, marginRight: 6 }}
                                />
                                <Text style={styles.trailerText}>Ver Trailer</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                )
            })}

        </ScrollView >
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgb(21, 21, 21)',
        padding: 10,
    },
    pelicula: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(135, 206, 250)',
    },
    subtitulo: {
        color: 'white',
        fontWeight: 'bold',
    },
    info: {
        color: 'white',
    },
    imagen: {
        width: 115,
        height: 175,
        marginRight: 15,
    },
    trailerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 5,
        width: 105,
    },
    trailerText: {
        color: 'white',
    }

})