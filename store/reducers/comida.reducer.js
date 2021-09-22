// import React from 'react'
import { comidas } from '../../utils/comidas';
import { SELECT_COMIDA } from '../actions/comida.actions';

const initialState = {
    list: comidas,
    selectedID: null,
}


export const ComidaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_COMIDA:
            return {
                ...state,
                selectedID: action.selectedID,
            }
        default:
            return state;
    }
}