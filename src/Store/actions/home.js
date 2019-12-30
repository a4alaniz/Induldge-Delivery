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
    console.log(lat, long)
        axios.get(`https://us-restaurant-menus.p.rapidapi.com/restaurants/search/?lat=${lat}&lon=${long}&distance=${distance}&q=cuisines:${cuisine}&page=2&fullmenu`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "e44678acd5mshd535e5db633dbbap1a2b3bjsn6475464863a3"
            }
        })
        .then(response => {
            dispatch(setRestaurantData(response.data.result.data.map(restaurant => (
               restaurant 
            ))));
            console.log(response.data.result.data)
        })
        .catch(err => {
            console.log(err);
        });
    }   


    
     
  