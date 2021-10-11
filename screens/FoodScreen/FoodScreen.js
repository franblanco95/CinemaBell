import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { Item } from '../../components/Item';
import { comidas } from '../../utils/comidas';
import { FAB } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { addItem } from '../../store/actions/cart.actions';
import { useDispatch } from 'react-redux'

export const FoodScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const handlerAddItemCart = () => {
        dispatch(addItem(comida));
    }

    const renderItem = ({ item }) => <Item comida={item} navigation={navigation} />

    return (
        <View style={styles.container}>

            <View>

                <FlatList
                    data={comidas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.flatlist}
                />

                <Button title="Agregar al Carrito" onPress={handlerAddItemCart} />

                <FAB
                    icon={<Ionicons name="cart" size={24} color="white" />}
                    placement="right"
                    color="green"
                    onPress={() => navigation.navigate('Cart')}
                />

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    flatlist: {
        marginVertical: 20,
        alignItems: 'center',
    },
});
