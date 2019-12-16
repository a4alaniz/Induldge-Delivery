import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}


// const initRestaurantData = (state, action) => {

// }


const setRestaurantData = (state, action) => {
    return updateObject( state, {
        results: action.results
    }
  )
}

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_RESTAURANT_DATA: return setRestaurantData(state, action)
        default: return state
    }
} 

export default reducer 