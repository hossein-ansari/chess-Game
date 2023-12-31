import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "../style/SelectMood.css";
import { contextBox } from "../context/context";
export default function SelectMood() {

  const data = useContext(contextBox);
  const [inNavigate, setInNavigate] = useState(false);
  const [inAnimate, setInAnimate] = useState(false);
  function setGameMood(e) {
    data.setGameMood(parseInt(e.target.value));
    const times = [parseInt(e.target.value), 0 ]
    data.setBlackTimer(times);
    data.setWhiteTimer(times);
  }
  function NavigatePage() {
    setInAnimate(true);
    setTimeout(() => {
      setInNavigate(true);
    }, 1500);
  }
  return (
    <div className="SelectMood">
      <div
        className={`container ${inAnimate && data.gameMood ? "playGame" : ""}`}
      >
        <form className="form">
          <label className="labelForm">select your game mood</label>
          <select
            onChange={(e) => setGameMood(e)}
            className="selectMoodOptions"
            name="gender"
          >
            <option selected hidden>
              Choose here
            </option>
            <option className="selectMoodOptionsOption" value="15">15 min</option>
            <option className="selectMoodOptionsOption" value="10">rapid</option>
            <option className="selectMoodOptionsOption" value="3">blitz</option>
            <option className="selectMoodOptionsOption" value="1">bullet</option>
          </select>
        </form>
        <button
          onClick={data.gameMood !== undefined ? NavigatePage : undefined}
          className="playBtn"
        >
          play
        </button>
      </div>
      {inNavigate && data.gameMood ? <Navigate to={"./game"} /> : null}
    </div>
  );
}
