import React from 'react'
import { Text, Button } from 'react-native'
import { AuthScreenWrapper } from '../AuthScreenWrapper/AuthScreenWrapper'


export const LoginScreen = ({ navigation }) => {
    return (

        <AuthScreenWrapper
            title="INGRESAR"
            message="Aun no tienes cuenta?"
            buttonText="Registrarme"
            buttonPath="Register"
        >
            <Button title="Registrarme" onPress={() => navigation.navigate('Registro')} />
        </AuthScreenWrapper>


    )
}
