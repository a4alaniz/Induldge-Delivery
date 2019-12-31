import React, { Component } from 'react'
import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants'
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Container } from "semantic-ui-react";
import { Form, Button} from 'semantic-ui-react'

import * as actions from '../Store/actions/index'

class home extends Component {

    state = {
        address: '',
        lat: '',
        long: '',
        distance: '',
        cuisine: ''
    }

    // componentDidMount () {
    //     console.log(actions)
    // }

    handleDistanceChange = (event) => {
        event.persist();
        this.setState({ distance: event.target.value });
    };

    handleCuisineChange = (event) => {
        event.persist()
        this.setState({cuisine: event.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onInitRestaurants(this.state.lat, this.state.long, this.state.distance, this.state.cuisine)
    }

    
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
          this.setState({address})
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              console.log(latLng)
              this.setState({lat: latLng.lat, long: latLng.lng})})
          .catch(error => console.error('Error', error));
      };
      

    render() {
        return (
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Search Restaurants</h1>
                <br></br>
                <Form><Form.Field><PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete></Form.Field></Form>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Field><label>Distance <input type="text" value={this.state.distance} onChange={this.handleDistanceChange}/> </label></Form.Field>
                    <Form.Field><label>Type of Cuisine <input type="text" value={this.state.cuisine} onChange={this.handleCuisineChange}/> </label></Form.Field>
                      </Form.Group>
                    <Form.Group>
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Search'
    /></Form.Group>
                </Form>
                <Restaurants/>
            </Container>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         rs: state.restaurantState.results
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onInitRestaurants: (lat, long, distance, cuisine) => dispatch(actions.initRestaurantData(lat, long, distance, cuisine)),
        holdAddress: (address) => dispatch(actions.holdAddress(address)),
    }
}
  
export default connect(null, mapDispatchToProps )(home)