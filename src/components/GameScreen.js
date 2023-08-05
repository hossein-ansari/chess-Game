import React from "react";
import ChessBoard from "./ChessBoard";
import '../style/GameScreen.css'
import Timer from './BlackTimer'
export default function GameScreen() {
 
  return (
    <div className="App">
        <Timer />
      <div className="chessBoard">
        <ChessBoard />
      </div>
        <Timer />
    </div>
  );
}
