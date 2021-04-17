import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function LanguageNavBar({langs, updateLanguage, getLanguage}){

    console.log(`this is ${this}`)
    return (
        <ul className="flex-center">
            {langs.map(
                lang =>
                    <li key={lang}>
                        <button className="btn-clear nav-link"
                                onClick={() => updateLanguage(lang)}
                                style={getLanguage() === lang ? {color : 'red'} : {color : null}}
                        >
                            {lang}
                        </button>
                    </li>
            )
            }
        </ul>
    )

}

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

    getLanguage(){
        return this.state.selectedLanguage;
    }

    render() {
        let p = {
            langs : ['a','b'],
            updateLanguage : this.updateLanguage
        }
       return <LanguageNavBar
                    langs={['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'] }
                    updateLanguage={this.updateLanguage.bind(this)}
                    getLanguage={this.getLanguage.bind(this)}
       />
    }
}

Popular.propTypes = {
    languages : PropTypes.arrayOf(PropTypes.string).isRequired
}