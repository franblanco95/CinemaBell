import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Cartelera } from '../../components/Cartelera';
import { peliculas } from '../../utils/peliculas';


export const HomeScreen = ({ navigation, route }) => {

  return (
    <ScrollView>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <Cartelera pelicula={peliculas} />
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
