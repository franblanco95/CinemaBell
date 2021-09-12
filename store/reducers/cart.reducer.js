import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from '../actions/cart.actions'

const INITIAL_STATE = {
    items: [],
    total: 2500,
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.item),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => items.id !== action.itemID),
            }
        case CONFIRM_CART:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
}

export default CartReducer;