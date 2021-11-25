import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import LoginStackNavigator from './LoginNavigator';
import { useDispatch, useSelector } from 'react-redux'
import { initAuthentication } from '../store/actions/auth.actions';
import { DarkTheme } from '../constants/DarkTheme';
import { DefaultTheme } from '../constants/DefaultTheme';

export const MainNavigator = () => {

    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(initAuthentication())
    }, [])

    const colorScheme = useSelector(state => state.theme.modo)

    return (
        <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : DefaultTheme}>

            {userId
                ?
                <TabNavigator />

                : <LoginStackNavigator />}

        </NavigationContainer>

    )
}
