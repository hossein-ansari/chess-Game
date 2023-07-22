import React, { useContext } from "react";
import { contextBox } from "../context/context";
// import "../style/ChessPieces.css";
export default function ChessPieces(props) {
  const spot = props.spots;
  const data = useContext(contextBox);
  function changeCordPiece(e) {
    data.suggestions.forEach((C,index) => {
      if (spot.spot.X === C.X && spot.spot.Y === C.Y) {
        const allPiecesCopy = [...data.allPieces];
        const oldCoordinate = allPiecesCopy.find(
          (P) =>
            P.position[0] === data.suggestions[0].position[0] &&
            P.position[1] === data.suggestions[0].position[1]
        );

        if (C.canMoveHandler === true) {

          oldCoordinate.position = [C.X,C.Y];
          data.setAllPieces(allPiecesCopy);
          data.setSuggestions([])
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
      {data.allPieces.map((e) =>
        spot.spot.X === e.position[0] && spot.spot.Y === e.position[1] ? (
          <li
            onClick={(E) => e.moveMent(e, E)}
            key={e}
            className={e.shape}
          ></li>
        ) : (
          ""
        )
      )}
    </li>
  );
}
