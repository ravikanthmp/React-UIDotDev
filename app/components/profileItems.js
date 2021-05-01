import {FaCodeBranch, FaExclamationTriangle, FaStar, FaUser} from "react-icons/fa";
import React from "react";
import ReactTooltip from "react-tooltip";
import * as PropTypes from "prop-types";
import Tooltip from "./tooltip";

export class ProfileItems extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            location : false
        }
    }

    render() {
        let {playerProfile} = this.props;
        const {name, location, company, followers, following} = playerProfile;
        console.log(`name is ${name}`)
        return (<ul style={{justifySelf: 'center'}}>
            <li>
                <FaUser size={22}/>
                {name}
            </li>

            {{location} && (<Tooltip>
                <FaStar size={22}/>
                {location}
            </Tooltip>)}

            {{company} && (<li>
                <FaCodeBranch size={22}/>
                {company}
            </li>)}

            {{followers} && (<li>
                <FaExclamationTriangle size={22}/>
                {followers}
            </li>)}

            {{following} && (<li>
                <FaExclamationTriangle size={22}/>
                {following}
            </li>)}
        </ul>)
    }
}

ProfileItems.propTypes = {playerProfile: PropTypes.any}