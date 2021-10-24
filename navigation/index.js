import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import LoginStackNavigator from './LoginNavigator';
import { useDispatch, useSelector } from 'react-redux'
import { initAuthentication } from '../store/actions/auth.actions';
import { useColorScheme } from 'react-native';
import { darkTheme } from '../constants/darkTheme';
import { lightTheme } from '../constants/lightTheme';


export const MainNavigator = () => {

    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(initAuthentication())
    }, [])

    const scheme = useColorScheme()

    return (

        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>

            {userId
                ?
                <TabNavigator />

                : <LoginStackNavigator />}

        </NavigationContainer>

    )
}
