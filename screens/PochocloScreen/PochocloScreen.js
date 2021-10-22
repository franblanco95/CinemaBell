import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.actions'


export const PochocloScreen = ({ route }) => {

    const [counter, setCounter] = useState(1);

    const [modalVisible, setModalVisible] = useState(false);

    const comida = useSelector(state => state.comidas.list.find((comida) => comida.id === route.params.id));

    const dispatch = useDispatch();

    const handlerAddItemCart = () => {
        setModalVisible(true)
        dispatch(addItem(comida, counter));
    }

    const sumar = () => {
        if (counter < comida.stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image
                        source={comida.img}
                        resizeMode='cover'
                    />
                    <Text style={styles.name}>{comida.name} </Text>

                    <Text style={styles.price}>$ {comida.price}</Text>

                    <View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

                            <TouchableOpacity
                                style={styles.counter}
                                onPress={restar}>
                                <Text style={styles.text}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantity}>{counter}</Text>

                            <TouchableOpacity
                                style={styles.counter}
                                onPress={sumar}>
                                <Text style={styles.text}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>El item '' se agrego al carrito</Text>
                                <Pressable
                                    style={[styles.buttonModal, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cerrar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlerAddItemCart}
                    >
                        <Text style={styles.text}>Agregar al Carrito</Text>

                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191e',
        alignItems: 'center',
    },
    main: {
        marginTop: 50,
        paddingHorizontal: 50,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3441',
        borderRadius: 5,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    price: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 15,
        color: 'white',
        fontSize: 17,
    },
    counter: {
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#e33e38',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 25,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: '#e33e38',
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        borderRadius: 20,
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
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
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
