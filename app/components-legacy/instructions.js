import PlayerInput from "./playerInput";
import PlayerPreview from "./playerPreview"
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Instructions2() {
    const [player1, setPlayer1] = useState(null)
    const [player2, setPlayer2] = useState(null)

    let onSubmit = (id, playername) => {
        switch (id) {
            case 'player1':
                setPlayer1(playername)
                break;
            case 'player2':
                setPlayer2(playername);
                break;
        }
    }

    let onReset = (id) => {
        switch (id) {
            case 'player1':
                setPlayer1(null)
                break;
            case 'player2':
                setPlayer2(null);
                break;
        }
    }

    return (<div>
        <div className='battle-grid'>
            {player1 ? <PlayerPreview playerName={player1} onReset={() => onReset('player1')}/> :
                <PlayerInput id='player1'
                             playerLabel='player1'
                             handleSubmit={(id, playerName) => onSubmit(id, playerName)}/>}

            {player2 ? <PlayerPreview playerName={player2} onReset={() => onReset('player2')}/> :
                <PlayerInput id='player2'
                             playerLabel='player2'
                             handleSubmit={(id, playerName) => onSubmit(id, playerName)}/>}
        </div>
        <div className='battle-grid grid-centered'>{player1 && player2 && <Link to={
            {
                pathname: `/results`,
                search: `player1=${player1}&player2=${player2}`
            }
        }>Battle!</Link>}
        </div>
    </div>)
}
