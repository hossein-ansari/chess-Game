import React, { useContext, useEffect } from "react";
import { contextBox } from "../context/context";
import useTimer from "../customHooks/useTimer";
export default function Timer() {
    const data = useContext(contextBox);


      useTimer(9,59)

  return (
    <div>
      <p className="timer">
        {data.whiteTimer.minutes}:{data.whiteTimer.seconds}
      </p>
    </div>
  );
}
