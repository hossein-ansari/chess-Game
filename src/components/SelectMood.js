import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/SelectMood.css";
export default function SelectMood() {
  return (
    <div className="SelectMood">
      <div>
       <img src="../image/blackKing.png"  width="460" height="345" />
      </div>
      <div className="container">
        <form>
          <select id="gender" name="gender">
            <option value="none" selected>
              game mood
            </option>
            <option value="female">15 min</option>
            <option value="male">rapid</option>
            <option value="other">blitz</option>
            <option value="other">bullet</option>
          </select>
        </form>
        <button>
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
