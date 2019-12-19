import * as actionTypes from './actionTypes'


export const addMenuItem = (itemPrice, itemName, restaurantName) => {
    return {
        type: actionTypes.ADD_MENU_ITEM,
        itemPrice: itemPrice,
        itemName: itemName,
        restaurantName: restaurantName
    }
}

export const removeItem = (item) => {
    return {
        type: actionTypes.REMOVE_MENU_ITEM,
        item: item
    }
}