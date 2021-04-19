import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components/battle";
import Myform from "./components/myform";
import PlayerInput from "./components/playerInput";


class Hello extends React.Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (
            <div className="container">
                {/*<Popular languages={['All', 'Java', 'JavaScript', 'PHP']}/>*/}
                <Battle/>

            </div>

        )

    }

}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)