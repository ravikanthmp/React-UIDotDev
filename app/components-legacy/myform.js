import React from 'react';
import ReactDOM from 'react-dom';

export default class Myform extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            name : null,
            email : null,
            age : null
        };
        this.handleChange = this.handleChange.bind(this)
    }

    render() {

        return (<React.Fragment>
           Name: <input onChange={this.handleChange} placeholder="Enter your name"/>
           <p>Name in React component this.state is {this.state.name} </p>
        </React.Fragment>)
    }

    handleChange(e) {

        this.setState( (prevState) => {
            return {
                ...prevState,
                name : e.target.value
            }
        })
    }
}