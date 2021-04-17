import React from "react";
import ReactDOM from 'react-dom';
import LangAsButton from "./langButton";
import fetchFromGithub from "./../utils/util"
import fetchRepos from "./../utils/util";

export default class Popular extends React.Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLanguage : 'All',
            repos : null,
            error : null
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

        this.fetchRepos(lang)
            .then(repos => {
                this.setState({
                    selectedLanguage : lang,
                    repos : repos,
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