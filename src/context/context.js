import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext();
const AllDatasProvider = ({ children }) => {
  // render board var
  const [houseNumbers, setHouseNumbers] = useState([8, 7, 6, 5, 4, 3, 2, 1]);
  const [alphabet, SetAlphabet] = useState([
    "a" ,
    "b" ,
    "c" ,
    "d" ,
    "e" ,
    "f" ,
    "g" ,
    "h" ,
  ]);
  const [chessHouses, setChessHouses] = useState([]);
  let colorSet = "white";
  // render board function
  for (let i = 0; i < houseNumbers.length; i++) {
    for (let I = 0; I < alphabet.length; I++) {
      chessHouses.push({
        spot: {
          row: I,
          dot: `${alphabet[I]}${houseNumbers[i]}`,
          column: houseNumbers[i],
        },
        color: colorSet,
      });
      colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
      if (I === 7) {
        colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
      }
    }
  }
  // pieces
  console.log(chessHouses);

  const [pieces, setPeases] = useState([
    {
      role: "Rook",
      point: 5,
      shape: "",
      color: "",
      position: [],
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      role: "knight",
      point: 3,
      shape: "",
      color: "",
      position: [],
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      role: "Bishop",
      point: 3,
      shape: "",
      color: "",
      position: [],
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      role: "Queen",
      point: 8,
      shape: "",
      color: "",
      position: [],
      killAble: true,
      movement: pawnMoveMent,
    },
    {
      role: "King",
      point: 0,
      shape: "",
      color: "",
      position: [],
      killAble: false,
      movement: pawnMoveMent,
    },
  ]);
  // useEffect(()=>{
  // render pieces 
   function pawnRender (){
    chessHouses.forEach( Dot => {
      if (Dot.column[1] === '2') {
        const pawn =  {
          role: "Pawn",
          point: 1,
          shape: "whitePawn",
          color: "white",
          position: [Dot.row,Dot.column],
          killAble: true,
          movement: pawnMoveMent,
          enPassant: EnPassant,
        }
        
      }

    });
  }
  // },[])
  function EnPassant() {}
  function pawnMoveMent(position) {
  }
  return (
    <contextBox.Provider
      value={{
        chessHouses,
        houseNumbers,
        alphabet,
        pieces,
        setHouseNumbers,
        SetAlphabet,
        setChessHouses,
        setPeases,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export { AllDatasProvider, contextBox };
