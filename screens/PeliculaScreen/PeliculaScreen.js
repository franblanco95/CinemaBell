import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export const PeliculaScreen = ({ route }) => {

    const pelicula = useSelector(state => state.peliculas.list.find((pelicula) => pelicula.id === route.params.id));

    return (
        <ScrollView>

            <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.imagen}
                        resizeMode='cover'
                        source={pelicula.img}
                        PlaceholderContent={< ActivityIndicator color="#fff" />}
                    />
                </View>

                <Text style={styles.title}>{pelicula.name}</Text>
                <View style={{ AlignItems: 'flex-end' }}>

                    <AirbnbRating
                        defaultRating={pelicula.star}
                        size={20}
                        showRating={false}
                        isDisabled={true}
                        starContainerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start', margin: 10 }}
                    />

                </View>
                <View style={styles.info}>

                    <View style={styles.box}>

                        <Text style={styles.text}>{pelicula.genero}</Text>
                    </View>
                    <View style={styles.box}>

                        <Text style={styles.text}>{pelicula.language}</Text>
                    </View>
                    <View style={styles.box}>

                        <Text style={styles.text}>{pelicula.duracion}</Text>
                    </View>
                </View>

                <Text style={styles.subtitle}>Synopsis</Text>
                <Text style={styles.text}>{pelicula.synopsis}</Text>


                <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => console.log('prueba')}
                >
                    <Text style={styles.touchableText}>Comprar Ticket | $ {pelicula.price}</Text>
                </TouchableOpacity>


            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: 'black',
        height: 860,
    },
    imagen: {
        width: 230,
        height: 320,
        borderRadius: 15,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 30,
        backgroundColor: 'rgb(53, 58, 74)',
        borderRadius: 13,
    },
    text: {
        color: 'white',
        fontSize: 15,

    },
    touchableStyle: {
        alignItems: "center",
        backgroundColor: 'rgb(79, 77, 155)',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
    },
    touchableText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});
