import React from 'react'
import { Text } from 'react-native'
import { AuthScreenWrapper } from '../AuthScreenWrapper/AuthScreenWrapper'


export const LoginScreen = () => {
    return (

        <AuthScreenWrapper
            title="Ingresar"
            message="¿Aún no tienes cuenta?"
            buttonText="Ir al registro"
            buttonPath="Registro"
        >
            <Text>Formulario</Text>
        </AuthScreenWrapper>
    )
}
