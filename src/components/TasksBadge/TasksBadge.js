import React, {Component} from 'react';
import {testingData} from '../../Data/testingData.json'
console.log("testing")
console.log(testingData)



class TasksBadge extends Component{
    render(){
        return(
            <div className="col.md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <p>jose alejandro tamayo</p>
                        <span className="badge badge-pill badge-danger ml-2">M</span>
                    </div>
                    <div className="card-body">
                        <p>27</p>
                    </div>
                </div>
            </div> 
            )
    }
}


export default TasksBadge;