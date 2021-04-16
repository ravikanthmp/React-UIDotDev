import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Link} from "./link";
import {Todo} from "./todo";


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
                <Todo friends={[
                    { id: 893, name: 'Mikenzi' },
                    { id: 871, name: 'Cash' },
                    { id: 982, name: 'Steven' },
                    { id: 61, name: 'Kimmy' },
                    { id: 117, name: 'Doug' }
                ]}/>
            </React.Fragment>
        )

    }
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)