import React from "react";

export class Todo extends React.Component {

    render() {
        const friends = this.props.friends;
        var i = 0;
        return (
            <ul>
                {
                    friends.map( friend =>
                        <li key={i++}>
                            {friend.name}
                        </li>
                    )
                }
                {[<li>a</li>, <li>b</li>, <li>pichi</li>]}
            </ul>
        );
    }
}