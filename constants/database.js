import { FIREBASE_API_KEY } from '@env'

export const URL_API = 'https://app-cine-d1f3e-default-rtdb.firebaseio.com/';

export const URL_AUTH_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`

export const URL_LOGIN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

export const URL_UPDATE_API = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`;

export const URL_LOOKUP_API = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`;
