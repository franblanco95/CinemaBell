import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { FoodScreen } from '../screens/FoodScreen/FoodScreen';
import { FilmScreen } from '../screens/FilmScreen/FilmScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (

    <Stack.Navigator
        initialRouteName="Home"
        screenOption={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'red' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'red',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >

        <Stack.Screen
            name="Cinema La Plata"
            component={HomeScreen}
            options={{
                title: "Cine",
                headerStyle: {
                    backgroundColor: 'red'
                }
            }}
        />

        <Stack.Screen
            name="Film"
            component={FilmScreen}
            option={({ route }) => ({
                title: route.params.name,

            })}
        />

    </Stack.Navigator>

);


export default function MainNavigator() {

    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                // tabBarOptions={{
                //     activeTintColor: 'blue',
                // }}
            >

                <Tab.Screen
                    name="Cartelera"
                    component={HomeScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (
                            <FeatherIcon name="film" size={30} color="#000" />
                        )
                    }} />

                <Tab.Screen
                    name="Comida"
                    component={FoodScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="popcorn" size={30} color="#000" />
                        )
                    }} />

                <Tab.Screen
                    name="Cines"
                    component={FilmScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (

                            <MaterialCommunityIcons name="chair-rolling" size={30} color="#000" />
                        )
                    }} />

                <Tab.Screen
                    name="Perfil"
                    component={FilmScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (
                            <FeatherIcon name="user" size={30} color="#000" />
                        )
                    }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})




