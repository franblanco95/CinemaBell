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
            }}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'rgba(0,0,0,0.4)',
            }}
        >

            <Tab.Screen
                name="Cartelera"
                component={CarteleraStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <FeatherIcon name="film" size={30} color={props.color} />
                            <Text style={styles.text}>Cartelera</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Comida"
                component={ComidaStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <MaterialCommunityIcons name="popcorn" size={30} color={props.color} />
                            <Text style={styles.text}>Comida</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Cines"
                component={CinesStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <MaterialCommunityIcons name="chair-rolling" size={30} color={props.color} />
                            <Text style={styles.text}>Cines</Text>
                        </View>)
                }}
            />

            <Tab.Screen name="Perfil"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.item}>
                            <FeatherIcon name="user" size={30} color={props.color} />
                            <Text style={styles.text}>Perfil</Text>
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
        color: 'white'
    },
    tabBar: {
        position: 'absolute',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        height: 90,
        backgroundColor: 'rgb(10, 25, 49)',
    },

})
