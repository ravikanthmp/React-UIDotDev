import React from "react";

export default class Hover extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            hovering : false
        }
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    onMouseOver(){
        console.log(`Mouse Hovered In`)
        this.setState({
            hovering : true
        })
    }

    onMouseOut(){
        console.log(`Mouse Hovered Out`)
        this.setState({
            hovering : false
        })
    }

    render() {
        const {hovering} = this.state;

        return (<div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            {this.props.renderProps(hovering)}
        </div>)
    }
}