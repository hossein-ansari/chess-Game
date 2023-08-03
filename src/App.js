import React, { useContext, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import "./App.css";
import { contextBox } from "./context/context";
import Routes from "./Routes/Routes";
import Timer from "./components/Timer";
function App() {
  const data = useContext(contextBox);
  const router = useRoutes(Routes);
  return (
    <>
    {router}
    </>
  );
}

export default App;
