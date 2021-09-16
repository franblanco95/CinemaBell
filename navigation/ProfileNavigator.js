import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';


const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Login"
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

        <Stack.Screen name="Perfil" component={ProfileScreen} />


    </Stack.Navigator>

);

export default ProfileStackNavigator;