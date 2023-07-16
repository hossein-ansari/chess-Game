import React, { useContext } from "react";
import { contextBox } from "../context/context";
// import "../style/ChessPieces.css";
export default function ChessPieces(props) {
  const spot = props.spots;
  const data = useContext(contextBox);

  return (
    <li className={spot.color}>
      {data.allPieces.map((e) =>
        spot.spot.X === e.position[0] && spot.spot.Y === e.position[1] ? (
          <li key={e} className={e.shape}>{spot.spot.dot}</li>
        ) : (
          ''
        )
      )}
    </li>
  );
}
