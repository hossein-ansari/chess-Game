import React, { useContext } from "react";
import { contextBox } from "../context/context";
function useTimer(min, sec) {
  const data = useContext(contextBox);
  let second = sec;
  let minute = min;
  setInterval(() => {
    if (second === 0) {
      second = 59;
      minute -= 1;
    }
    if (second === 0 && minute === 0) {
      return "Time Over";
    }
    second -= 1;
    console.log(data.whiteTimer);
  }, 1000);
  data.setWhiteTimer({ minutes: minute, seconds: second });
}
export default useTimer;
