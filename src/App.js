// Imports React
import React, { Component } from 'react';

// Import Components
import Navigation from './components/Navigation/Navigation.js'
import FormBadge from './components/FormBadge/FormBadge.js'
import { testingData } from './Data/testingData.json'

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
    this.handleAddTasks = this.handleAddTasks.bind(this)
    this.handleRemoveTask = this.handleRemoveTask.bind(this)
  }

  handleAddTasks(task){
    this.setState({
      testingData: [...this.state.testingData, task]
    })
  }

  handleRemoveTask(index){
    console.log(index)
    this.setState({
      testingData: this.state.testingData.filter((e,i)=>{
        return i !== index
      })
    })
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
            <div className="card-fooder">
              <button className="btn btn-danger" onClick={ this.handleRemoveTask.bind(this, index) }>
                Delete
              </button>
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
            <FormBadge onAddTask={ this.handleAddTasks }/>
          </div>
        </div>

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
