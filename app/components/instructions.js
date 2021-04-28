import PlayerInput from "./playerInput";
import PlayerPreview from "./playerPreview"
import React from 'react';
import ReactDOM from 'react-dom';
import Results from "./results";

export class Instructions extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {battle : false}
        this.handlePlayerSubmission = this.handlePlayerSubmission.bind(this)
        this.onReset = this.onReset.bind(this)
        this.resetBattle = this.resetBattle.bind(this)
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

    resetBattle(){
        this.setState({battle : false})
    }

    render() {
        const {player1, player2, battle} = this.state;
        console.log(`player1 is ` + player1)
        if (!battle){
            return (<div><div className='battle-grid'>
                {player1 ? <PlayerPreview playerName={player1} onReset={() => this.onReset('player1')}/> :
                    <PlayerInput id='player1'
                                 playerLabel='player1'
                                 handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}

                {player2 ? <PlayerPreview playerName={player2} onReset={() => this.onReset('player2')}/> :
                    <PlayerInput id='player2'
                                 playerLabel='player2'
                                 handleSubmit={ (id, playerName) =>  this.handlePlayerSubmission(id, playerName) }/>}
            </div>
                <div  className='battle-grid grid-centered'>{player1 && player2 && <button onClick={() => this.setState({battle:true})}>Battle!</button>} </div>
            </div>)
        }else {
            return (<Results player1={player1} player2={player2} onReset={this.resetBattle}/>)
        }
    }

}
