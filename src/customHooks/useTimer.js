import React, { useContext } from "react";
import { contextBox } from "../context/context";
function useTimer(min) {
    const data = useContext(contextBox)
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
        data.setWhiteTimer([ minute,second ]);
      }, 1000);
    }
  }
export default useTimer;
