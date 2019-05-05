import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <p className="text-white">{this.props.title}</p>
            </nav>            
        )
    }
}


export default Navigation;