import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import {calculateWinner} from './helpers';
import "./styles/root.scss"

const App = () => {

  const [history,setHistory] = useState([ {board: Array(9).fill(null), isXNext: true} ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  console.log('history :>> ', history);


  const winner = calculateWinner(current.board);
   const message = winner ? `Winner is ${winner}` : `Next Player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = (position) => {

    if(current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if(pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat( {board: newBoard, isXNext: !last.isXNext} )
    });

    setCurrentMove(prev => prev + 1);
  };



  return (
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h3>{message}</h3>
    <Board board = {current.board} handleSquareClick = {handleSquareClick} />
    <History history={ history }/>
  </div>
  );
};

export default App;