import React, { useContext } from "react";
import ChessBoard from "./ChessBoard";
import "../style/GameScreen.css";
import BlackTimer from "./BlackTimer";
import WhiteTimer from "./WhiteTimer";
import { Navigate } from "react-router-dom";
import { contextBox } from "../context/context";
import PopUpWon from "./PopUpWon";
import ChangeRole from "./ChangeRole";
import BlackRemovedPieces from "./BlackRemovedPieces";
import WhiteRemovedPieces from "./WhiteRemovedPieces";
export default function GameScreen() {
  const data = useContext(contextBox);
  return (
    <div className={`App ${data.whoWon !== undefined ? "wonBGI" : ""}`}>
      {data.gameMood ? null : <Navigate to={"/"} />}
      {data.whoWon === undefined ? (
        <>
          <div>
            {" "}
            <BlackRemovedPieces />
            <WhiteTimer />
          </div>

          <div className="chessBoard">
            <ChessBoard />
          </div>
          <div>
            {" "}
            <BlackTimer />
            <WhiteRemovedPieces />
          </div>
        </>
      ) : (
        <PopUpWon />
      )}
      {data.changeRolePopUp[0] === true && data.whoWon === undefined ? (
        <ChangeRole />
      ) : (
        ""
      )}
    </div>
  );
}
