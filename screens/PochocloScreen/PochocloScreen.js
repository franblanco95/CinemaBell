import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.actions'


export const PochocloScreen = ({ route }) => {

    console.log(route)

    const [counter, setCounter] = useState(0)

    const comida = useSelector(state => state.comidas.list.find((comida) => comida.id === route.params.id));

    const dispatch = useDispatch();

    const handlerAddItemCart = () => {
        dispatch(addItem(comida));
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
                                onPress={() => setCounter(counter - 1)}>
                                <Text style={styles.text}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantity}>{counter}</Text>

                            <TouchableOpacity
                                style={styles.counter}
                                onPress={() => setCounter(counter + 1)}>
                                <Text style={styles.text}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


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
    }

})
