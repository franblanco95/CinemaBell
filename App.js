import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AddItem } from './components/AddItem';
import { Cartelera } from './components/Carousel';
import { List } from './components/Lista';
import { ModalItem } from './components/Modal';

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
      img: require("./assets/norespires.jpg"),
      price: 255,
    },

    {
      id: 2,
      name: "Un Lugar en Silencio",
      location: "Cinema La Plata",
      img: require("./assets/lugarsilencio.jpg"),
      price: 249,
    },
    {
      id: 3,
      name: "El Bosque Maldito",
      location: "Cinema La Plata",
      img: require("./assets/bosquemaldito.jpg"),
      price: 279,
    },
    {
      id: 4,
      name: "The Prodigy",
      location: "Cinema La Plata",
      img: require("./assets/prodigy.jpg"),
      price: 289,
    },
    {
      id: 5,
      name: "The Conjuring 3",
      location: "Cinema La Plata",
      img: require("./assets/conjuring.jpg"),
      price: 279,
    },
    {
      id: 6,
      name: "Un Lugar en Silencio 3",
      location: "Cinema La Plata2",
      img: require("./assets/lugarsilencio.jpg"),
      price: 289,
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

      <AddItem
        textInput={textInput}
        handleAddPress={handleAddPress}
        handleChangeText={handleChangeText}
      />

      <Cartelera pelicula={pelis} />

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
    backgroundColor: 'red',
  },
});
