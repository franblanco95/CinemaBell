import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import StarRatings from 'react-star-ratings';

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
                {/* <StarRatings
                        rating={pelicula.star}
                        numberOfStars={5}
                        starRatedColor="rgb(218,165,32)"
                        starDimension="25px"
                        starSpacing="5px"
                    /> */}


                <View style={styles.info}>

                    <View style={styles.box}>
                        <Text style={styles.text}>Género</Text>
                        <Text style={styles.text}>{pelicula.genero}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Idioma</Text>
                        <Text style={styles.text}>{pelicula.language}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Duración</Text>
                        <Text style={styles.text}>{pelicula.duracion}</Text>
                    </View>
                </View>

                <Text style={styles.subtitle}>Synopsis</Text>
                <Text style={styles.text}>{pelicula.synopsis}</Text>


                <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => console.log('prueba')}
                >
                    <Text style={styles.text}>Comprar Ticket | $ {pelicula.price}</Text>
                </TouchableOpacity>

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 15,
        backgroundColor: 'black',
        height: 800,
    },
    imagen: {
        width: 230,
        height: 320,
        borderRadius: 15,
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginVertical: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 19,
        marginVertical: 10,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 50,
        backgroundColor: "gray",
        borderRadius: 15,

    },
    text: {
        color: 'white',
        fontSize: 15,

    },
    touchableStyle: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        width: 250,
    },
});
