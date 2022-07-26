import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super();
    }
    state = { number:0 }
    Subtract =()=>{this.setState({number:this.state.number-1})}
    render() { 
        return ( 
            <>
            <h1>Count : {this.state.number}</h1>
            <button onClick={()=>{this.setState({number :this.state.number+1})}}>Increase</button>
            <button onClick={this.Subtract}>Decrease</button>
            </>
         );
    }
}
 
export default ClassCounter ;