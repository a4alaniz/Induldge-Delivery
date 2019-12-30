import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Modal, Container, Form, Input, TextArea } from 'semantic-ui-react'
import * as actions from '../Store/actions/index'
import ListGroup from 'react-bootstrap/ListGroup'

class Checkout extends Component {

    state = {
        order_total: ''
        // address: '',
        // city: '',
        // state: '',
        // zipcode: '',
        // notes: ''
    }

    // handleChange = event => {
    //     event.persist();
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     });
    //   };


     componentDidMount = () => {
       let sum = this.props.menuItems.reduce((a, {itemPrice}) => a + itemPrice, 0);
       this.setState({order_total: sum})
     }

firstMap = () => {
    console.log(this.props.menuItems)
    return  (this.props.menuItems.map(cart => {
     return  <ListGroup.Item>{cart.restaurantName} {cart.itemName} {cart.itemPrice} <Button onClick={() => this.handleRemove(cart.itemId, cart.itemPrice)}>Remove</Button></ListGroup.Item>
    }))
}

handleRemove = (itemId, price) => {
    this.props.removeFromCarts(itemId)
    this.props.subtractItemPrice(price)
}

// handleSubmit = (event) => {
//     const user = JSON.parse(localStorage.getItem("user"))
//     const { address, city, state, zipcode, notes, order_total } = this.state
//     event.preventDefault()
//     this.setState({
//         [event.target.name]: event.target.value 
//     })
//     let order = {
//         address,
//         city,
//         state,
//         zipcode,
//         notes,
//         order_total,
//         user_id: user.id,
//         order_items: this.props.menuItems(item => ({
//             itemName: item.itemName,
//             itemPrice: item.itemPrice,
//             restaurant: item.restaurantName
//         }))
//     }
    // this.props.onSubmitOrder(order)
// }

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
                            label='Address'
                            placeholder='Address'
                            name='address'
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
                            id='form-input-control-state'
                            control={Input}
                            label='State'
                            placeholder='State'
                            name='state'
                            onChange={this.handleChange}
                        />
                         <Form.Field
                            id='form-input-control-zipcode'
                            control={Input}
                            label='Zipcode'
                            placeholder='Zipcode'
                            name='zipcode'
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Field
                        id='form-textarea-control-notes'
                        control={TextArea}
                        label='Notes'
                        placeholder='Notes, Special Requests'
                        onChange={this.handleChange}
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
    subtractItemPrice: (price) => dispatch(actions.subtractItemPrice(price))
    // onSubmitOrder: (order) => dispatch(actions.submitOrder(order))
}
}

export default connect(mapStateToProps, mapDispatchToProps )(Checkout)            