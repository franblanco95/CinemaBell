import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AddItem } from './components/AddItem';
import Drawer from './components/Drawer';
import { List } from './components/Lista';
import { ModalItem } from './components/Modal';

export default function App() {

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
    <View style={styles.container}>
      <StatusBar style="auto" />


      <AddItem
        textInput={textInput}
        handleAddPress={handleAddPress}
        handleChangeText={handleChangeText}
      />

      <List
        itemList={itemList}
        handleModalOpen={handleModalOpen}
      />

      <Drawer />

      <ModalItem
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        removeItem={removeItem}
        closeModal={closeModal}
      />

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
});
