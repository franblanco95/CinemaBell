import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import LoginStackNavigator from './LoginNavigator';
import { useDispatch, useSelector } from 'react-redux'
import { initAuthentication } from '../store/actions/auth.actions';

export const MainNavigator = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(initAuthentication())
    }, [])

    return (

        <NavigationContainer>

            {userId
                ? <TabNavigator />
                : <LoginStackNavigator />}

        </NavigationContainer>

    )
}
