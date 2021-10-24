import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//reducers

import { EstrenoReducer } from './reducers/estrenos.reducer';
import { PeliculaReducer } from './reducers/pelicula.reducer';
import { ComidaReducer } from './reducers/comida.reducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import { themeReducer } from './reducers/theme.reducer';

const RootReducer = combineReducers({
    estrenos: EstrenoReducer,
    peliculas: PeliculaReducer,
    comidas: ComidaReducer,
    cart: CartReducer,
    auth: AuthReducer,
    theme: themeReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));


