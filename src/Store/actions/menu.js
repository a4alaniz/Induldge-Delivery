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

export const removeOrder = () => {
    return {
        type: actionTypes.REMOVE_ORDER
    }
}

export const addItem = (itemPrice, itemName, restaurantName, id) => dispatch => {
   fetch("http://localhost:3001/api/v1/items", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify({
           item: {
               price: itemPrice,
               name: itemName,
               restaurant: restaurantName,
               uid: id
           } 
       })
   })
   .then(response => response.json())
}


export const removeFromCarts = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        itemId: id
    }
}
