import React, { useContext, useMemo, useState } from "react";
import { contextBox } from "../context/context";
import BlackRemovedPieces from "./BlackRemovedPieces";
export default function ChessPieces(props) {
  const spot = props.spots;
  const data = useContext(contextBox);
  function changeCordPiece(e) {
    data.suggestions.forEach((C) => {
      if (spot.spot.X === C.X && spot.spot.Y === C.Y) {
        // find piece
        let allPiecesCopy = [...data.allPieces];
        let oldCoordinate = allPiecesCopy.find(
          (P) =>
            P.position[0] === data.suggestions[0].position[0] &&
            P.position[1] === data.suggestions[0].position[1]
        );
        // move and fight
        if (oldCoordinate.color === data.turn) {
          if (C.canMoveHandler === true) {
            oldCoordinate.position = [C.X, C.Y];
            let removedPiece = allPiecesCopy.find(
              (P) =>
                P.position[0] === C.X &&
                P.position[1] === C.Y &&
                P.color !== oldCoordinate.color
            );
            if (
              oldCoordinate.role === "Pawn" &&
              (oldCoordinate.position[1] === 8 ||
                oldCoordinate.position[1] === 1)
            ) {
              data.setChangeRolePopUp([true, oldCoordinate.color,C.X, C.Y,e.clientX,e.clientY]);
              ;
            }
            if (removedPiece !== undefined) {
              removedPiece.position = [0, 0];

              if (removedPiece.role === "King") {
                data.setWhoWon(oldCoordinate.color);
              }
            }
            data.setAllPieces(allPiecesCopy);
            data.setSuggestions([]);
            if (data.turn === "white") {
              data.setTurn("black");
            } else {
              data.setTurn("white");
            }
          }
        }
      }
    });
  }
  // console.log(changeRolePopUp);
  return (
    <li
      onClick={(e) => changeCordPiece(e)}
      className={`${spot.color} ${data.suggestions.map((C) =>
        spot.spot.X === C.X &&
        spot.spot.Y === C.Y &&
        C.canMoveHandler === true &&
        data.suggestions[0].color === data.turn
          ? " suggestion "
          : null
      )}`}
    >
      {data.allPieces.map((e) =>
        spot.spot.X === e.position[0] && spot.spot.Y === e.position[1] ? (
          <li onClick={(E) => e.moveMent(e, E)} className={e.shape}></li>
        ) : (
          ""
        )
      )}

    </li>
  );
}
