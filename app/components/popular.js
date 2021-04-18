import React from "react";
import ReactDOM from 'react-dom';
import LangAsButton from "./langButton";
import fetchFromGithub from "./../utils/util"
import fetchRepos from "./../utils/util";
import PropTypes from 'prop-types'
import {FaGrinBeamSweat} from 'react-icons/fa'

export default class Popular extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLanguage : 'All',
            repos : {},
            error : null,
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    updateLanguage(lang){
        this.setState({
            selectedLanguage : lang,
            error : null
        })

        const savedRepos = this.state.repos[lang];
        if (!savedRepos){
            console.log(`fetching from github. current state is ` + JSON.stringify(this.state, null,  2))
            this.fetchRepos(lang)
                .then(data => {
                        this.setState( ({repos}) => {
                            repos[lang] = data;
                            return {
                                selectedLanguage : lang,
                                error : null,
                                repos : {
                                    ...repos,
                                    [lang] : data
                                }
                            }
                        })
                    }
                )
                .catch(err => {
                    this.setState({
                        selectedLanguage : lang,
                        error : err
                    })
                })
        }else {
            console.log(`fetching from cache. current state is ` + JSON.stringify(this.state, null, 2))
            return savedRepos;
        }
    }

    fetchRepos(lang){
        return fetchFromGithub(lang)
            .then(data => data.json())
            .then(data => {
                if (data.items){
                    return data.items
                }else {
                    throw Error('no data found!')
                }
            })
    }

    isLoading(){
        let {repos, selectedLanguage, error} = this.state
        return !repos[selectedLanguage] && !error
    }

    componentDidMount() {
        console.log(`component did mount!`)
        this.updateLanguage(this.state.selectedLanguage)
    }

    render() {

        const {repos, selectedLanguage, error} = this.state
        console.log(JSON.stringify(this.state, null, 2))
        return (<React.Fragment>
                <PopularUI languages={['Java', 'C', 'All']} updateLanguage={this.updateLanguage} selectedLanguage={selectedLanguage} isLoading={this.isLoading}/>

                {this.isLoading() && <p>Loading!</p>}
                <ReposGrid repos={repos[selectedLanguage]}/>
            </React.Fragment>)

    }
}

function PopularUI({languages, updateLanguage, selectedLanguage, isLoading}) {
    return (
        <React.Fragment>
            <ul className="flex-center">

                {languages.map(
                    lang => (
                    <LangAsButton lang={lang}
                                  updateLanguage={updateLanguage}
                                  selectedLanguage={selectedLanguage}
                                  key={lang}/>
                    ))
                }

            </ul>
        </React.Fragment>
    )
}

Popular.propTypes = {
    languages : PropTypes.arrayOf(PropTypes.string).isRequired
}


function ReposGrid({repos}){
    if (!repos){
        return null;
    }
    return (
        <ul className={'grid-container space-around'}>
            {repos.map((repo, index) => {

                const {id, name, owner, html_url, open_issues_count, stargazers_count, forks} = repo;
                const {avatar_url} = owner;
                return (<li className={'grid-cell'} key={id}>
                    <p>{index}</p>
                    <img src={avatar_url} style={{width : '100%'}}/>
                    <a href={html_url}>{name}</a>
                    <h3>{name}</h3>
                    <h3>Stars : {stargazers_count}</h3>
                    <h3>Forks : {forks}</h3>
                    <h3>Open Issues : {open_issues_count}</h3>

                </li>
                )
            } )}
        </ul>

    )
}

ReposGrid.propTypes = {
    repos : PropTypes.arrayOf(PropTypes.object).isRequired
}