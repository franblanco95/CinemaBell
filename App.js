import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';

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

      <View style={styles.view}>
        <TextInput
          onChangeText={handleChangeText}
          value={textInput}
          style={styles.input}
          placeholder="Escribe aqui" />
        <Button onPress={handleAddPress} title="Agregar" color="green" />
      </View>

      <View style={styles.view2}>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <View style={styles.item}>
              <Text>{data.item.value}</Text>
              <TouchableOpacity onPress={() => handleModalOpen(data.item.id)}>
                <Text style={styles.button}>X</Text>
              </TouchableOpacity>
            </View>
          )} />
      </View>

      <Modal animationType="slide" visible={modalVisible}>
        <View>
          <Text>Eliminar</Text>
        </View>
        <View>
          <Text>Estas Seguro que lo desas borrar?</Text>
        </View>
        <View>
          <Text>{itemSelected.value}</Text>
        </View>
        <View>
          <Button title="Confirmar" onPress={removeItem} />
        </View>
      </Modal>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    marginRight: 20,
  },

  view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  view2: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: "lightgray",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
  },

  button: {
    backgroundColor: "lightblue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,

  },

  item: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
  }

});
