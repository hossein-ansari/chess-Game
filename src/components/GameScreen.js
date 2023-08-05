import React from "react";
import ChessBoard from "./ChessBoard";
import '../style/GameScreen.css'
export default function GameScreen() {
 
  return (
    <div className="App">
      <div className="chessBoard">
        <ChessBoard />
      </div>
    </div>
  );
}
