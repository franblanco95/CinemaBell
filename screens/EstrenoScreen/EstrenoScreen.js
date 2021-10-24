import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, Modal, Alert, Pressable } from 'react-native'
import { useSelector } from 'react-redux';

export const EstrenoScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const estrenoId = useSelector(state => state.estrenos.selectedID);
    const estreno = useSelector(state => state.estrenos.list.find(item => item.id === estrenoId))

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.movie}>
                <Image
                    style={styles.imagen}
                    resizeMode='contain'
                    source={estreno.img}

                />
                <Text style={styles.title}>{estreno.name}</Text>
                <Text style={styles.premiere}>Estreno: {estreno.premiere}</Text>
                <Text style={styles.text}>{estreno.synopsis}</Text>
                <TouchableOpacity
                    style={styles.buttonReserva}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>Reservar Entrada</Text>
                </TouchableOpacity>

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
                                <Text style={styles.modalText}>Entrada reservada con éxito!</Text>
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
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16191e',
        alignItems: 'center',

    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
    },
    text: {
        color: 'white',
        textAlign: 'justify',
        marginVertical: 10,
    },
    premiere: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#16191e',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    imagen: {
        width: 185,
        height: 250,
    },
    movie: {
        alignItems: 'center',
        backgroundColor: '#2f3441',
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 30,
        padding: 20,
        marginBottom: 110,
    },
    buttonReserva: {
        alignItems: "center",
        backgroundColor: '#e33e38',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
    },
    buttonText: {
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

})