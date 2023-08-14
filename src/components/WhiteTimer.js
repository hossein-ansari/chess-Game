import React, { useContext, useEffect, useState } from "react";
import { contextBox } from "../context/context";
import "../style/Timer.css";

export default function WhiteTimer() {
  const data = useContext(contextBox);
  
  let timer = [...data.whiteTimer];
  if (data.turn === 'white') {
    setTimeout(() => {
      if (timer[1] === 0 && timer[0] === 0) {
        let timeOver = 'white'
        if (data.turn === "white") {
          timeOver = 'black'
          data.setTurn(timeOver);
          data.setWhoWon(timeOver)
        } else {
          timeOver = 'white'
          data.setTurn(timeOver);
          data.setWhoWon(timeOver)
        }
      }
      if (timer[1] === 0) {
        timer[1] = 60;
        timer[0] -= 1;
      }
      timer[1] -= 1;
      data.setWhiteTimer(timer);
    }, 1000);
  }
  return (
    <div>
      <p className="timer">
        {data.whiteTimer[0]} : {data.whiteTimer[1]}
      </p>
    </div>
  );
}
