import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, Container, Form, Input, TextArea, Header } from 'semantic-ui-react'
import * as actions from '../Store/actions/index'
import ListGroup from 'react-bootstrap/ListGroup'
import { withRouter } from "react-router-dom";

class Checkout extends Component {
    constructor() {
        super();

    this.state = {
        street: '',
        city: '',
        zipcode: '',
        state: ''
    }
}

    handleChange = event => {
        event.persist();
        this.setState({
          [event.target.name]: event.target.value
        });
      };

firstMap = () => {
    console.log(this.props.menuItems)
    return  (this.props.menuItems.map(cart => {
     return  <ListGroup.Item><Header color='blue' as='h1'>{cart.restaurantName}</Header> <Header color='blue' as='h2'>{cart.itemName}</Header> <Header color='blue' as='h3'>{cart.itemPrice}</Header> <Button onClick={() => this.handleRemove(cart.itemId, cart.itemPrice)}>Remove</Button></ListGroup.Item>
    }))
}

handleRemove = (itemId, price) => {
    this.props.removeFromCarts(itemId)
    this.props.subtractItemPrice(price)
}

handleSubmit = (event) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const { street, city, zipcode, state } = this.state
    event.preventDefault()
    this.setState({
        [event.target.name]: event.target.value 
    })
    let order = {
        user_id: user.id,
        street,
        city,
        zipcode,
        state,
        order_total: this.props.order_total,
        order_items: this.props.menuItems.map(item => ({
            item_id: item.itemId
        }))
    }
     fetch("http://localhost:3001/api/v1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                order
            })
        })
        .then(response => response.json())
        .then(resopnse => {
            this.props.history.push("/")
            this.props.seeOrderHistory(this.props.menuItems)
            this.props.removeOrder()
        })
     }


    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Order: <ListGroup>{this.firstMap()}</ListGroup></h1>
                <h1>Order Total: {this.props.order_total} </h1>
                <Container>
                <Modal trigger={<Button>Place Order</Button>}>
                  <Modal.Header>Delivery Address</Modal.Header>
                    <Modal.Content >
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                         <Form.Field
                            id='form-input-control-address'
                            control={Input}
                            label='Street'
                            placeholder='Street'
                            name='street'
                            onChange={this.handleChange}
                        />
                         <Form.Field
                            id='form-input-control-city'
                            control={Input}
                            label='City'
                            placeholder='City'
                            name='city'
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                           id='form-input-control-zipcode'
                           control={Input}
                           label='Zipcode'
                           placeholder='Zipcode'
                           name='zipcode'
                           onChange={this.handleChange}
                       />
                         <Form.Field
                            id='form-input-control-state'
                            control={Input}
                            label='State'
                            placeholder='State'
                            name='state'
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Field
                        id='form-textarea-control-notes'
                        control={TextArea}
                        label='Notes'
                        placeholder='Notes, Special Requests'
                        />
                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Place Order Now'
    />
                    </Form>
                 </Modal.Content>
                </Modal>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
       menuItems: state.menu.item,
       order_total: state.menu.order_total
    }
}

const mapDispatchToProps = dispatch => {
    return {
    removeFromCarts: (itemId) => dispatch(actions.removeFromCarts(itemId)),
    subtractItemPrice: (price) => dispatch(actions.subtractItemPrice(price)),
    removeOrder: () => dispatch(actions.removeOrder()),
    seeOrderHistory: (orderItems) => dispatch(actions.seeOrderHistory(orderItems))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Checkout)            