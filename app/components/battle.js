import React from "react";
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/fa"
import PlayerInput from "./playerInput";
import {Instructions} from "./instructions";
import {Provider as ThemeProvider, Consumer as ThemeConsumer} from "../context/theme";

export default class Battle extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            theme : 'light',
            toggle : this.setState( ({theme}) => ({
                theme : theme === 'light' ? 'dark' : 'light'
            }))
        }
    }

    render() {
        return (
            <ThemeProvider value={this.state}>
                <React.Fragment>
                    <ThemeConsumer>
                        { (data) =>  <div className={data.theme}>
                            <h1>Instructions</h1>
                            <button onClick={() => data.toggle}>Toggle mode!</button>
                            <Logos_EN/>
                            <div className='battle-container'>
                                <Instructions/>

                            </div>
                        </div>}
                    </ThemeConsumer>


                </React.Fragment>
            </ThemeProvider>

        )
    }

    changeLang(data, lang) {
        data.toggle(lang)
    }
}

function Logos_IT() {
    return  <div className='battle-grid'>
        <div>
            <h3>la italia Gitub Users</h3>
            <FaUserFriends size={140}/>
        </div>

        <div>
            <h3>la italia  Battle</h3>
            <FaFighterJet size={140}/>
        </div>

        <div>
            <h3> la italia See the Winner</h3>
            <FaTrophy size={140}/>
        </div>
    </div>
}

function Logos({locale}){

    if (locale.locale === 'es'){
      return <Logos_ES/>
    }else if (locale.locale == 'it'){
        return <Logos_IT/>
    } else {
        return <Logos_EN/>
    }

}

function Logos_EN(){
    return  <div className='battle-grid'>
        <div>
            <h3>Enter Two Github Users</h3>
            <FaUserFriends size={140}/>
        </div>

        <div>
            <h3>Battle</h3>
            <FaFighterJet size={140}/>
        </div>

        <div>
            <h3>See the Winner</h3>
            <FaTrophy size={140}/>
        </div>
    </div>
}

function Logos_ES(){
    return  <div className='battle-grid'>
        <div>
            <h3>espaniol name</h3>
            <FaUserFriends size={140}/>
        </div>

        <div>
            <h3>espaniol jet</h3>
            <FaFighterJet size={140}/>
        </div>

        <div>
            <h3>espaniol winner</h3>
            <FaTrophy size={140}/>
        </div>
    </div>
}

