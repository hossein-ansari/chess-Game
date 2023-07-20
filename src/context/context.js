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
  // movement algorithm
  const [suggestions, setSuggestions] = useState([]);
  // render board function
  let colorSet = "white";
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
    console.log(chessHouses);
  }
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
    renderBlackRooks();
    renderBlackKnights();
    renderBlackBishops();
    renderBlackQueen();
    renderBlackKing();
    renderBlackPawns();
    renderBoardFunction();
    setAllPieces(allPiecesCopy);
  }, []);

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
        point: 1,
        shape: "whitePawn",
        color: "white",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: false,
        moveMent: (e, E) => {
          setSuggestions([])
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopyCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );
          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let newCord;
          let suggestionsCopy = []
          // moveMent algorithm
          for (let n = -1; n <= 1; n++) {
            newCord = { X: Xcord + n , Y: Ycord + 1 };
            suggestionsCopy.push(newCord);
          } 
          setSuggestions(suggestionsCopy)        
          console.log(suggestionsCopy);
          
          setAllPieces(allPiecesCopyCopy);
        },
      };
      allPiecesCopy.push(whitePawn);
    }
  }
  

  function renderBlackRooks() {
    const defaultPosition = [
      { X: 1, Y: 8 },
      { X: 8, Y: 8 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackRook = {
        role: "Rook",
        point: 5,
        shape: "blackRook",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(blackRook);
    }
  }
  function renderBlackKnights() {
    const defaultPosition = [
      { X: 2, Y: 8 },
      { X: 7, Y: 8 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackKnight = {
        role: "Knight",
        point: 3,
        shape: "blackKnight",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(blackKnight);
    }
  }
  function renderBlackBishops() {
    const defaultPosition = [
      { X: 3, Y: 8 },
      { X: 6, Y: 8 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackBishop = {
        role: "Bishop",
        point: 3,
        shape: "blackBishop",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(blackBishop);
    }
  }
  function renderBlackQueen() {
    const defaultPosition = [{ X: 4, Y: 8 }];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackQueen = {
        role: "Queen",
        point: 8,
        shape: "blackQueen",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: true,
      };
      allPiecesCopy.push(blackQueen);
    }
  }
  function renderBlackKing() {
    const defaultPosition = [{ X: 5, Y: 8 }];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackKing = {
        role: "King",
        point: 100,
        shape: "blackKing",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: false,
      };
      allPiecesCopy.push(blackKing);
    }
  }
  function renderBlackPawns() {
    const defaultPosition = [
      { X: 1, Y: 7 },
      { X: 2, Y: 7 },
      { X: 3, Y: 7 },
      { X: 4, Y: 7 },
      { X: 5, Y: 7 },
      { X: 6, Y: 7 },
      { X: 7, Y: 7 },
      { X: 8, Y: 7 },
    ];
    for (let i = 0; i < defaultPosition.length; i++) {
      const blackPawn = {
        role: "Pawn",
        point: 1,
        shape: "blackPawn",
        color: "black",
        position: [defaultPosition[i].X, defaultPosition[i].Y],
        killAble: false,
      };
      allPiecesCopy.push(blackPawn);
    }
  }
  // black pieces
  return (
    <contextBox.Provider
      value={{
        chessHouses,
        houseNumbers,
        alphabet,
        allPieces,
        suggestions,
        setSuggestions,
        setAllPieces,
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
