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
        <View style={styles.container}>
            <View style={styles.main}>
                <Image
                    source={comida.img}
                    resizeMode='cover'
                />
                <Text style={styles.text}>{comida.name} </Text>

                <Text style={styles.text}>$ {comida.price}</Text>

                <View style={{ alignItems: 'center', marginRight: 25 }}>

                    <Text style={styles.text}>{counter}</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setCounter(counter + 1)}>
                            <Text style={styles.text}>+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setCounter(counter - 1)}>
                            <Text style={styles.text}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={handlerAddItemCart}
                >
                    <Text style={styles.text}>Agregar al Carrito</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'lightblue',
        width: 40,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
    }

})
