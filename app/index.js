import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components/battle";
import CoinMarket from "./components/coinMarket";
import Myform from "./components/myform";
import PlayerInput from "./components/playerInput";
import Popular from "./components/popular";
import {LocaleContext} from "./components/localeContext";
import {BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect} from "react-router-dom";
import Results from "./components/results";

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
                                {/*<li>*/}
                                {/*    <NavLink*/}
                                {/*        activeStyle={this.activeStyle}*/}
                                {/*        exact*/}
                                {/*        to="/">Popular</NavLink>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <NavLink*/}
                                {/*        activeStyle={this.activeStyle}*/}
                                {/*        to="/battle">Battle</NavLink>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <NavLink*/}
                                {/*        activeStyle={this.activeStyle}*/}
                                {/*        to="/coinmarket">Coinmarket</NavLink>*/}
                                {/*</li>*/}
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/match">Match</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/match-after-redirect">MatchAfterRedirect</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/not-match">Not Match</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        activeStyle={this.activeStyle}
                                        to="/also-will-not-match">Also will not match</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/*<Route exact path="/" component={Popular}/>*/}
                        {/*<Route path="/battle" component={Battle}/>*/}
                        {/*<Route path="/coinmarket" component={CoinMarket}/>*/}
                        {/*<Route path='/results' component={Results}/>*/}
                        <Switch>
                            {/*<Route path='/match' component={Match}/>*/}
                            <Redirect from="/match" to="/match-after-redirect"/>
                            <Route path="/match-after-redirect" component={MatchAfterRedirect}/>
                            <Route component={NotMatch}/>
                            <Route path='/non-existing-route-2' component={AlsoWillNotMatch}/>
                        </Switch>

                    </div>
                </LocaleContext.Provider>
        </Router>


        )
    }
}

function Match(){
    return (<h3>Match</h3>)
}

function MatchAfterRedirect(){
    return (<h3>MatchAfterRedirect</h3>)
}

function NotMatch(){
    return (<h3>NotMatch</h3>)
}

function AlsoWillNotMatch(){
    return (<h3>AlsoWillNotMatch</h3>)
}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)