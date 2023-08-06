import React,{useContext} from "react";
import ChessBoard from "./ChessBoard";
import "../style/GameScreen.css";
import BlackTimer from "./BlackTimer";
import WhiteTimer from "./WhiteTimer";
import { Navigate } from "react-router-dom";
import { contextBox } from "../context/context";

export default function GameScreen() {
  const data = useContext(contextBox);

  return (
    <div className="App">
      {data.gameMood  ? null : <Navigate to={"/"} />}
      <WhiteTimer />
      <div className="chessBoard">
        <ChessBoard />
      </div>
      <BlackTimer />
    </div>
  );
}
