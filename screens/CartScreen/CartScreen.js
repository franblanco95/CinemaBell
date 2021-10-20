import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from '../../components/CartItem'
import { confirmCart, removeItem } from '../../store/actions/cart.actions'

export const CartScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    const handlerDeleteItem = (id) => dispatch(removeItem(id));

    const handlerConfirmCart = () => dispatch(confirmCart(items));

    const renderItem = (data) => (

        <CartItem item={data.item} onDelete={handlerDeleteItem} />
    )
    return (

        <View style={styles.container}>

            {total === 0
                ?
                <View style={styles.emptycontainer}>
                    <Image source={require('../../assets/empty-cart.png')} />
                    <Text style={styles.cartText}> Tu carrito está vacío</Text>
                    <Text style={styles.cartSubtext}> No tienes ningún producto en tu carrito de compra.</Text>
                    <Text style={styles.cartSubtext}> Ve a comprar algo!</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttontext}>Tienda</Text>

                    </TouchableOpacity>
                </View>
                :
                <>
                    <View style={styles.list}>
                        <FlatList
                            data={items}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={styles.footer}>

                        <TouchableOpacity style={styles.confirmButton} onPress={handlerConfirmCart}>
                            <Text style={styles.text}>Confirmar</Text>
                            <Text style={styles.text}>$ {total}</Text>
                        </TouchableOpacity>

                    </View>
                </>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 80,
        padding: 12,
        backgroundColor: '#16191e',
        height: Dimensions.get('window').height,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,

    },
    confirmButton: {
        backgroundColor: '#e33e38',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontSize: 18,
        padding: 8,
    },
    emptycontainer: {
        height: Dimensions.get('window').height - 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    cartSubtext: {
        color: 'gray',
        fontSize: 15,
    },
    button: {
        marginTop: 25,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: '#e33e38',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttontext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },

})