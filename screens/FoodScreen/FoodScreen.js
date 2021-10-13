import React from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { Item } from '../../components/Item';
import { comidas } from '../../utils/comidas';
import { FAB } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/actions/cart.actions';


export const FoodScreen = ({ navigation }) => {

    const renderItem = ({ item }) => <Item comida={item} navigation={navigation} />

    const dispatch = useDispatch();

    const handlerAddItemCart = () => {
        dispatch(addItem(comida));
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={comidas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.flatlist}
            />
            <Text style={{ color: 'white' }}> Precio Total</Text>
            <Button title="Agregar al Carrito" onPress={handlerAddItemCart} />

            {/* <FAB
                icon={<Ionicons name="cart" size={24} color="white" />}
                placement="right"
                color="cyan"
                onPress={() => navigation.navigate('Cart')}
            /> */}

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 550,
        backgroundColor: 'black',
    },
    flatlist: {
    },
});
