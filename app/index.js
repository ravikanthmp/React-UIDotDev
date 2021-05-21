import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Battle from "./components-legacy/battle";
import CoinMarket from "./components-legacy/coinMarket";
import Myform from "./components-legacy/myform";
import PlayerInput from "./components-legacy/playerInput";
import Popular from "./components-legacy/popular";
import {LocaleContext} from "./components-legacy/localeContext";
import {BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect} from "react-router-dom";
import Results from "./components-legacy/results";

function Hello({name, link}) {

    const [state, setState] = React.useState({
        locale : 'it',
        toggle : (lang) => this.setState( ({locale}) => ({locale : lang}))
    })

    const [activeStyle, setActiveStyle] = React.useState('red');

    return (<Router><LocaleContext.Provider value={state}>
        <div className="container">
            <div>
                <ul>
                    <li>
                        <NavLink
                            activeStyle={activeStyle}
                            exact
                            to="/">Popular</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeStyle={activeStyle}
                            to="/battle">Battle</NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/" component={Popular}/>
                <Route path="/battle" component={Battle}/>
                <Route path='/results' component={Results}/>
                <Route component={() => (<h3>Not Found bruh!</h3>)}/>
            </Switch>



        </div>
    </LocaleContext.Provider>
    </Router>)

}

ReactDOM.render(
    <Hello name={"halala"} link={"http://www.google.com"}/>,
    document.getElementById('app')
)