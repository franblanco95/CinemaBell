import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CinesScreen } from '../screens/CinesScreen/CinesScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PeliculaStackNavigator from './PeliculaNavigator';
import LoginStackNavigator from './LoginNavigator';
import ComidaStackNavigator from './ComidaNavigator';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {

    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBarOptions={{
                    // activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}
            >

                <Tab.Screen name="Cartelera"
                    component={PeliculaStackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FeatherIcon name="film" size={30} color="#000" />)
                    }}
                />

                <Tab.Screen name="Comida"
                    component={ComidaStackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="popcorn" size={30} color="#000" />)
                    }}
                />

                <Tab.Screen name="Cines"
                    component={CinesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="chair-rolling" size={30} color="#000" />)
                    }}
                />

                <Tab.Screen name="Perfil"
                    component={LoginStackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (<FeatherIcon name="user" size={30} color="#000" />)
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

