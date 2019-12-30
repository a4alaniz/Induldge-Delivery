import React, { Component } from 'react'
import { connect } from 'react-redux'

class Orders extends Component {

    orderTotal = () => {
        this.props.cartItems.map(item => {
            console.log(item.itemPrice)
            return item.itemPrice
        })
    }
    
    render() {
        let arr = []
        console.log(this.props.cartItems.map(item => {
            console.log(arr.concat(item.itemPrice))
            return item
        }))
        return (
            <div>
                <h1>Order History</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.menu.item
    }
}

export default connect(mapStateToProps)(Orders)