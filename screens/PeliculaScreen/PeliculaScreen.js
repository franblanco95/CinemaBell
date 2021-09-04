import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export const PeliculaScreen = () => {

    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={{ color: 'white' }}>Hola Soy PeliculaScreen</Text>


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
