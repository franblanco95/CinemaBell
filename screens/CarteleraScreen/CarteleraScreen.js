import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Cartelera } from '../../components/Cartelera';
import { useSelector } from 'react-redux'

const { Height } = Dimensions.get("window").height;

export const CarteleraScreen = ({ navigation }) => {

  const peliculas = useSelector(state => state.peliculas.list);

  return (
    <ScrollView style={styles.container}>
      <View>

        <StatusBar style="auto" />

        <Cartelera pelicula={peliculas} navigation={navigation} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: Height,
  },
});
