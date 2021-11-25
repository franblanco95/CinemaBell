import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodScreen } from '../screens/FoodScreen/FoodScreen';
import { CartScreen } from '../screens/CartScreen/CartScreen';
import { PochocloScreen } from '../screens/PochocloScreen/PochocloScreen';

const Stack = createNativeStackNavigator();

const ComidaStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}

    >

        <Stack.Screen name="Comida" component={FoodScreen} />
        <Stack.Screen
            name="Pochoclo"
            component={PochocloScreen}
            options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />

    </Stack.Navigator>

);

export default ComidaStackNavigator;