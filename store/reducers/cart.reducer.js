import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from '../actions/cart.actions'

const INITIAL_STATE = {
    items: [],
    total: 0,
}

// Con reduce: Es como un map, donde empezamos con un arreglo y terminamos con un numero

const sumTotal = (list) => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const index = state.items.findIndex(item => item.id === action.item.id)
            if (index === -1) {
                console.log(action.counter)
                const item = { ...action.item, quantity: action.counter };
                const updateCart = [...state.items, item];

                return {
                    ...state,
                    items: updateCart,
                    total: sumTotal(updateCart)
                }
            }

            const items = state.items.map(item => {
                console.log('hola2')
                //falta sumar action.counter
                if (item.id === action.item.id) item.quantity = item.quantity + action.counter
                return item
            })
            return {
                ...state,
                items,
                total: sumTotal(items),
            };
        case REMOVE_ITEM:
            const updateItems = state.items.filter(item => item.id !== action.itemID)
            console.log('hola3')
            return {
                ...state,
                items: updateItems,
                total: sumTotal(updateItems)
            }
        case CONFIRM_CART:
            return {
                ...state,
                items: [],
                total: 0,
            };
        default:
            return state;
    }
}

export default CartReducer;