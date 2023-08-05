import React, { useContext, useEffect } from "react";
import { contextBox } from "../context/context";
import useTimer from "../customHooks/useTimer";
export default function Timer() {
    const data = useContext(contextBox);
  return (
    <div>
      <p className="timer">
        {data.whiteTimer}
      </p>
    </div>
  );
}
