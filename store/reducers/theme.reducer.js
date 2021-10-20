import { DARK_THEME, LIGHT_THEME } from "../actions/theme.action";

const initialState = {
    theme: false,
}

export const themeReducer = (theme = initialState, { action }) => {
    switch (action) {
        case DARK_THEME:
            return { theme: true };
        case LIGHT_THEME:
            return { theme: false };
        default:
            return theme;
    }
}