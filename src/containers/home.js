import React, { Component } from 'react'
import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants'
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import * as actions from '../Store/actions/index'

class home extends Component {

    state = {
        address: '',
        lat: '',
        long: '',
        distance: '',
        cuisine: ''
    }

    componentDidMount () {
        console.log(actions)
        // this.props.onInitRestaurants();
    }

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
              this.setState({lat: latLng.lat, long: latLng.lat})})
            //   console.log('Success', latLng.lat))
          .catch(error => console.error('Error', error));
      };
      

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>Type your address here!
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
      </PlacesAutocomplete>
                <form onSubmit={this.handleSubmit}>
                    <label>Distance <input type="text" value={this.state.distance} onChange={this.handleDistanceChange}/> </label>
                    <label>Type of Cuisine <input type="text" value={this.state.cuisine} onChange={this.handleCuisineChange}/> </label>
                    <input type='submit' value="Submit"/> 
                </form>
                <Restaurants/>
            </div>
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
        onResults: (results) => dispatch(actions.setRestaurantData(results))
    }
}
  
export default connect(null, mapDispatchToProps )(home)