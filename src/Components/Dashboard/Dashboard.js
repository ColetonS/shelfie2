import React, { Component } from 'react'
import Product from '../Product/Product'
import './Dashboard.scss'

export default class Dashboard extends Component {
    constructor() {
        super()
    }

    render() {
        const mappedGoods = this.props.goods.map(product => {
            return (
                <div className='product'>
                    <Product
                     product_name = {product.product_name}
                     price = {product.price}
                     image = {product.image}
                    />
                    
                </div>
            
            )
        })
        return (
            <div className='product-container'>
                {mappedGoods}
            </div>
        )
    }
}