import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components/battle";
import CoinMarket from "./components/coinMarket";
import Myform from "./components/myform";
import PlayerInput from "./components/playerInput";
import Popular from "./components/popular";
import {LocaleContext} from "./components/localeContext";
import {BrowserRouter as Router, Link, Route, NavLink} from "react-router-dom";

class Hello extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            locale : 'it',
            toggle : (lang) => this.setState( ({locale}) => ({locale : lang}))
        }
        this.activeStyle = {
            color : 'red'
        };

    }

    render() {
        const name = this.props.name;
        const link = this.props.link;
        return (<Router><LocaleContext.Provider value={this.state}>
                    <div className="container">
                        <div>
                            <ul>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        exact
                                        to="/">Popular</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/battle">Battle</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/coinmarket">Coinmarket</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Route exact path="/" component={Popular}/>
                        <Route path="/battle" component={Battle}/>
                        <Route path="/coinmarket" component={CoinMarket}/>
                    </div>
                </LocaleContext.Provider>
        </Router>


        )
    }
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)