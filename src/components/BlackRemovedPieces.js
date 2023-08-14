import React, { useContext } from "react";
import { contextBox } from "../context/context";
import "../style/BlackRemovedPieces.css";
export default function BlackRemovedPieces() {
  const data = useContext(contextBox);
  return (
    <div>
      <ul className="removesPiecesUL">
        {data.allPieces.map((e) =>
          e.position[0] === 0 && e.position[1] === 0 && e.color === "black" ? (
            <li className={e.shape}></li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}
