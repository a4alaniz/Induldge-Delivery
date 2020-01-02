import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'
import {Header } from 'semantic-ui-react'

class Orders extends Component {

    firstMap = () => {
        return  (this.props.orderItems.map(cart => {
         return  <ListGroup.Item><Header color='blue' as='h1'>{cart.restaurantName}</Header> <Header color='blue' as='h2'>{cart.itemName}</Header> <Header color='blue' as='h3'>{cart.itemPrice}</Header> </ListGroup.Item>
        }))
    }

    render() {
        console.log(this.props.orderItems)
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Order History</h1>
                <h2>Your Order Items: <ListGroup>{this.firstMap()}</ListGroup></h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       orderItems: state.order.orderItems
    }
}

export default connect(mapStateToProps, null)(Orders)