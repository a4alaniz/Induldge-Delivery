import * as actionTypes from './actionTypes'

export const seeOrderHistory = (orderItems) => {
    return {
        type: actionTypes.SEE_ORDER_HISTORY,
        orderItems: orderItems
    }
}