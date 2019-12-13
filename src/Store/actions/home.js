import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setRestaurantData = (results) => {
    return {
        type: actionTypes.SET_RESTAURANT_DATA, 
        results: results
    }
}


export const initRestaurantData = (zip) => dispatch => {
        axios.get(`https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/${zip}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "e44678acd5mshd535e5db633dbbap1a2b3bjsn6475464863a3"
            }
        })
        .then(response => {
            dispatch(setRestaurantData(response));
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    }   