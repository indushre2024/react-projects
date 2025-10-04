import {useState} from "react";

export default function Player({symbol, isActive,players,...props}){
    const [playerName, setPlayerName] = useState(players[symbol]);
    const [isEditing, setIsEditing] = useState(false);
    function clickhandler(){
        setIsEditing(editing=>~editing);
        if(isEditing) players[symbol] = playerName;
    }
    let playerNameElement = <span className="player-name">{playerName}</span>
    if(isEditing){
        playerNameElement = <input type="text" required value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
    }
    
    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickhandler} >{isEditing?'Save':'Edit'}</button>
        </li>
    );
}