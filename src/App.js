import React, { useContext } from "react";
import "./App.css";
import { contextBox } from "./context/context";
function App() {
  const data = useContext(contextBox);
  return (
    <div className="App">
      <div className="chessBoard">
        <ul >
          {data.chessHouses.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
