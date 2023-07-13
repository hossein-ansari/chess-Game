import React, { useContext } from "react";
import { contextBox } from "../context/context";
import "../style/ChessBoard.css";
export default function ChessBoard() {
  const data = useContext(contextBox);
  function selectPiece(E, e) {
    data.pieces.forEach((P) => {
      if (E.target.className.includes(P.role)) {
        // set position
        P.position = [e.spot.row, e.spot.column, e.spot.dot];
        P.movement(P, E);
      }
    });
  }
  return (
    <ul>
      {data.chessHouses.map((e) => (
        <li>
          <li // ref={}
            onClick={(E) => selectPiece(E, e)}
            className={`${e.color} ${
              //render pieces
              e.spot.dot[1] === "7" ? "blackPawn" : ""
            } 
            ${e.spot.dot === "a8" || e.spot.dot === "h8" ? "blackRook" : ""}
            ${e.spot.dot === "b8" || e.spot.dot === "g8" ? "blackKnight" : ""}
            ${e.spot.dot === "c8" || e.spot.dot === "f8" ? "blackBishop" : ""}
            ${e.spot.dot === "e8" ? "blackKing" : ""}
            ${e.spot.dot === "d8" ? "blackQueen" : ""}
            ${e.spot.dot[1] === "2" ? "whitePawn" : ""}
            ${e.spot.dot === "a1" || e.spot.dot === "h1" ? "whiteRook" : ""}
            ${e.spot.dot === "b1" || e.spot.dot === "g1" ? "whiteKnight" : ""}
            ${e.spot.dot === "c1" || e.spot.dot === "f1" ? "whiteBishop" : ""}
            ${e.spot.dot === "e1" ? "whiteKing" : ""}
            ${e.spot.dot === "d1" ? "whiteQueen" : ""}
          `}
          ></li>
        </li>
      ))}
    </ul>
  );
}
