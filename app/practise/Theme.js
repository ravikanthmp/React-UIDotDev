import React from 'react'
import {FaLightbulb, FaCloudMoon} from "react-icons/all";


export default function Theme(){

    let [mode, setMode] = React.useState('light');

    let toggle = () => {
        if (mode === 'light'){
            setMode('dark')
        }else {
            setMode('light')
        }
    }

    return (<div className={mode}>
        {mode === 'dark' ? <button onClick={toggle}><FaCloudMoon size={40}/></button>
      :  <button onClick={toggle}> <FaLightbulb size={40}/></button>}
    </div>)
}
