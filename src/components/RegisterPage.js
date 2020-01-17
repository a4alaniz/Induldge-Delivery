import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import './Register.css'
class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignUpUserProfile = event => {
    event.preventDefault();
    this.fetchRegister();
    this.props.history.push("/");
  };

  fetchRegister() {
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then(resp => resp.json())
      .then(response => {
        console.log("Sign Up Response from fetch: ", response);
        if (response.error === "failed to create user") {
          alert("This user already exists");
        } else {
          this.setState({ user: response.user });
          //store jwt token in local storage
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify(response.user));
        }
      });
  }

  render() {
    console.log("Current SignUp State: ", this.state);

    return (
      <div className='bgRegister'>
          <div style={{maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffffaf', padding: '40px', borderRadius: '6px'}}>
      <Grid verticalAlign="middle" centered columns={2}>
        <Grid.Column>
          <br></br>
          <Header as="h2" textAlign="center">
            Register to start shopping!
          </Header>
          <Segment>
            <Form
              size="large"
              onSubmit={event => this.handleSignUpUserProfile(event)}
            >
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="username"
                name="username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <Button
                color="green"
                fluid
                size="large"
                onClick={() => console.log("Clicked")}
              >
                Sign Up
              </Button>
            </Form>
          </Segment>
          <Message align="center">
            Already registered? <a href="/login">Login here</a>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
      </div>
    );
  }
}

export default Register;
