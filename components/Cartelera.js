import React from 'react'
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet, View } from 'react-native'

export const Cartelera = ({ pelicula }) => {

    return (
        <View style={{ backgroundColor: 'black', padding: 10 }}>
            <Text style={{ fontSize: 24, color: 'white' }}>Cartelera</Text>
            <ScrollView horizontal>
                <View style={styles.peliculacontainer}>

                    {pelicula?.map(pelicula => {
                        return (
                            <View style={styles.pelicula} key={pelicula.id}>
                                <Image
                                    style={styles.imagen}
                                    resizeMode='cover'
                                    source={pelicula.img}
                                    PlaceholderContent={< ActivityIndicator color="#fff" />}
                                />
                                <Text style={styles.titulo}>{pelicula.name}</Text>
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
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    pelicula: {
        marginRight: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 150,
    },
    titulo: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    imagen: {
        width: 125,
        height: 200,
        marginTop: 5,
    }

})

