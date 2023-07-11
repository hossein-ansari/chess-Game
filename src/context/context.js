import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  // render board var
  const [houseNumbers, setHouseNumbers] = useState([8, 7, 6, 5, 4, 3, 2, 1]);
  const [alphabet, SetAlphabet] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
  ]);
  const [chessHouses, setChessHouses] = useState([]);
  let colorSet = "white";
  // render board function
  for (let i = 0; i < houseNumbers.length; i++) {
    for (let I = 0; I < alphabet.length; I++) {
      chessHouses.push({
        spot: `${alphabet[I]}${houseNumbers[i]}`,
        color: colorSet,
      });
      colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
      if (I === 7) {
        colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
      }
    }
  }
  // pieces 
  
  const [pieces, setPeases] = useState([
    {
      roll: "pawn",
      point: 1,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
      enPassant: EnPassant,
    },
    {
      roll: "rook",
      point: 5,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      roll: "knight",
      point: 3,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      roll: "bishop",
      point: 3,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      roll: "queen",
      point: 8,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      roll: "king",
      point: 0,
      shape: "",
      color: "",
      position: '',
      killAble: true,
      movement: pawnMoveMent,
    },
  ]);
  // render pieces 
  const [blackPawns,setBlackPawns] = useState([])
  // useEffect(()=>{
    
  // },[])
  function EnPassant() {}
  function pawnMoveMent() {}
  return (
    <contextBox.Provider
      value={{
        chessHouses,
        houseNumbers,
        alphabet,
        setHouseNumbers,
        SetAlphabet,
        setChessHouses,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
