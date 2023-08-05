import React, { useContext, useEffect, useState } from "react";
import { contextBox } from "../context/context";
import "../style/Timer.css";
import useTimer from "../customHooks/useTimer";
export default function WhiteTimer() {
    const data = useContext(contextBox)
    function roj() {
        let second = 0;
        let minute = min;
        if (min !== null) {
        setInterval(() => {
            if (second === 0) {
              second = 59;
              minute -= 1;
            }
            if (second === 0 && minute === 0) {
              return "Time Over";
            }
            second -= 1;
          }, 1000);
          data.setWhiteTimer([ minute,second ]);
        }
      }
  return (
    <div>
      <p className="timer">
        {data.whiteTimer[0].minutes} : {data.whiteTimer[0].seconds}
      </p>
    </div>
  );
}
