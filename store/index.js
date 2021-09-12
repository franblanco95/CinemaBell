import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducers

import { PeliculaReducer } from './reducers/pelicula.reducer';
import { CartReducer } from './reducers/cart.reducer'

const RootReducer = combineReducers({
    peliculas: PeliculaReducer,
    cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));


