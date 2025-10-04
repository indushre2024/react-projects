import {useState} from "react";


export default function GameBoard({board, handleMove}){

    return (
        <div id="game-board">
            {board.map((row, rowId)=>{
                return <ol key={rowId}>
                    {row.map((ele, colId)=>
                        <li key={colId}><button onClick = {()=>handleMove(rowId, colId)} disabled={ele!==null}>{ele}</button></li>
                    )}
                </ol>
            })}
        </div>
    );
}