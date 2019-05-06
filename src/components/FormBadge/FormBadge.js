import React, { Component } from 'react';

class FormBadge extends Component{

    constructor(){
        super();
        this.state ={
            Name: '',
            Age: '',
            Sex: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(inputID){
        const { value, name } = inputID.target;
        this.setState( { [name]: value } )
    }
    handleSubmit(inputID){
        inputID.preventDefault();
        this.props.onAddTask(this.state)
    }

    render(){
        return(
            <div className="col.md-4">
                <div className="card mt-4">
                    <form className="card-body" action="" onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <input type="text" name="Name" onChange={this.handleInput} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="Age" onChange={this.handleInput} className="form-control" placeholder="Age"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="Sex" onChange={this.handleInput} className="form-control" placeholder="Sex      "/>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormBadge;