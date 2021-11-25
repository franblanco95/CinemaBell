import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
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