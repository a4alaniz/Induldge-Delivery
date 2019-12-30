import React, { Component } from 'react'
import { connect } from 'react-redux';

const user = JSON.parse(localStorage.getItem("user"))
class SeeOrders extends Component {
    
    render() {
        console.log(this.props.menuItems)
        console.log(user)
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuItems: state.menu.item
    }
}

export default connect(mapStateToProps )(SeeOrders)
