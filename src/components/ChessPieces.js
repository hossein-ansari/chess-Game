import React, { useContext, useMemo } from "react";
import { contextBox } from "../context/context";
// import "../style/ChessPieces.css";
export default function ChessPieces(props) {
  const spot = props.spots;
  const data = useContext(contextBox);
  function changeCordPiece(e) {
    data.suggestions.forEach((C, index) => {
      if (spot.spot.X === C.X && spot.spot.Y === C.Y) {
        // find piece
        let allPiecesCopy = [...data.allPieces];
        let oldCoordinate = allPiecesCopy.find(
          (P) =>
            P.position[0] === data.suggestions[0].position[0] &&
            P.position[1] === data.suggestions[0].position[1]
        );
        console.log(C);
        // move and fight
        if (C.canMoveHandler === true) {
          let RSDER = allPiecesCopy.find(
            (P) =>
              P.position[0] === C.X &&
              P.position[1] === C.Y
          );
          if (RSDER !== undefined) {
            
            allPiecesCopy = allPiecesCopy.filter(
              (P) => P !== RSDER
              );
              e.target.className = ''
          }
         
          console.log(e.target.className);
          
          oldCoordinate.position = [C.X, C.Y];
          data.setAllPieces(allPiecesCopy);
          data.setSuggestions([]);
        }
      }
    });
  }
  return (
    <li
      onClick={(e) => changeCordPiece(e)}
      className={`${spot.color} ${data.suggestions.map((C) =>
        spot.spot.X === C.X && spot.spot.Y === C.Y ? " suggestion " : null
      )}`}
    >
      {useMemo(()=>data.allPieces.map((e) =>
        spot.spot.X === e.position[0] && spot.spot.Y === e.position[1] ? (
          <li
            onClick={(E) => e.moveMent(e, E)}
            key={e}
            className={e.shape}
          ></li>
        ) : (
          ""
        )
      ),[data.allPieces]) }
    </li>
  );
}
