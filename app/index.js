import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Link} from "./link";
import Popular from './components/popular'


class Hello extends React.Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (
            <div className="container">
                <Popular languages={['All', 'Java', 'JavaScript', 'PHP']}/>
            </div>
        )

    }

}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)