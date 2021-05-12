import React from 'react'
import * as url from "url";
import {parse} from 'query-string'
export default class CoinMarket extends React.Component{

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search)
        const urlParams2 = parse(this.props.location.search)
        console.log(`params2 is ` +  JSON.stringify(urlParams2))
    }

    render() {
        return (<h3>CoinMarket</h3>)
    }
}