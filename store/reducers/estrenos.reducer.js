import { estrenos } from '../../utils/estrenos';
import { SELECT_ESTRENO } from '../actions/estrenos.actions'

const initialState = {
    list: estrenos,
    selectedID: null,
}

export const EstrenoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ESTRENO:
            return {
                ...state,
                selectedID: action.estrenoId,
            }
        default:
            return state;
    }
}