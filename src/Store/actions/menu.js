import * as actionTypes from './actionTypes'


export const addMenuItem = (itemPrice, itemName, restaurantName, id) => {
    return {
        type: actionTypes.ADD_MENU_ITEM,
        itemPrice: itemPrice,
        itemName: itemName,
        restaurantName: restaurantName,
        itemId: id
    }
}

export const addItemPrice = (itemPrice) => {
    return {
        type: actionTypes.ADD_ITEM_PRICE,
        itemPrice: itemPrice
    }
}

export const subtractItemPrice = (itemPrice) => {
    return {
        type: actionTypes.SUBTRACT_ITEM_PRICE,
        itemPrice: itemPrice
    }
}

export const removeFromCarts = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        itemId: id
    }
}
