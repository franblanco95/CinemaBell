import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Dimensions, Button } from 'react-native';
import { Cartelera } from '../../components/Cartelera';
import { peliculas } from '../../utils/peliculas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Height } = Dimensions.get("window").height;

export const CarteleraScreen = ({ navigation }) => {


  return (
    <ScrollView>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <Cartelera pelicula={peliculas} />
      </View>

      <View>
        <Button title="Probando" onPress={() => navigation.navigate('PeliculaScreen')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'black',
    height: Height,
  },
});
