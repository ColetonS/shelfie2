import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
    }

    render() {
        const mappedGoods = this.props.goods.map(product => {
            return (
                <div>
                    <Product
                     product_name = {product.product_name}
                     price = {product.price}
                     image = {product.image}
                    />
                    
                </div>
            
            )
        })
        return (
            <div>
                {mappedGoods}
            </div>
        )
    }
}