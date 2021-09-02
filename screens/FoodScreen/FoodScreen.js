import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AddItem } from '../../components/AddItem';
import { List } from '../../components/Lista';
import { ModalItem } from '../../components/Modal';


export const FoodScreen = () => {

    const [textInput, setTextInput] = useState('');
    const [itemList, setItemList] = useState([]);

    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleChangeText = (t) => setTextInput(t)

    const handleAddPress = () => {
        setItemList(
            [...itemList, {
                id: Math.random().toString(),
                value: textInput,
            },]
        );
        setTextInput('');
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const removeItem = () => {
        setItemList(itemList.filter(item => item.id !== itemSelected.id));
        setItemSelected({});
        setModalVisible(false);
    }

    const handleModalOpen = (id) => {
        setItemSelected(itemList.find(item => item.id === id));
        setModalVisible(true);
    }
    return (
        <ScrollView>

            <View style={styles.container}>

                <AddItem
                    textInput={textInput}
                    handleAddPress={handleAddPress}
                    handleChangeText={handleChangeText}
                />

                <List
                    itemList={itemList}
                    handleModalOpen={handleModalOpen}
                />

                <ModalItem
                    modalVisible={modalVisible}
                    itemSelected={itemSelected}
                    removeItem={removeItem}
                    closeModal={closeModal}
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'black',
        height: 800,
    },
});
