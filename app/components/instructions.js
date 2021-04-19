import PlayerInput from "./playerInput";
import PlayerPreview from "./playerPreview"
import React from 'react';
import ReactDOM from 'react-dom';

export class Instructions extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
        this.handlePlayerSubmission = this.handlePlayerSubmission.bind(this)

    }

    handlePlayerSubmission(id, playername){
        this.setState({
            [id] : playername
        })
    }

    render() {
        const {player1, player2} = this.state;
        console.log(`player1 is ` + player1)
        return (<div className='battle-grid'>
            {player1 ? <PlayerPreview playername={player1}/> :
                <PlayerInput id='player1'
                             playerLabel='player1'
                             handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}

            {player2 ? <PlayerPreview playername={player2}/> :
                <PlayerInput id='player2'
                             playerLabel='player2'
                             handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}

        </div>);
    }

}
