import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducers

import { PeliculaReducer } from './reducers/pelicula.reducer';
import { ComidaReducer } from './reducers/comida.reducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import { themeReducer } from './reducers/theme.reducer';

const RootReducer = combineReducers({
    peliculas: PeliculaReducer,
    comidas: ComidaReducer,
    cart: CartReducer,
    auth: AuthReducer,
    theme: themeReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));


