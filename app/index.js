import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import CoinMarket from "./components/coinMarket";
import Myform from "./components/myform";
import PlayerInput from "./components/playerInput";

import {LocaleContext} from "./components/localeContext";
import {BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect} from "react-router-dom";

import CodeSplitting from "./components/dynamicImports/codesplitting";

const Popular = React.lazy(() => import('./components/popular'))
const Battle = React.lazy(() => import('./components/battle'))
const Results = React.lazy(() => import('./components/results'))

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
                                        to="/code-splitting">Code Splitting</NavLink>
                                </li>
                            </ul>

                        </div>
                       <React.Suspense fallback={() => (<h3>c kdbckb</h3>)}>
                           <Switch>
                               <Route exact path="/" component={Popular}/>
                               <Route path="/battle" component={Battle}/>
                               <Route path='/results' component={Results}/>
                               <Route path='/code-splitting' component={CodeSplitting}/>
                               <Route component={() => (<h3>Not Found bruh!</h3>)}/>
                           </Switch>
                       </React.Suspense>



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