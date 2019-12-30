import React, { Component } from 'react'
import { Card, Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from 'react-redux';
import * as actions from '../Store/actions/index'
import SeeOrders from './SeeOrders'

const uuidv4 = require('uuid/v4');


class showRestaurants extends Component {
    state = { 
        modalOpen: false,
    }

    handleOpen = (id) => {
        this.setState({ modalOpen: id })
    }

    handleClose = () => this.setState({ modalOpen: false })

    handleAddClick = (price, item, restaurantName, id) => {
        this.props.addMenuItem(price, item, restaurantName, id)
        this.props.addItemPrice(price)
    }

    handleRemove = (itemId) => {
        console.log('itemId', itemId)
        this.props.removeFromCart(itemId)
    }

    

    displayMenus = (menus, restaurantName) => {
        return (menus.map(menuHeader => {
            return <div>
                <h3> {menuHeader.section_name}</h3>
                <ul>
                    {menuHeader.menu_items.map(item => (
                       <li >{item.name} {item.price} {item.description}
                        <Button animated="vertical" position="right" color="blue" onClick={() => this.handleAddClick(item.price, item.name, restaurantName, uuidv4())}><Button.Content visible >add</Button.Content><Button.Content hidden>added</Button.Content></Button>  </li>
                    ))}
                </ul>
            </div>
        }))
    }

  



    render() {
        return (
            <div>
                <Container textAlign="center">
                    <Card.Group itemsPerRow={4}>
                        {this.props.rs.map(r => (
                            <Card key={r.restaurant_id}>
                                <Card.Content>
                                    <Card.Header>{r.restaurant_name}</Card.Header>
                                    <Card.Meta>Hours of operation: {r.hours ? r.hours : "N/A"}</Card.Meta>
                                    <Card.Description>
                                        {r.restaurant_phone}
                                    </Card.Description>
                                    <Card.Description>
                                        {r.address.formatted}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <Modal
                                        trigger={<Button onClick={()=>this.handleOpen(r.restaurant_id)}>See Menu</Button>}
                                        open={this.state.modalOpen === r.restaurant_id}
                                        onClose={this.handleClose}
                                        basic size='small'
                                    >
                                        <Header icon="shop" content={this.props.itemCount.length} />
                                        <Modal.Content>
                                            <div>
                                            {this.displayMenus(r.menus[0].menu_sections, r.restaurant_name)}
                                            </div>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='green' onClick={this.handleClose} inverted>
                                                <Icon name='checkmark' /> Got it
                                             </Button>
                                        </Modal.Actions>
                                    </Modal>
                                </Card.Content>
                            </Card>))
                            }
                    </Card.Group>
                <SeeOrders/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rs: state.restaurantState.results,
        itemCount: state.menu.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMenuItem: (itemPrice, itemName, restaurantName, id) => dispatch(actions.addMenuItem(itemPrice, itemName, restaurantName, id)),
        addItemPrice: (itemPrice) => dispatch(actions.addItemPrice(itemPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showRestaurants)