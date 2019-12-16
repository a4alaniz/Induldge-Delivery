import React, { Component } from 'react'
import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants'

import * as actions from '../Store/actions/index'

class home extends Component {

    state = {
        zipCode: ''
    }

    componentDidMount () {
        console.log(actions)
        // this.props.onInitRestaurants();
    }

    handleZipChange = (event) => {
        event.persist();
        this.setState({ zipCode: event.target.value });
        console.log(this.state.zipCode)
        console.log(actions)
    };
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onInitRestaurants(this.state.zipCode)
    }



    render() {
        return (
            <div>
                <h1>Hello</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Restaurants <input type="text" value={this.state.zipCode} onChange={this.handleZipChange}/> </label>
                    <input type='submit' value="Submit"/> 
                </form>
                {this.props.rs.map(restData => (
                    <Restaurants rName={restData.restaurant_name}/>         
                    ))}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        rs: state.restaurantState.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitRestaurants: (zip) => dispatch(actions.initRestaurantData(zip))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps )(home)