import React from 'react'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View } from 'react-native'

export const Cartelera = ({ pelicula }) => {

    return (
        <View style={{ backgroundColor: 'black', padding: 10 }}>
            <Text style={{ fontSize: 24, color: 'white' }}>Cartelera</Text>
            <ScrollView>
                <View style={styles.peliculacontainer}>

                    {pelicula?.map(pelicula => {
                        return (
                            <View style={styles.pelicula} key={pelicula.id}>
                                <Text style={styles.titulo}>{pelicula.name}</Text>
                                <Image
                                    style={styles.imagen}
                                    resizeMode='contain'
                                    source={pelicula.img}
                                    PlaceholderContent={< ActivityIndicator color="#fff" />}
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    peliculacontainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    pelicula: {
        backgroundColor: 'gray',
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        width: 180,


    },
    titulo: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',

    },
    imagen: {
        width: '80%',
        height: 150,
    }

})

