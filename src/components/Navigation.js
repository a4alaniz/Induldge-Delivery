import React, { Component } from "react";
import { Container, Menu, Button, Icon } from "semantic-ui-react";
// import { connect } from "react-redux";
import Nav from 'react-bootstrap/Nav'
import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
  handleLogInButton = event => {
    this.props.history.push("/login");
  };

  handleLogOutButton = event => {
    localStorage.clear();
    localStorage.removeItem("state");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div >
        <Menu fixed="top" >
          <Menu.Item>
            <Icon name="food" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              <Button color="blue">Home</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./checkout">
              <Button 
              animated="vertical" 
              position="right" 
              color="blue">
                <Button.Content visible>
                  My Cart 
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./orders">
              <Button color="blue">My Orders</Button>
            </Link>
          </Menu.Item>  
          {localStorage.getItem("jwt") ? (
            <Menu.Item position="right">
              <Button
                animated="vertical"
                position="right"
                color="blue"
                onClick={this.handleLogOutButton}
              >
                <Button.Content visible>Log out</Button.Content>
                <Button.Content hidden>
                  <Icon name="log out" />
                </Button.Content>
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Button
                animated="vertical"
                position="right"
                color="orange"
                onClick={this.handleLogInButton}
              >
                <Button.Content visible>Log in</Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </div>
    );
  }
}



export default withRouter((Navigation));
