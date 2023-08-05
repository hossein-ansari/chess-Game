import React, { useContext, useEffect } from "react";
import { contextBox } from "../context/context";
import "../style/Timer.css";
import useTimer from "../customHooks/useTimer";
export default function BlackTimer() {
  const data = useContext(contextBox);
  return (
    <div>
      <p className="timer">{data.whiteTimer}</p>
    </div>
  );
}
