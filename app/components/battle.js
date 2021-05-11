import React from "react";
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/fa"
import PlayerInput from "./playerInput";
import {Instructions} from "./instructions";
import {LocaleContext} from "./localeContext";

export default class Battle extends React.Component{

    render() {
        return (
            <LocaleContext.Provider value = {{locale : 'jp'}}>
                <React.Fragment>
                    <h1>Instructions</h1>
                    <div className='battle-container'>

                        <LocaleContext.Consumer>
                            {
                                (data) => <button onClick={() => this.changeLang(data, 'es')}>Click for spanish</button>}
                        </LocaleContext.Consumer>

                        <LocaleContext.Consumer>
                            {
                                (data) =>  <Logos locale={data}/>
                            }
                        </LocaleContext.Consumer>

                        <Instructions/>

                    </div>

                </React.Fragment>
            </LocaleContext.Provider>

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

