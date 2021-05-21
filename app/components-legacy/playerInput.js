import React from 'react';

export default class PlayerInput extends React.Component{

    state = {
        id : this.props.id,
        username : ""
    };

    handleChange = (e) => {

        this.setState((prevState) => {
            return {
                ...prevState,
                username: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`player has submitted ${this.state.username}`)
        this.props.handleSubmit(this.state.id, this.state.username)

    }

    render() {
        console.log(this.props)
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>{this.props.playerLabel} </label>
            <input id={this.props.id}
                   placeholder='Enter Player name!'
                   onChange={this.handleChange}
                   value={this.state.username}
            />
            <button type='submit'>Submit!</button>
        </form>
    }
}

