import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Dimensions, ScrollView, Text, Image, ActivityIndicator, StyleSheet, View } from 'react-native'
// import { Item } from './Item'

export const Cartelera = ({ pelicula }) => {

    // const { width } = Dimensions.get('window').width;
    // const widthScreen = Dimensions.get('window').width;

    // const renderItem = ({ item }) => {
    //     <Image
    //         source={{ uri: item }}
    //         PlaceholderContent={< ActivityIndicator color="#fff" />}
    //     />
    // }

    // <Item pelicula={data} />


    return (
        <View style={{ backgroundColor: 'black', padding: 10 }}>
            <Text style={styles.titulo}>Cartelera</Text>
            <ScrollView>
                <View style={styles.peliculacontainer}>

                    {pelicula.map(pelicula => {
                        return (
                            <View style={styles.pelicula} key={pelicula.id}>
                                <Text style={styles.titulo}>{pelicula.name}</Text>
                                <Image
                                    style={styles.imagen}
                                    resizeMode='contain'
                                    source={pelicula.img}
                                    // source={require("../assets/lugarsilencio.jpg")}
                                    PlaceholderContent={< ActivityIndicator color="#fff" />}
                                />
                            </View>
                        )
                    })}
                </View>

                {/* <Carousel
                layout={'default'}
                data={pelicula}
                sliderWidth={widthScreen}
                ItemWidth={widthScreen}
                ItemHeight={250}
                renderItem={renderItem}
            // windowSize={1}
            // useScrollView={true}
            // keyExtractor={(peli) => peli.id}
            // scrollInterpolator={scrollInterpolator}
            // slideInterpolatedStyle={animatedStyles}
            /> */}

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

