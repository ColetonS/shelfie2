import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
      goods: []
    }

  }

  componentDidMount = () => {
    axios.get('api/goods')
    .then(res => {
      this.setState({
        goods: res.data
      })
    })
  }

  render() {
    
    return (
      <div className="App">
        <Dashboard
          goods = {this.state.goods}
         />
        <Header />
        <Form />
      </div>
    );
  }
}

