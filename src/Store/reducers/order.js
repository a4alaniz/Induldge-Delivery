import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    orderItems: []
}

const seeOrderHistory = (state, action) => {
    return updateObject(state, {
        orderItems: state.orderItems.concat(action.orderItems)
    })
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SEE_ORDER_HISTORY: return seeOrderHistory(state, action)
        default: return state
    }
} 

export default reducer 