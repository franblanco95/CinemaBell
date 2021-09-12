import React from 'react';
import { StyleSheet, View, ScrollView, Image, Button, FlatList, Text } from 'react-native';
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

    const renderItem = ({ item }) => <Item comida={item} />

    return (
        <ScrollView>

            <View style={styles.container}>

                <View>
                    <Image
                        // style={styles.imagen}
                        resizeMode='cover'
                        source={comidas[0].img}
                    />
                    <Button title="Agregar al Carrito" onPress={handlerAddItemCart} />
                </View>

                <FlatList
                    data={comidas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <FAB
                    icon={<Ionicons name="cart" size={24} color="white" />}
                    placement="right"
                    color="green"
                    onPress={() => navigation.navigate('Cart')}
                />

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'black',
        height: 650,
    },
});
