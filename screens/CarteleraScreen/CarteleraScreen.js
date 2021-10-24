import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Cartelera } from '../../components/Cartelera';
import { useSelector } from 'react-redux'
import { FuturosEstrenos } from '../../components/FuturosEstrenos';

export const CarteleraScreen = ({ navigation }) => {

  const peliculas = useSelector(state => state.peliculas.list);
  const estrenos = useSelector(state => state.estrenos.list);

  return (
    <ScrollView style={styles.container}>
      <View>

        <FuturosEstrenos estrenos={estrenos} navigation={navigation} />
        <Cartelera pelicula={peliculas} navigation={navigation} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: Dimensions.get("window").height,
  },
});
