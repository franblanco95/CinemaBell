import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CarteleraStackNavigator from './CarteleraNavigator';
import ProfileStackNavigator from './ProfileNavigator';
import ComidaStackNavigator from './ComidaNavigator';
import CinesStackNavigator from './CinesNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.shadow, ...styles.tabBar },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "rgba(0,0,0,0.4)",
            }}

        >

            <Tab.Screen
                name="Home2"
                component={CarteleraStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <FeatherIcon name="film" size={30} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Inicio</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Comida2"
                component={ComidaStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <MaterialCommunityIcons name="popcorn" size={30} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Comida</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Cine2"
                component={CinesStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <MaterialCommunityIcons name="chair-rolling" size={30} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Cine</Text>
                        </View>)
                }}
            />

            <Tab.Screen name="Perfil2"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <FeatherIcon name="user" size={30} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Perfil</Text>
                        </View>)
                }}
            />

        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
    },
    tabBar: {
        position: 'absolute',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        height: 90,
        backgroundColor: 'rgb(0, 25, 49)',
        borderTopWidth: 0,
    },

})
