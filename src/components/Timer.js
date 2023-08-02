import React, { useContext } from "react";
import { contextBox } from "../context/context";

export default function Timer() {
    const data = useContext(contextBox);
  return (
    <div>
      <p className="timer">
        {data.whiteTimer.minutes}:{data.whiteTimer.seconds}
      </p>
    </div>
  );
}
