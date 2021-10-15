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
                backgroundColor: Platform.OS === 'android' ? '#16191e' : 'rgb(10, 25, 49)',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'white',
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