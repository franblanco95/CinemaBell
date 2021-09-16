import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

const LoginStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
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

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />

    </Stack.Navigator>

);

export default LoginStackNavigator;