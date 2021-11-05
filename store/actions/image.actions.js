import { URL_UPDATE_API } from "../../constants/database";

export const NEW_IMAGE = 'NEW_IMAGE'

export const imageFirebase = (token, fotoPerfil) => {
    return async dispatch => {
        const updateUser = await fetch(URL_UPDATE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idToken: token,
                photoUrl: fotoPerfil,
                returnSecureToken: true,
            }),
        });

        dispatch({
            type: NEW_IMAGE,
            token: token,
        });
    }
}
