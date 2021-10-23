import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Item } from '../../components/Item';
import { FAB } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { selectComida } from '../../store/actions/comida.actions'

export const FoodScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const comidas = useSelector(state => state.comidas.list)

    const renderItem = ({ item }) => <Item item={item} onSelected={handleSelectedItem} />

    const handleSelectedItem = (item) => {
        dispatch(selectComida(item.id));
        navigation.navigate('Pochoclo', {
            name: item.name,
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={comidas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatlist}
            />
            <FAB
                icon={<Ionicons name="cart" size={24} color="white" />}
                placement="right"
                color="#e33e38"
                style={{ marginBottom: 100 }}
                onPress={() => navigation.navigate('Cart')}
            />

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191e',
        alignItems: 'center',
    },
    flatlist: {
        // backgroundColor: 'white',
    },
});
