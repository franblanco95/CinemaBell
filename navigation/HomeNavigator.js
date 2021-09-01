import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen';
import { FilmScreen } from '../screens/FilmScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (

    <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Cinema La Plata" component={HomeScreen} />
        <Stack.Screen name="Film" component={FilmScreen} />

    </Stack.Navigator>

);


export default function MainNavigator() {

    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (<View>
                        
                    </View>)
                }} />


                <Tab.Screen name="Film" component={FilmScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})




