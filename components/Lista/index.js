import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ListItem } from './ListItem'

export const List = ({ itemList, handleModalOpen }) => {

    const renderItem = data => <ListItem data={data} handleModalOpen={handleModalOpen} />

    return (
        <View style={styles.view2}>
            <FlatList
                data={itemList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({

    view2: {
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 0.5,
        backgroundColor: "lightgray",
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 10,
    }
});
