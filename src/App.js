import React, { useContext, useEffect } from "react";
import "./App.css";
import { contextBox } from "./context/context";
import ChessBoard from "./components/ChessBoard";
import Timer from "./components/Timer";
function App() {
  const data = useContext(contextBox);
  return (
    <div className="App">
      <Timer />
      <div className="chessBoard">
        <ChessBoard />
      </div>
    </div>
  );
}

export default App;
