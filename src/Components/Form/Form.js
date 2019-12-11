import React, { Component } from "react";
import './Form.scss'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
        image: '',
        productName: '',
        price: 0
    }
  }

handleChange = e =>  {
    this.setState({
        [e.target.name]: e.target.value
    })
    
}

cancel = () => {
    this.setState({
        image: '',
        productName: '',
        price: 0
    })
}

  render() {
    return (
      <div className="form-container">
        <div className='form-inputs'>
          <h2>Image URL</h2>
          <input onChange={e => this.handleChange(e)} type='text' name='image'/>
          <h2>Product Name</h2>
          <input onChange={e => this.handleChange(e)} type='text' name='productName'/>
          <h2>Price</h2>
          <input onChange={e => this.handleChange(e)} type='number' name='price'/>
        </div>
        <div className="form-buttons">
          <button onClick={() => this.cancel()}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
