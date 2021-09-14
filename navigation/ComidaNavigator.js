import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodScreen } from '../screens/FoodScreen/FoodScreen';
import { CartScreen } from '../screens/CartScreen/CartScreen';

const Stack = createNativeStackNavigator();

const ComidaStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'blue' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'red',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}

    >

        <Stack.Screen name="Comida" component={FoodScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

    </Stack.Navigator>

);

export default ComidaStackNavigator;