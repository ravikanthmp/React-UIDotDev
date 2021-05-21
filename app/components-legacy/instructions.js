import PlayerInput from "./playerInput";
import PlayerPreview, {PlayerPreview2} from "./playerPreview"
import React from 'react';
import ReactDOM from 'react-dom';
import Results from "./results";
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'

export class Instructions extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handlePlayerSubmission = this.handlePlayerSubmission.bind(this)
        this.state = {

        }
        this.onReset = this.onReset.bind(this)
    }

    handlePlayerSubmission(id, playername){
        this.setState({
            [id] : playername
        })
    }

    onReset(player){
        this.setState({
            [player] : null
        })
    }

    render() {
        const {player1, player2} = this.state;
        console.log(`player1 is ` + player1)
        return (<div><div className='battle-grid'>
            {player1 ? <PlayerPreview2 playerName={player1} onReset={() => this.onReset('player1')}/> :
                <PlayerInput id='player1'
                             playerLabel='player1'
                             handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}

            {player2 ? <PlayerPreview2 playerName={player2} onReset={() => this.onReset('player2')}/> :
                <PlayerInput id='player2'
                             playerLabel='player2'
                             handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}
        </div>
                <div  className='battle-grid grid-centered'>{player1 && player2 && <Link to={
                    {
                        pathname : `/results`,
                        search : `player1=${player1}&player2=${player2}`
                    }
                }>Battle!</Link>}
                </div>



        </div>)
        // if (!battle){
        //     return
        // }else {
        //     return (<Results player1={player1} player2={player2} onReset={this.resetBattle}/>)
        // }
    }

}
