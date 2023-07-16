import { render } from "@testing-library/react";
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
  function renderBoardFunction() {
    for (let i = 0; i < houseNumbers.length; i++) {
      for (let I = 0; I < alphabet.length; I++) {
        const House = {
          spot: {
            X: I + 1,
            dot: `${alphabet[I]}${houseNumbers[i]}`,
            Y: houseNumbers[i],
          },
          color: colorSet,
        };
        chessHouses.push(House);
        colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
        if (I === 7) {
          colorSet === "white" ? (colorSet = "black") : (colorSet = "white");
        }
      }
    }
  }
  console.log(chessHouses);
  // render pieces
  const [allPieces, setAllPieces] = useState([]);
  const allPiecesCopy = [];
  useEffect(() => {
    renderWhiteRooks();
    renderWhiteKnights();
    renderWhiteBishops();
    renderWhiteQueen();
    renderWhiteKing();
    renderWhitePawns();
    setAllPieces(allPiecesCopy);
    renderBoardFunction();
  }, []);

  // pieces

  const [pieces, setPeases] = useState([
    {
      role: "Bishop",
      point: 3,
      shape: "",
      color: "",
      position: [],
      killAble: true,
    },
    {
      role: "Queen",
      point: 8,
      shape: "",
      color: "",
      position: [],
      killAble: true,
    },
    {
      role: "King",
      point: 0,
      shape: "",
      color: "",
      position: [],
      killAble: false,
    },
    {
      role: "Pawn",
      point: 1,
      shape: "whitePawn",
      color: "white",
      position: [],
      killAble: true,
    },
  ]);
  // useEffect(()=>{
  // render pieces functions
  function renderWhiteRooks() {
    const defaultPosition = [
      { X: 1, Y: 1 },
      { X: 8, Y: 1 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const WhiteRook = {
        role: "Rook",
        point: 5,
        shape: "whiteRook",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(WhiteRook);
      console.log(allPiecesCopy);
    }
  }
  function renderWhiteKnights() {
    const defaultPosition = [
      { X: 2, Y: 1 },
      { X: 7, Y: 1 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const WhiteKnight = {
        role: "Knight",
        point: 3,
        shape: "whiteKnight",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(WhiteKnight);
    }
  }
  function renderWhiteBishops() {
    const defaultPosition = [
      { X: 3, Y: 1 },
      { X: 6, Y: 1 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const whiteBishop = {
        role: "Bishop",
        point: 3,
        shape: "whiteBishop",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(whiteBishop);
    }
  }
  function renderWhiteQueen() {
    const defaultPosition = [{ X: 4, Y: 1 }];
    for (let i = 0; i < defaultPosition.length; i++) {
      const whiteQueen = {
        role: "Queen",
        point: 3,
        shape: "whiteQueen",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(whiteQueen);
    }
  }
  function renderWhiteKing() {
    const defaultPosition = [{ X: 5, Y: 1 }];
    for (let i = 0; i < defaultPosition.length; i++) {
      const whiteKing = {
        role: "King",
        point: 100,
        shape: "whiteKing",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: false,
      };
      allPiecesCopy.push(whiteKing);
    }
  }
  function renderWhitePawns() {
    const defaultPosition = [
      { X: 1, Y: 2 },
      { X: 2, Y: 2 },
      { X: 3, Y: 2 },
      { X: 4, Y: 2 },
      { X: 5, Y: 2 },
      { X: 6, Y: 2 },
      { X: 7, Y: 2 },
      { X: 8, Y: 2 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const whitePawn = {
        role: "Pawn",
        point: 100,
        shape: "whitePawn",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: false,
      };
      allPiecesCopy.push(whitePawn);
    }
  }
  return (
    <contextBox.Provider
      value={{
        chessHouses,
        houseNumbers,
        alphabet,
        pieces,
        allPieces,
        setAllPieces,
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
