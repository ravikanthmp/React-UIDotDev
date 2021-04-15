import React from "react";

export class Link extends React.Component {
    render() {
        console.log(this.props)
        const link = this.props.link;
        return (
            <React.Fragment>
                {this.props.other}
                <a href={link}>Add a friend!</a>
            </React.Fragment>
        )
    }
}