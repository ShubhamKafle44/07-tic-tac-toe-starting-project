import React from 'react'
import { useState } from 'react'
const Player = ({ initialName, symbol }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName)
    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing)
    }

    function handleChange(event) {
        setplayerName(event.target.value)
    }


    return (
        <li>
            <span className="player">
                {isEditing ?
                    <input type='text' required value={playerName} onChange={handleChange} />
                    :
                    <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}> {isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player
