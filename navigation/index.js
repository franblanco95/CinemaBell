import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from './LoginNavigator';
import TabNavigator from './TabNavigator';

export const MainNavigator = () => {

    const userId = useSelector(state => state.auth.userId);

    return (

        <NavigationContainer>

            {userId
                ? <TabNavigator />
                : <LoginStackNavigator />}

        </NavigationContainer>

    )
}
