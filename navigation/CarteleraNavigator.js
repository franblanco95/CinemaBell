import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarteleraScreen } from '../screens/CarteleraScreen/CarteleraScreen';
import { PeliculaScreen } from '../screens/PeliculaScreen/PeliculaScreen';

const Stack = createNativeStackNavigator();

const CarteleraStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'rgb(20, 10, 81)' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'red',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}

    >

        <Stack.Screen name="Cartelera" component={CarteleraScreen} />

        <Stack.Screen name="Pelicula" component={PeliculaScreen} />

    </Stack.Navigator>

);

export default CarteleraStackNavigator;