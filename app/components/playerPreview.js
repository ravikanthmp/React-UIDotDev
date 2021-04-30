import {fetchUser} from "../utils/util";
import React from "react";
import * as PropTypes from "prop-types";
import {FaTimesCircle} from "react-icons/all";

export default class PlayerPreview extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            avatarUrl : ""
        }
    }

    componentDidMount() {
        console.log(this.props.playerName)
        fetchUser(this.props.playerName.trim())
            .then(response => response.json())
            .then(data2 => {
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

        return (<div className='battle-grid-fixed bg-gray' style={{backgroundColor : this.props.backgroundColor}}>
            <div>
                <img src={this.state.avatarUrl} alt='image of user' className='avatar-small'/>
            </div>
            <h3>{playerName}</h3>
            <button onClick={() => this.props.onReset()}>
                <FaTimesCircle size={26}/>
            </button>
        </div>)
    }
}

PlayerPreview.propTypes = {playerName: PropTypes.any}
PlayerPreview.defaultProps = {backgroundColor : "yellow"}