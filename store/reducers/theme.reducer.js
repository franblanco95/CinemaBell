import { DARK_THEME, LIGHT_THEME } from "../actions/theme.action";

const initialState = {
    theme: false,
    modo: '',
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_THEME:
            return {
                theme: true,
                modo: 'dark'
            };
        case LIGHT_THEME:
            return {
                theme: false,
                modo: 'light'
            };
        default:
            return state;
    }
}