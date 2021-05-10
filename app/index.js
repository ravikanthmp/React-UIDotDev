import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components/battle";
import Myform from "./components/myform";
import PlayerInput from "./components/playerInput";
import Popular from "./components/popular";
import {LocaleContext} from "./components/localeContext";

class Hello extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            locale : 'it',
            toggle : (lang) => this.setState( ({locale}) => ({locale : lang}))}
    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (<LocaleContext.Provider value={this.state}>
                <div className="container">
                    {/*<Popular languages={['All', 'Java', 'JavaScript', 'PHP']}/>*/}
                    <Battle/>

                </div>
            </LocaleContext.Provider>

        )
    }
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)