import React, { useContext } from "react";
import { contextBox } from "../context/context";
import "../style/ChessBoard.css";
export default function ChessBoard() {
  const data = useContext(contextBox);
  function selectPiece(e) {
    data.pieces.forEach((P) => {
      if (e.target.className.includes(P.role)) {
      }
    });
  }
  return (
    <ul>
      {data.chessHouses.map((e) => (
        <li
          key={e.spot}
          onClick={(e) => selectPiece(e)}
          className={`${e.color} ${
            //render pieces
            e.spot[1] === "7" ? "blackPawn" : ""
          } 
            ${e.spot === "a8" || e.spot === "h8" ? "blackRook" : ""}
            ${e.spot === "b8" || e.spot === "g8" ? "blackKnight" : ""}
            ${e.spot === "c8" || e.spot === "f8" ? "blackBishop" : ""}
            ${e.spot === "e8" ? "blackKing" : ""}
            ${e.spot === "d8" ? "blackQueen" : ""}
            ${e.spot[1] === "2" ? "whitePawn" : ""}
            ${e.spot === "a1" || e.spot === "h1" ? "whiteRook" : ""}
            ${e.spot === "b1" || e.spot === "g1" ? "whiteKnight" : ""}
            ${e.spot === "c1" || e.spot === "f1" ? "whiteBishop" : ""}
            ${e.spot === "e1" ? "whiteKing" : ""}
            ${e.spot === "d1" ? "whiteQueen" : ""}
    
          `}
        >
          {e.spot}
        </li>
      ))}
    </ul>
  );
}
