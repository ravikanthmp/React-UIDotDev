import React from "react";
import ReactDOM from 'react-dom';
import PropType from 'prop-types';

export default class LangButton extends React.Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {lang, updateLanguage, selectedLanguage} = this.props
        console.log(`key is ${lang}`)
        return (
            <li>

                <button className="btn-clear nav-link"
                        onClick={() => updateLanguage(lang)}
                        style={lang===selectedLanguage ? {color : "red"} : null}>
                    {lang}
                </button>

            </li>
        )
    }
}

LangButton.propTypes = {
    lang : PropType.string.isRequired,
    updateLanguage : PropType.func.isRequired
}