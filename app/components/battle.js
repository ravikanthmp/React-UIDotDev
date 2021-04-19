import React from "react";
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/fa"
import PlayerInput from "./playerInput";
import {Instructions} from "./instructions";

export default class Battle extends React.Component{

    render() {
        return (
            <React.Fragment>
                <h1>Instructions</h1>
                <div className='battle-container'>

                    <div className='battle-grid'>
                        <div>
                            <h3>Enter Two Github Users</h3>
                            <FaUserFriends size={140}/>
                        </div>

                        <div>
                            <h3>Battle</h3>
                            <FaFighterJet size={140}/>
                        </div>

                        <div>
                            <h3>See the Winner</h3>
                            <FaTrophy size={140}/>
                        </div>
                    </div>

                    <Instructions/>

                </div>

            </React.Fragment>
        )
    }

}

