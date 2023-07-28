import React, { useContext, useEffect, useRef } from "react";
import { contextBox } from "../context/context";
import "../style/ChessBoard.css";
import ChessPieces from "./ChessPieces";
export default function ChessBoard() {
  const data = useContext(contextBox);
  useEffect(() => {
    data.removedPieces.forEach((r) => {
      console.log(r);
      data.allPieces.splice(r,1);
    });
  }, [data.removedPieces]);
  return (
    <ul>
      {data.chessHouses.map((e) => (
        <ChessPieces spots={e}></ChessPieces>
      ))}
    </ul>
  );
}
