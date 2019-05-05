// Imports React
import React, {Component} from 'react';

// Import Components
import Navigation from './components/Navigation/Navigation'
import {testingData} from './Data/testingData.json'

// Import Images
import logo from './logo.svg';

// Import CSS
import './App.css';

// testing
console.log(testingData);


class App extends Component{
  constructor(){
    super();
    this.state={
      testingData
    }
  }

  render(){
    const tasks = this.state.testingData.map((data, index)=>{
      return (
        <div className="col.md-4">
          <div className="card mt-4">
            <div className="card-header">
              {data.Name}
              <span className="badge badge-pill badge-danger ml-2">{data.Sex}</span>
            </div>
            <div className="card-body">
              {data.Age}
            </div>
          </div>
        </div>
      )
    })

    return(
      <div className="App">
        <Navigation title="navBar Title"/>

          <div className="container">
            <div className="row">
              {tasks}
            </div>
          </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.title}</p>
      </div>
    )
  }
}


export default App;
