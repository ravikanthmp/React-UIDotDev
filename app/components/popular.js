import React from "react";
import ReactDOM from 'react-dom';
import LangAsButton from "./langButton";
import fetchFromGithub from "./../utils/util"
import fetchRepos from "./../utils/util";
import PropTypes from 'prop-types'

export default class Popular extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLanguage : 'All',
            repos : null,
            error : null,
            savedRepos : {}
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    updateLanguage(lang){
        this.setState({
            selectedLanguage : lang,
            repos : null,
            error : null
        })

        const {savedRepos} = this.state;
        if (!savedRepos[lang]){
            console.log(`fetching from github. current state is ` + JSON.stringify(this.state, null,  2))
            this.fetchRepos(lang)
                .then(repos => {
                    const {savedRepos} = this.state;
                    savedRepos[lang] = repos;
                    this.setState({
                        selectedLanguage : lang,
                        repos : repos,
                        savedRepos : savedRepos,
                        error : null
                    })
                })
                .catch(err => {
                    this.setState({
                        selectedLanguage : lang,
                        repos : null,
                        error : err
                    })
                })
        }else {
            console.log(`fetching from cache. current state is ` + JSON.stringify(this.state, null, 2))
            this.setState({
                selectedLanguage : lang,
                repos : savedRepos[lang],
                error : null
            })
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
        return this.state.repos == null && this.state.error == null;
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    render() {

        return <React.Fragment>
                <PopularUI languages={['Java', 'C']} updateLanguage={this.updateLanguage} selectedLanguage={this.state.selectedLanguage} isLoading={this.isLoading}/>
                {this.isLoading() && <p>Loading!</p>}
                {!this.isLoading() && <p>{JSON.stringify(this.state.repos)}</p>}
            </React.Fragment>

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