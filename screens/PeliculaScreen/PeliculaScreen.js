import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView, Text, Image, ActivityIndicator, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export const PeliculaScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const peliculaId = useSelector(state => state.peliculas.selectedID)
    const pelicula = useSelector(state => state.peliculas.list.find(item => item.id === peliculaId))

    return (
        <ScrollView style={{ flex: 1 }}>

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

                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Entrada comprada con éxito!</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cerrar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </View>


                <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => setModalVisible(!modalVisible)}
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
        backgroundColor: '#16191e',
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
        backgroundColor: '#e33e38',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 100,
    },
    touchableText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#e33e38",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
