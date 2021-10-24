import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarteleraScreen } from '../screens/CarteleraScreen/CarteleraScreen';
import { PeliculaScreen } from '../screens/PeliculaScreen/PeliculaScreen';
import { EstrenoScreen } from '../screens/EstrenoScreen/EstrenoScreen';

const Stack = createNativeStackNavigator();

const CarteleraStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '#16191e' : 'rgb(10, 25, 49)',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}

    >

        <Stack.Screen
            name="CinemaBell"
            component={CarteleraScreen}
        />

        <Stack.Screen
            name="Pelicula"
            component={PeliculaScreen}
            options={({ route }) => ({ title: route.params.name })}
        />

        <Stack.Screen
            name="Futuros Estrenos"
            component={EstrenoScreen}

        />

    </Stack.Navigator>

);

export default CarteleraStackNavigator;