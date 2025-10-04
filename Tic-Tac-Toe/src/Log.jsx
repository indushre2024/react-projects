export default function Log({moves}){
 return (
    <div id="log">
        {moves.map((move)=><li key={`${move.box.row}-${move.box.col}`}>{move.player} chose {`(${move.box.row},${move.box.col})`} </li>)}
    </div>
 );
}