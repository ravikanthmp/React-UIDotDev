import React from "react";

export  default  class Loading extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading : 'Loading'
        }
    }

    componentDidMount() {

        this.interval = window.setInterval( () => {
            const {loading} = this.state;
            console.log(`loading is ${loading}`)
            if (loading === "Loading..."){
                this.setState({loading : "Loading"})
            }else {
                this.setState( (prevState) => ({loading : prevState.loading + '.'}));
            }
        }, 1)

    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        const {loading} = this.state;
        return <div><h1>{loading}</h1></div>
    }
}