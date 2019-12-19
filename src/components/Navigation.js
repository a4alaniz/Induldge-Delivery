import React, { Component } from "react";
import { Container, Menu, Button, Icon, Flag } from "semantic-ui-react";
// import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
//   handleLogInButton = event => {
//     this.props.history.push("/login");
//   };

//   handleLogOutButton = event => {
//     localStorage.clear();
//     localStorage.removeItem("state");
//     this.props.history.push("/login");
//   };

  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item>
            <Flag name="us" />
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              <Button color="orange">Home</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./checkout">
              <Button animated="vertical" position="right" color="orange">
                <Button.Content visible>
                  My Cart 
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>

         }
        </Menu>
      </Container>
    );
  }
}



export default withRouter((Navigation));
