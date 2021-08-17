import React from 'react'
import { Modal, View, Text, Button, StyleSheet } from 'react-native'

export const ModalItem = ({ modalVisible, itemSelected, removeItem, closeModal }) => {

    return (
        <Modal animationType="slide" visible={modalVisible} transparent>

            <View style={styles.modalContainer}>

                <View style={[styles.modalContent, styles.shadow]}>
                    <View>
                        <Text style={styles.modalMessage}>Estas seguro que lo desas borrar?</Text>
                    </View>
                    <View>
                        <Text style={styles.modalTitle}>{itemSelected.value}</Text>
                    </View>
                    <View>
                        <Button title="Confirmar" onPress={removeItem} />
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="Cancelar" onPress={closeModal} color='gray' />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        padding: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalMessage: {
        fontSize: 18,
    },
    modalTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold',

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modalButton: {
        marginTop: 10,

    }
});
