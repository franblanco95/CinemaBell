import React from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { Item } from '../../components/Item';
import { FAB } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export const FoodScreen = ({ navigation }) => {

    const renderItem = ({ item }) => <Item comida={item} navigation={navigation} />

    const comidas = useSelector(state => state.comidas.list)

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

            <FAB
                icon={<Ionicons name="cart" size={24} color="white" />}
                placement="right"
                color="cyan"
                onPress={() => navigation.navigate('Cart')}
            />

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
