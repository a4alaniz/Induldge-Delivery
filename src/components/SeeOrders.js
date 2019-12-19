import React, { Component } from 'react'
import { connect } from 'react-redux';


class SeeOrders extends Component {
    render() {
        console.log(this.props.menuItems)
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
