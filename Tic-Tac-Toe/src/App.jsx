import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "./assets/WinningCombinations";
import GameOver from "./GameOver";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const players = {X:'Player 1', O:'Player 2'};

function checkGameOver(gameBoard){
  let winner;
  for(let combination of WINNING_COMBINATIONS){
    let first = gameBoard[combination[0].row][combination[0].column];
    let second = gameBoard[combination[1].row][combination[1].column];
    let third = gameBoard[combination[2].row][combination[2].column];
    if(first && first===second && first===third)
      winner = first;
  }
  return winner;
}

function updateGameBoard(moves,gameBoard){
  // gameBoard = [...gameBoard.map(row=>[...row])];
  for(let move of moves){
        gameBoard[move.box.row][move.box.col] = move.player;
    }
}

function App() {
  const [moves, setMoves] = useState([]);
  const isDraw = moves.length===9;
  let gameBoard = [...initialBoard.map(row=>[...row])];
  updateGameBoard(moves,gameBoard);
  let winner = checkGameOver(gameBoard);
  let currentPlayer = 'X';
  if(moves.length>0 && moves[0].player==='X'){
    currentPlayer = 'O';
  }

  function handleMove(row, col){
    let move = {box:{row:row, col:col},player:currentPlayer};
    const newMoves = [...moves];
    newMoves.unshift(move);
    setMoves(()=>newMoves);
  }

  function handleRematch(){
    setMoves([]);
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id = 'players' className="highlight-player">
          <Player symbol='X' isActive={currentPlayer==='X'} players={players} ></Player>
          <Player symbol='O' isActive = {currentPlayer==='O'} players={players}></Player>
        </ol>
        <GameBoard board = {gameBoard} handleMove = {handleMove}/>
        {(isDraw || winner)? <GameOver winner={players[winner]} handleRematch={handleRematch}/>:''}
      </div>
      <Log moves={moves}/>
      
    </main>
  )
}

export default App
