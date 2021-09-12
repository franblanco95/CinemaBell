import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CarteleraScreen } from '../screens/CarteleraScreen/CarteleraScreen';
import { FoodScreen } from '../screens/FoodScreen/FoodScreen';
import { CinesScreen } from '../screens/CinesScreen/CinesScreen';
import { PeliculaScreen } from '../screens/PeliculaScreen/PeliculaScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartScreen } from '../screens/CartScreen/CartScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CarteleraStackNavigator = () => (

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

        <Stack.Screen name="Cartelera" component={CarteleraScreen} />

        <Stack.Screen name="PeliculaScreen" component={PeliculaScreen} />

    </Stack.Navigator>

);

const ComidaStackNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'white' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'lightblue' : 'red',
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

                <Tab.Screen name="Carteleras"
                    component={CarteleraStackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FeatherIcon name="film" size={30} color="#000" />)
                    }}
                />

                <Tab.Screen name="Comidas"
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
                    component={CinesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (<FeatherIcon name="user" size={30} color="#000" />)
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

