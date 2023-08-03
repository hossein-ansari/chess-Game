import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function SelectMood() {
  return (
    <div>
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
  );
}
