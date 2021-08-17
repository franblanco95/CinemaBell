import React from 'react'
import { Modal, View, Text, Button, StyleSheet } from 'react-native'

export const ModalItem = ({ modalVisible, itemSelected, removeItem }) => {
    return (
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
    )
}

const styles = StyleSheet.create({

});
