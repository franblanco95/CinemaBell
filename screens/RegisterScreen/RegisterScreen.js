import React, { useCallback, useReducer } from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import { Input } from '../../components/Input';
import { signup } from '../../store/actions/auth.actions';
import { AuthScreenWrapper } from '../AuthScreenWrapper/AuthScreenWrapper';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValidities = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }
        let updatedFormIsValid = true;

        for (const key in inputValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid,
            inputValues,
            inputValidities,
        }
    }

    return state;

}

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    })

    const handleSingUp = () => {
        if (formState.formIsValid) dispatch(signup(formState.inputValues.email, formState.inputValues.password))
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity)) => ({
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        })
    }, [formDispatch]);

return (
    <AuthScreenWrapper
        title="Registro"
        message="Ya tienes una cuenta?"
        buttonText="Ingresar"
        buttonPath="Login"
    >


        <Input
            id='email'
            label="Email"
            keyboardType="email-adress"
            autoCapitalize="none"
            errorText='Por favor ingresa un mail valido'
            required
            email
            onInputChange={onInputChangeHandler}
        />
        <Input
            id='password'
            label="Password"
            secureTextEntry
            autoCapitalize="none"
            errorText='La contraseña debe tener minimo 6 caracteres'
            required
            minLength={6}
            onInputChange={onInputChangeHandler}
        />

        <Button
            title="REGISTRARME"
            onPress={handleSingUp}
            buttonStyle={styles.button}
        />

    </AuthScreenWrapper>
)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green'
    }
});