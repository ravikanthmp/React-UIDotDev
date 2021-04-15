import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Link} from "./link";


class Hello extends React.Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (
            <React.Fragment>
                <p>name</p>
                <Link link={link} other={<h3>Hi There!</h3>}/>
            </React.Fragment>
        )

    }
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)