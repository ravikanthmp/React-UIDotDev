import React from 'react'
import {Link, Route} from 'react-router-dom'
import DynamicImports from "./dynamicImports";

export default class CodeSplitting extends React.Component{
    render() {
        return (<div>
            <ul>
                <li>
                    <Link to={this.props.match.path + `/heavy-1`}>Heavy 1</Link>
                </li>
                <li>
                    <Link to={this.props.match.path + `/heavy-2`}>Heavy 2</Link>
                </li>
                <li>
                    <Link to={this.props.match.path + `/heavy-3`}>Heavy 3</Link>
                </li>
            </ul>
            <Route path={this.props.match.path + `/heavy-1`} component={Heavy1WithDynamicImports}/>
            <Route path={this.props.match.path + `/heavy-2`} component={Heavy2}/>
            <Route path={this.props.match.path + `/heavy-3`} component={Heavy3}/>
        </div>)
    }
}

function Heavy1WithDynamicImports(props){
    return <DynamicImports load={() => import("./heavy1")}>
        { (Component) => Component == null ? <h3>LOADING</h3>  : <Component {...props}/>}
    </DynamicImports>
}

function Heavy2(){
    return (<div><h3>Heavy 2</h3></div>)
}

function Heavy3(){
    return (<div><h3>Heavy 3</h3></div>)
}