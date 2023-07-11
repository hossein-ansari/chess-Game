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
  let colorSet = true
  // render board function

    for (let i = 0; i < houseNumbers.length; i++) {
      for (let I = 0; I < alphabet.length; I++) {
        chessHouses.push(`${alphabet[I]}${houseNumbers[i]}`);
        if (colorSet) {
          console.log('white');
          colorSet = false
        }else{
          console.log('black');
          colorSet = true
        }
      }
    }

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
