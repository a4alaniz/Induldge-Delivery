// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { Button, Header, Image, Modal, Container } from 'semantic-ui-react'

// class Checkout extends Component {



//     render() {
//         return (
//             <div>
//                 <h1>Price: {this.props.totalPrice}</h1>
//                 <h1>Quantity: {this.props.counter}</h1>
//                 <h1>Items: {this.buttonToDelete()}</h1>
//                 <Container>
//                 <Modal trigger={<Button>Show Modal</Button>}>
//                   <Modal.Header>Select a Photo</Modal.Header>
//                     <Modal.Content image>
//                         <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
//                             <Modal.Description>
//                              <Header>Default Profile Image</Header>
//                                 <p>
//                                 We've found the following gravatar image associated with your e-mail
//                                 address.
//                                 </p>
//                                 <p>Is it okay to use this photo?</p>
//                             </Modal.Description>
//                  </Modal.Content>
//                 </Modal>
//                 </Container>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         totalPrice: state.menu.totalPrice,
//         counter: state.menu.counter,
//         itemName: state.menu.itemName
//     }
// }



// export default connect(mapStateToProps )(Checkout)