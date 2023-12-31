import React, { useContext, useEffect, useRef } from "react";
import { contextBox } from "../context/context";
import "../style/ChessBoard.css";
import ChessPieces from "./ChessPieces";
import { Navigate } from "react-router-dom";
export default function ChessBoard() {
  const data = useContext(contextBox);
  
  return (
    <ul>
      {data.chessHouses.map((e) => (
        <ChessPieces spots={e}></ChessPieces>
        ))}
        
    </ul>
  );
}
