import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducers

import { PeliculaReducer } from './reducers/pelicula.reducer';
import { ComidaReducer } from './reducers/comida.reducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
    peliculas: PeliculaReducer,
    comidas: ComidaReducer,
    cart: CartReducer,
    auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));


