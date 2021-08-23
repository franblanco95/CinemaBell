import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AddItem } from './components/AddItem';
import { MyCarousel } from './components/Carousel';
import { List } from './components/Lista';
import { ModalItem } from './components/Modal';
import { Drawer } from './components/Drawer';

export default function App() {

  const [textInput, setTextInput] = useState('');
  const [itemList, setItemList] = useState([]);
  const [pelicula, setPelicula] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (t) => setTextInput(t)

  const pelis = [
    {
      id: 1,
      name: "No Respires II",
      location: "Cinema La Plata",
      img: "./assets/norespires.jpg",
      price: 255,
    },

    {
      id: 2,
      name: "Rapido y Furioso",
      location: "Cinema La Plata",
      img: "./assets/lugarsilencio.jpg",
      price: 249,
    }
  ]

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

  // useEffect(async () => {
  //   const response = await fetch("./utils/pelicula.json")
  //   const result = await response.json()
  //   setPelicula(result)
  // }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* No me estaria funcionando */}
      {/* <Drawer/> */}

      <AddItem
        textInput={textInput}
        handleAddPress={handleAddPress}
        handleChangeText={handleChangeText}
      />

      {/* No me estaria funcionando */}
      {/* <MyCarousel pelicula={pelis} /> */}

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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
});
