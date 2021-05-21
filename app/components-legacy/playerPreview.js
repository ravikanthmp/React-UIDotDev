import {fetchUser} from "../utils/util";
import React, {useState, useEffect} from "react";
import {FaTimesCircle} from "react-icons/all";

export function PlayerPreview2({playerName, backgroundColor, onReset}) {

    const [avatarUrl, setAvatarUrl] = useState("");

    useEffect(() => {
        console.log(playerName);

        fetchUser(playerName.trim())
            .then(response => response.json())
            .then(data2 => {
                if (!data2['avatar_url']) {
                    throw Error("Lol!")
                } else {
                    return data2['avatar_url'];
                }
            })
            .then((avatarUrl) => {
                setAvatarUrl(avatarUrl)
            })
    }, [playerName])

    return (<div className='battle-grid-fixed bg-gray' style={{backgroundColor: {backgroundColor}}}>
        <div>
            <img src={avatarUrl} alt='image of user' className='avatar-small'/>
        </div>
        <h3>{playerName}</h3>
        <button onClick={() => onReset()}>
            <FaTimesCircle size={26}/>
        </button>
    </div>)
}