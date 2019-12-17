import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: [],
    address: ''
}


// const initRestaurantData = (state, action) => {

// }


const setRestaurantData = (state, action) => {
    return updateObject( state, {
        results: action.results
    }
  )
}

const holdAddress = (state, action) => {
    return updateObject(state, {
        address: action.address
    })
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_RESTAURANT_DATA: return setRestaurantData(state, action)
        case actionTypes.HOLD_ADDRESS: return holdAddress(state, action)
        default: return state
    }
} 

export default reducer 