import { URL_AUTH_API, URL_LOGIN_API, URL_UPDATE_API, URL_LOOKUP_API } from '../../constants/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOOKUP = 'LOOKUP';
export const LOGOUT = 'LOGOUT';

export const signup = (name, email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorID = errorResponse.error.message;

            let message = 'No se ha podido registrar';
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado';

            throw new error(message);
        }

        const data = await response.json();

        const updateUser = await fetch(URL_UPDATE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idToken: data.idToken,
                displayName: name,
                returnSecureToken: true,
            }),
        });

        const userData = await updateUser.json()


        await AsyncStorage.setItem('@token', data.idToken);
        await AsyncStorage.setItem('@userId', data.localId);

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
        });
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_LOGIN_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            const errorID = errorResponse.error.message;
            console.log(`linea 78 ${errorID}`)

            let message = 'No se ha podido ingresar';
            if (errorID === 'EMAIL_NOT_FOUND') message = 'Este email no se encuentra registrado';
            if (errorID === 'INVALID_PASSWORD') message = 'Contraseña Incorrecta';

            throw new error(message);
        }

        const data = await response.json();

        await AsyncStorage.setItem('@token', data.idToken);
        await AsyncStorage.setItem('@userId', data.localId);


        dispatch({
            type: LOGIN,
            token: data.idToken,
            userId: data.localId,
        });
    }
}

// Para cargar el token del usuario que ya accedio a la app del cache de async storage
export const initAuthentication = () => {
    return async dispatch => {
        const token = await AsyncStorage.getItem('@token')
        const userId = await AsyncStorage.getItem('@userId');

        if (token !== null && userId !== null) {
            dispatch({
                type: SIGNUP,
                token,
                userId,
            });
        }
    }
}

// Para traer la informacion del usuario Firebase API
export const lookupUser = (token) => {
    return async dispatch => {
        const response = await fetch(URL_LOOKUP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idToken: token,
            }),
        });

        const data = await response.json();

        dispatch({
            type: LOOKUP,
            data,
        });
    }
}


export const logout = () => {
    return async dispatch => {
        const token = await AsyncStorage.removeItem('@token')
        const userId = await AsyncStorage.removeItem('@userId');

        dispatch({
            type: LOGOUT,
            token,
            userId,
        });
    }
}


