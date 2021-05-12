import React from 'react'
import * as url from "url";
export default class CoinMarket extends React.Component{

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search)
        console.log(urlParams.get('sort'))
    }

    render() {

        return (<h3>coinmarket</h3>)
    }
}