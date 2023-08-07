import React, { useContext } from "react";
import { contextBox } from "../context/context";
import { Link, NavLink, Navigate } from "react-router-dom";
import "../style/PopUpWon.css";
export default function PopUpWon() {
  const data = useContext(contextBox);
  return (
    <div className="PopUpWon">
      <div className="winBar">
        <h1>{data.whoWon} won</h1>
        <button className="playAgain">
          <NavLink to={"/"}>play again</NavLink>
        </button>
      </div>
    </div>
  );
}
