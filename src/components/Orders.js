import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'
import {Header, Container } from 'semantic-ui-react'
import './order.css'
class Orders extends Component {

    firstMap = () => {
        return  (this.props.orderItems.map(cart => {
         return  <ListGroup.Item><Header color='blue' as='h1'>{cart.restaurantName}</Header> <Header  as='h2'>{cart.itemName}</Header> <Header  as='h3'>{cart.itemPrice}</Header> </ListGroup.Item>
        }))
    }

    render() {
        console.log(this.props.orderItems)
        return (
            <div className='bg2'>
                 <div style={{maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffffaf', padding: '40px', borderRadius: '6px'}}>
                {this.props.orderItems.length < 1 ? (
                    <Container>
                 <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>You haven't ordered yet!</h1>
                    </Container>
                ) : (
                    <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Order History</h1>
                <h2>Your Order Items: <ListGroup>{this.firstMap()}</ListGroup></h2>
            </div>)
            }</div>
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