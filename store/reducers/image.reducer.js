import { NEW_IMAGE } from "../actions/image.actions"

const initialState = {
    token: null,
};

export const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_IMAGE:
            return {
                ...state,
                token: action.token,
            }
        default:
            return state;
    }
}
