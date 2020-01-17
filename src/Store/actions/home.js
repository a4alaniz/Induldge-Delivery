import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setRestaurantData = (results) => {
    return {
        type: actionTypes.SET_RESTAURANT_DATA, 
        results: results
    }
}

export const holdAddress = (address) => {
    return {
    type: actionTypes.HOLD_ADDRESS,
    address: address
    } 
}




export const initRestaurantData = (lat, long, distance, cuisine) => dispatch => {
        axios.get(`https://us-restaurant-menus.p.rapidapi.com/restaurants/search/?lat=${lat}&lon=${long}&distance=${distance}&q=cuisines:${cuisine}&page=2&fullmenu`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_MENU_API
            }
        })
        .then(response => {
            dispatch(setRestaurantData(response.data.result.data.map(restaurant => (
               restaurant 
            ))));
        })
        .catch(err => {
            console.log(err);
        });
    }   


    
     
  