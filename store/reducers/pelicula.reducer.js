// import React from 'react'
import { peliculas } from '../../utils/peliculas';
import { SELECT_PELICULA } from '../actions/pelicula.actions';

const initialState = {
    list: peliculas,
    selectedID: null,
}


export const PeliculaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PELICULA:
            return {
                ...state,
                selectedID: action.peliculaId,
            }
        default:
            return state;
    }
}
