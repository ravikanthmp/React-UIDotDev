import React from 'react';
import {fetchReposForUser, fetchUser} from './../utils/util'
import Loading from "./loading";
import {ProfileItems} from "./profileItems";
import {parse} from 'query-string'

export default class Results extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading : true
        }
    }

    getProfile(user){
        return fetchUser(user)
            .then(data => data.json())
            .then(profile => {
                if (profile.message){
                    throw Error(`Error from github for user ${user}. Message is ${profile.message}`)
                }else {
                    return profile;
                }
            })

    }

    getRepos(user){
        return fetchReposForUser(user)
            .then(data => data.json())
            .then(profile => {
                if (profile.message){
                    throw Error(`Error from github for user ${user}. Message is ${profile.message}`)
                }else {
                    return profile;
                }
            })

    }

    getUserData(userName){
        return Promise.all([this.getProfile(userName), this.getRepos(userName)])
            .then( ([profile, data]) => {
                  let res =  {profile, score : 3*profile.followers + this.getStarCount(data)}
                  return (res);
            }
            )
    }

    componentDidMount() {
        const {player1, player2} = parse(this.props.location.search);
        Promise.all([this.getUserData(player1), this.getUserData(player2)])
            .then( ([player1Results, player2Results]) => {
                this.setState({
                    player1 : player1Results,
                    player2 : player2Results,
                    loading : false
                })
            })
            .catch( ({errorMessage}) => {
                console.log(JSON.stringify(errorMessage))
                this.setState({
                    error : errorMessage,
                    loading : false
                })
            })
    }

    figureWinner(mine, other){
        if (mine === other){
            return "Tie"
        }else if (mine > other){
            return "Winner"
        }else {
            return "Loser"
        }
    }

    render() {
        const {player1, player2, error, loading} = this.state
        if (error){
            return <div><h1>Error</h1></div>
        }else if (loading){
            return <Loading/>
        }else {
            return <div>
                <div className='battle-grid grid-stretch'>
                    <Player playerProfile={player1.profile} winnerLoser={this.figureWinner(player1.score, player2.score)} score={player1.score}>
                        <ProfileItems playerProfile={player1.profile}/>
                    </Player>
                    <Player playerProfile={player2.profile} winnerLoser={this.figureWinner(player2.score, player1.score)} score={player2.score}>
                        <ProfileItems playerProfile={player2.profile}/>
                    </Player>
                </div>
                <button onClick={this.props.onReset}>Reset</button>
            </div>
        }
    }

    getStarCount(data) {
       return  data.reduce( (count, repo) => count + 5*repo['stargazers_count'] + 3*repo['forks'] - 2*repo['open_issues'], 0)
    }

}

function Player({playerProfile, winnerLoser, score, children}) {
    const {name, avatar_url, login, html_url} = playerProfile;
    return (<li className={'grid-cell'} key={name}>
        <h1 className='center-text'>{winnerLoser}</h1>
        <img src={avatar_url} className='avatar'/>
        <h3 className={'center-text'}>Score {score}</h3>
        <a href={html_url}>
            <h2 className={'center-text'}>{login}</h2>
        </a>
        {children}
    </li>)
}

