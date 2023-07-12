import React, { useContext } from "react";
import "./App.css";
import { contextBox } from "./context/context";
import ChessBoard from "./components/ChessBoard";
function App() {
  const data = useContext(contextBox);
  return (
    <div className="App">
      <div className="chessBoard">
      <ChessBoard />
      </div>
    </div>
  );
}

export default App;
