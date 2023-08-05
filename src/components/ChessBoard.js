import React, { useContext, useEffect, useRef } from "react";
import { contextBox } from "../context/context";
import "../style/ChessBoard.css";
import ChessPieces from "./ChessPieces";
export default function ChessBoard() {
  const data = useContext(contextBox);
  console.log(data.gameMood);
  return (
    <ul>
      {data.chessHouses.map((e) => (
        <ChessPieces spots={e}></ChessPieces>
      ))}
    </ul>
  );
}
