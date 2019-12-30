import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    item: [],
    order_total: 0
}





const addMenuItem = (state, action) => {
    let updatedMenu = {
        itemPrice: action.itemPrice,
        itemName: action.itemName,
        restaurantName: action.restaurantName,
        itemId: action.itemId
    } 
    return updateObject( state, {
        item: state.item.concat(updatedMenu)
    })
}

const addItemPrice = (state, action) => {
    const updatedState = {
        order_total: state.order_total + action.itemPrice
    }
    return updateObject(state, updatedState)
}

const removeFromCarts = (state, action) => {
    let itemIdent = action.itemId
    let newItems = state.item.filter(i => i.itemId !== itemIdent)
    return updateObject( state, {
        item: newItems
    })
}

const subtractItemPrice = (state, action) => {
    const updatedState = {
        order_total: state.order_total - action.itemPrice 
    }
    return updateObject(state, updatedState)
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_MENU_ITEM: return addMenuItem(state, action)
        case actionTypes.REMOVE_ITEM: return removeFromCarts(state, action)
        case actionTypes.ADD_ITEM_PRICE: return addItemPrice(state, action)
        case actionTypes.SUBTRACT_ITEM_PRICE: return subtractItemPrice(state, action)
        default: return state
    }
} 

export default reducer 