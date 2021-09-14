import React from 'react'
import { Text } from 'react-native'
import { AuthScreenWrapper } from '../AuthScreenWrapper/AuthScreenWrapper'


export const LoginScreen = () => {
    return (

        <AuthScreenWrapper
            title="INGRESAR"
            message="Aun no tienes cuenta?"
            buttonText="Ir al registro"
            buttonPath="Registro"
        >
            <Text>Formulario</Text>
        </AuthScreenWrapper>
    )
}
