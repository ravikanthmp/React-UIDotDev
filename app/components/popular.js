import React from "react";
import ReactDOM from 'react-dom';

export default class Popular extends React.Component{


    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLanguage : 'All'
        }
    }

    updateLanguage(lang){
        this.setState({
            selectedLanguage : lang
        })
    }

    render() {

        return (
            <ul className="flex-center">
                {this.props.languages.map(
                    lang =>
                        <li key={lang}>
                            <button className="btn-clear nav-link" onClick={() => this.updateLanguage(lang)}>
                                {lang}
                            </button>
                        </li>
                )
                }
                <li>{this.state.selectedLanguage}</li>
            </ul>
        )
    }
}