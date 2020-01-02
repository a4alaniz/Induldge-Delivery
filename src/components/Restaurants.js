import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from 'react-redux';
import * as actions from '../Store/actions/index'
import ListGroup from 'react-bootstrap/ListGroup'
const uuidv4 = require('uuid/v4');

class showRestaurants extends Component {
    state = { 
        modalOpen: false
    }

    handleOpen = (id) => {
        this.setState({ modalOpen: id })
    }

    handleClose = () => this.setState({ modalOpen: false })

    handleAddClick = (price, item, restaurantName, id) => {
        this.props.addMenuItem(price, item, restaurantName, id)
        this.props.addItemPrice(price)
        this.props.addItem(price, item, restaurantName, id)
    }

    handleRemove = (itemId) => {
        console.log('itemId', itemId)
        this.props.removeFromCart(itemId)
    }

    

    displayMenus = (menus, restaurantName) => {
        return (menus.map(menuHeader => {
            return <div>
                <Header> {menuHeader.section_name}</Header>
                {/* <> */}
                    {menuHeader.menu_items.map(item => (
                       <ListGroup.Item ><Header color="blue" as='h2'>{item.name}</Header>{item.price} {item.description}
                          <Button animated="vertical" position="right" color="blue" onClick={() => this.handleAddClick(item.price, item.name, restaurantName, uuidv4())}><Button.Content visible >add</Button.Content><Button.Content hidden>1</Button.Content></Button>  </ListGroup.Item>
                    ))}
                {/* </> */}
            </div>
        }))
    }

  



    render() {
        return (
            // <Container>
                <Container textAlign="center">
                    <Card.Group itemsPerRow={2}>
                        {this.props.rs.map(r => (
                            // <Card key={r.restaurant_id}>
                                <Card >
                                <Card.Content>
                                    <Card.Header><Header as='h3'>{r.restaurant_name}</Header></Card.Header>
                                    <Card.Meta><Header as='h4'>Hours of operation: {r.hours ? r.hours : "N/A"}</Header></Card.Meta>
                                    <Card.Description>
                                        {r.restaurant_phone}
                                    </Card.Description>
                                    <Card.Description>
                                        {r.address.formatted}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <Modal
                                        trigger={<Button>See Menu</Button>}
                                        // trigger={<Button onClick={()=>this.handleOpen(r.restaurant_id)}>See Menu</Button>}

                                        // open={this.state.modalOpen === r.restaurant_id}
                                        // onClose={this.handleClose}
                                        // basic size='small'                        
                                    >
                                        <Header as={Link} to='/checkout' icon="shop" content={this.props.itemCount.length} />
                                        <Modal.Description>
                                            <ListGroup>
                                            {this.displayMenus(r.menus[0].menu_sections, r.restaurant_name)}
                                            </ListGroup>
                                        </Modal.Description>
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
                </Container>
            // </Container>
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
        addItemPrice: (itemPrice) => dispatch(actions.addItemPrice(itemPrice)),
        addItem: (itemPrice, itemName, restaurantName, id) => dispatch(actions.addItem(itemPrice, itemName, restaurantName, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showRestaurants)