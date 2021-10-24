import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CinesScreen } from '../screens/CinesScreen/CinesScreen';

const Stack = createNativeStackNavigator();

const CinesStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Login"
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

        <Stack.Screen name="Cine" component={CinesScreen} />


    </Stack.Navigator>

);

export default CinesStackNavigator;