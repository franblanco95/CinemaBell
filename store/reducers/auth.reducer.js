import { LOGIN, SIGNUP, LOOKUP, LOGOUT } from "../actions/auth.actions";

const INITIAL_STATE = {
    token: null,
    userId: null,
    data: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
        case LOGIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
        case LOOKUP:
            return {
                ...state,
                data: action.data,
            }
        case LOGOUT:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default AuthReducer;