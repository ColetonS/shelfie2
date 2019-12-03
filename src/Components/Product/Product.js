import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3>{this.props.product_name}</h3>
                <h3>{this.props.price}</h3>
                <img src={this.props.image} alt='product' />
            </div>
        )
    }
}