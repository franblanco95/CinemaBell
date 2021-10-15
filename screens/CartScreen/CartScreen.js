import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from '../../components/CartItem'
import { confirmCart, removeItem } from '../../store/actions/cart.actions'

export const CartScreen = () => {

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
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>

                <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
                    <Text style={styles.text}>Confirmar</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 550,
        padding: 12,
        backgroundColor: '#16191e'
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
    },

})