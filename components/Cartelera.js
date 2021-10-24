import React from 'react'
import * as Linking from 'expo-linking'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import { selectPelicula } from '../store/actions/pelicula.actions'

export const Cartelera = ({ pelicula, navigation }) => {

    const dispatch = useDispatch();

    const handleSelectedFilm = (pelicula) => {
        dispatch(selectPelicula(pelicula.id));
        navigation.navigate('Pelicula', {
            name: pelicula.name
        })
    }

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.carteleraTitle}>Cartelera</Text>
            {pelicula?.map(pelicula => {
                return (
                    <View key={pelicula.id} style={styles.peliculaContainer}>

                        <TouchableOpacity onPress={() => handleSelectedFilm(pelicula)}>
                            <Image
                                style={styles.peliculaImagen}
                                resizeMode='cover'
                                source={pelicula.img}
                                PlaceholderContent={< ActivityIndicator color="#fff" />}
                            />
                        </TouchableOpacity>

                        <View style={styles.info}>

                            <View>
                                <Text style={styles.peliculaTitulo}>{pelicula.name}</Text>
                                <Text style={styles.info}>{pelicula.horario}</Text>
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.peliculaBold}>Idioma: </Text>
                                    <Text style={styles.info}>{pelicula.language}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.peliculaBold}>Genero: </Text>
                                    <Text style={styles.info}>{pelicula.genero}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.peliculaBold}>Duración: </Text>
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
        backgroundColor: '#16191e',
        paddingHorizontal: 20,
        marginBottom: 85,
        width: Dimensions.get("window").width,
    },
    peliculaContainer: {
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#2f3441',
        borderRadius: 5,
        padding: 10,
    },
    peliculaImagen: {
        width: 115,
        height: 175,
        marginRight: 15,
    },
    peliculaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(135, 206, 250)',
    },
    peliculaBold: {
        color: 'white',
        fontWeight: 'bold',
    },
    info: {
        color: 'white',
        justifyContent: 'space-around',
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
    },
    carteleraTitle: {
        fontSize: 20,
        color: 'white',
        marginVertical: 15,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#2f3441',
        borderRadius: 5,

    },


})