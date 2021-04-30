import {FaCodeBranch, FaExclamationTriangle, FaStar, FaUser} from "react-icons/fa";
import React from "react";
import ReactTooltip from "react-tooltip";
import * as PropTypes from "prop-types";

export class ProfileItems extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            location : false
        }
    }

    onMouseOver(id){
        this.setState({
            [id] : true
        })
    }

    onMouseOut(id){
        this.setState({
            [id] : false
        })
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

            {{location} && (<div onMouseOver={() => this.onMouseOver('location')} onMouseLeave={() => this.onMouseOut('location')}>
                <li data-tip data-for="registerTip">
                    <FaStar size={22}/>
                    {location}
                </li>

                <ReactTooltip id="registerTip" place="top" effect="solid">
                    Tooltip for the location button
                </ReactTooltip>

            </div>)}

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