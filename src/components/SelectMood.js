import React from "react";
import { Link, NavLink } from "react-router-dom";
import chessBoardImg from "../image/chessBoardImg.png";
import "../style/SelectMood.css";
export default function SelectMood() {
  return (
    <div className="SelectMood">
      <div className="imgBar">
      <img src={chessBoardImg}/>
      </div>
      <div className="container">
        <form className="form">
        <label className="labelForm" >select your game mood</label>
          <select className="selectMoodOptions" name="gender">
            <option value="15">15 min</option>
            <option value="10">rapid</option>
            <option value="3">blitz</option>
            <option value="1">bullet</option>
          </select>
        </form>
        <button className="playBtn">
          {" "}
          <NavLink
            className={((act) => (act ? "active" : ""), "links")}
            to={"./game"}
          >
            play
          </NavLink>
        </button>
      </div>
    </div>
  );
}
