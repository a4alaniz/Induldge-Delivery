import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    item: []
}

const addMenuItem = (state, action) => {
    let updatedMenu = {
        itemPrice: action.itemPrice,
        itemName: action.itemName,
        restaurantName: action.restaurantName
    } 
    return updateObject( state, {
        item: state.item.concat(updatedMenu)
    })
}

// const removeMenuItem = (state, action) => {
//     return updateObject( state, {
//         totalPrice: state.totalPrice - price
//     })
// }

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_MENU_ITEM: return addMenuItem(state, action)
        default: return state
    }
} 

export default reducer 