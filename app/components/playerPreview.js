import {fetchUser} from "../utils/util";
import React from "react";
import * as PropTypes from "prop-types";

export default class PlayerPreview extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            avatarUrl : ""
        }
    }

    componentDidMount() {
        console.log(this.props.playerName)
        fetchUser(this.props.playerName)
            .then(response => response.json())
            .then(data2 => {
                console.log(`cdskln is ${JSON.stringify(data2)}`)
                if (!data2['avatar_url']) {
                    throw Error("Lol!")
                } else {
                    return data2['avatar_url'];
                }
            }).then((avatarUrl) => {
                this.setState({
                    avatarUrl : avatarUrl
                })
        });
    }

    render() {
        let {playerName} = this.props;
        console.log(`state of [layerpervie` + this.state.avatarUrl)
        return (<div>
            <img src={this.state.avatarUrl} alt='image of user' className='avatar'/>
            </div>)
    }
}

PlayerPreview.propTypes = {playerName: PropTypes.any}