import React, { useContext, useEffect, useState } from "react";
import { contextBox } from "../context/context";
import "../style/Timer.css";

export default function BlackTimer() {
  const data = useContext(contextBox);
 
  let timer = [...data.blackTimer];
 
    setTimeout(() => {
      if (timer[1] === 0) {
        timer[1] = 59;
        timer[0] -= 1;
      }

      if (timer[1] === 0 && timer[0] === 0) {
        console.log("tamam");
      }
      timer[1] -= 1;
      data.setBlackTimer(timer);
    }, 1000);
  

  return (
    <div>
      <p className="timer">
        {data.blackTimer[0]} : {data.blackTimer[1]}
      </p>
    </div>
  );
}
