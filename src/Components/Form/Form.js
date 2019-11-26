import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
        image: '',
        productName: '',
        price: 0
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className='form-inputs'>
          <h2>Image URL</h2>
          <input type='text'/>
          <h2>Product Name</h2>
          <input type='text'/>
          <h2>Price</h2>
          <input type='number'/>
        </div>
        <div className="form-buttons">
          <button>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
