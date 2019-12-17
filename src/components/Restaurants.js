import React, { Component } from 'react'
import { Card, Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from 'react-redux';

class showRestaurants extends Component {
    state = { modalOpen: false }

    handleOpen = (id) => {
        this.setState({ modalOpen: id })
    }

    handleClose = () => this.setState({ modalOpen: false })

    displayMenus = (menus) => {
        // console.log(menus)
        return (menus.map(menuHeader => {
            return <div>
                <h3> {menuHeader.section_name}</h3>
                <ul>
                    {menuHeader.menu_items.map(item => (
                        <li >{item.name} {item.price} <Button>add</Button> <Button>remove</Button></li>
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
                                    <Card.Meta>Hours of operation: {r.hours}</Card.Meta>
                                    <Card.Description>
                                        {r.restaurant_phone}
                                    </Card.Description>
                                    <Card.Description>
                                        {r.address.formatted}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<Button onClick={()=>this.handleOpen(r.restaurant_id)}>Show Modal</Button>}
                                        open={this.state.modalOpen === r.restaurant_id}
                                        onClose={this.handleClose}
                                        basic
                                        size='small'
                                    >
                                        <Header icon='food' content="Menu Items" />
                                        <Modal.Content >
                                            <div>
                                            {this.displayMenus(r.menus[0].menu_sections)}
                                            </div>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='green' onClick={this.handleClose} inverted>
                                                <Icon name='checkmark' /> Got it
                                             </Button>
                                        </Modal.Actions>
                                    </Modal>
                                    {/* <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div> */}
                                </Card.Content>
                            </Card>))
                            }
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rs: state.restaurantState.results
    }
}

export default connect(mapStateToProps, null)(showRestaurants)