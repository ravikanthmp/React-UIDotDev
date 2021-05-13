import React from 'react'
export default class DynamicImports extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            mod : null
        }
    }

    componentWillMount() {
        this.props.load()
            .then(mod => {
                console.log(`log is ${JSON.stringify(mod)}`)
                this.setState({
                    mod : mod.default
                })
            })
    }

    render() {
        console.log(this.props)
        return this.props.children(this.state.mod)
    }

}