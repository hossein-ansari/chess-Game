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
  const [removedPieces, setRemovedPieces] = useState([]);
  // suggestion houses
  const [suggestions, setSuggestions] = useState([]);
  // timers
  const [gameMood, setGameMood] = useState();
  const [blackTimer, setBlackTimer] = useState();
  const [whiteTimer, setWhiteTimer] = useState();
  // turn color
  const [turn, setTurn] = useState("white");
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
  // white pieces
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
        moveMent: (e, E) => {
          // moveMent algorithm
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }

          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
      };
      allPiecesCopy.push(WhiteRook);
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + 2, Y: Ycord + 1 },
            { X: Xcord + 2, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord - 2 },
            { X: Xcord - 1, Y: Ycord - 2 },
            { X: Xcord - 2, Y: Ycord + 1 },
            { X: Xcord - 2, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord + 2 },
            { X: Xcord - 1, Y: Ycord + 2 },
          ];
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );

            let canMove;
            if (busyCord !== undefined && busyCord.color === Cord.color) {
              canMove = false;
            } else {
              canMove = true;
            }
            C.canMoveHandler = canMove;
          });
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          // moveMent algorithm
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          // moveMent algorithm
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + 0, Y: Ycord + 1 },
            { X: Xcord + 1, Y: Ycord + 1 },
            { X: Xcord - 1, Y: Ycord + 1 },
            { X: Xcord + 0, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord - 1 },
            { X: Xcord - 1, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord + 0 },
            { X: Xcord - 1, Y: Ycord + 0 },
          ];
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );
            let canMove;
            if (busyCord === undefined) {
              canMove = true;
            } else if (
              busyCord !== undefined &&
              Cord.color !== busyCord.color
            ) {
              canMove = true;
            } else {
              canMove = false;
            }
            C.canMoveHandler = canMove;
          });

          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + -1, Y: Ycord + 1 },
            { X: Xcord + 0, Y: Ycord + 1 },
            { X: Xcord + 1, Y: Ycord + 1 },
            Cord.position[1] === 2
              ? { X: Xcord + 0, Y: Ycord + 2 }
              : { X: Xcord, Y: Ycord },
          ];
         
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );
            let canMove;
            if (busyCord === undefined && index === 2) {
              canMove = true;
            } else if (busyCord === undefined && index !== 2) {
              canMove = false;
              if (index === 4 && suggestionsCord[2].canMoveHandler === true) {
                canMove = true;
              }
            } else if (
              busyCord !== undefined &&
              index !== 2 &&
              busyCord.color !== Cord.color
            ) {
              canMove = true;
            } else {
              canMove = false;
            }

            C.canMoveHandler = canMove;
          });
         
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
      };
      allPiecesCopy.push(whitePawn);
    }
  }
  // black pieces
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                // moveMent algorithm
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }

          console.log(suggestionsCord);

          // find available Cord

          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + 2, Y: Ycord + 1 },
            { X: Xcord + 2, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord - 2 },
            { X: Xcord - 1, Y: Ycord - 2 },
            { X: Xcord - 2, Y: Ycord + 1 },
            { X: Xcord - 2, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord + 2 },
            { X: Xcord - 1, Y: Ycord + 2 },
          ];
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );

            let canMove;
            if (busyCord !== undefined && busyCord.color === Cord.color) {
              canMove = false;
            } else {
              canMove = true;
            }
            C.canMoveHandler = canMove;
          });
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          // moveMent algorithm
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          // moveMent algorithm
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );
          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [];
          cordHandler();
          function cordHandler(params) {
            suggestionsCord.push(Cord);
            let i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;
            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord + i,
                Y: Ycord - i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
            i = 1;

            while (i < 8) {
              let cordSuggest = {
                X: Xcord - i,
                Y: Ycord + i,
                canMoveHandler: false,
              };
              const busyCord = allPiecesCopy.find(
                (P) =>
                  P.position[0] === cordSuggest.X &&
                  P.position[1] === cordSuggest.Y
              );
              if (busyCord === undefined) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
              } else if (
                busyCord !== undefined &&
                busyCord.color !== Cord.color
              ) {
                cordSuggest.canMoveHandler = true;
                suggestionsCord.push(cordSuggest);
                break;
              } else {
                break;
              }
              i++;
            }
          }
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + 0, Y: Ycord + 1 },
            { X: Xcord + 1, Y: Ycord + 1 },
            { X: Xcord - 1, Y: Ycord + 1 },
            { X: Xcord + 0, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord - 1 },
            { X: Xcord - 1, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord + 0 },
            { X: Xcord - 1, Y: Ycord + 0 },
          ];
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );

            let canMove;
            if (busyCord === undefined) {
              canMove = true;
            } else if (
              busyCord !== undefined &&
              Cord.color !== busyCord.color
            ) {
              canMove = true;
            } else {
              canMove = false;
            }
            C.canMoveHandler = canMove;
          });
          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
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
        moveMent: (e, E) => {
          setSuggestions([]);
          const allPiecesCopyCopy = [...allPiecesCopy];
          const Cord = allPiecesCopy.find(
            (P) =>
              P.position[0] === e.position[0] && P.position[1] === e.position[1]
          );

          const Xcord = Cord.position[0];
          const Ycord = Cord.position[1];
          let suggestionsCord = [
            Cord,
            { X: Xcord + -1, Y: Ycord - 1 },
            { X: Xcord + 0, Y: Ycord - 1 },
            { X: Xcord + 1, Y: Ycord - 1 },
            Cord.position[1] === 7
              ? { X: Xcord + 0, Y: Ycord - 2 }
              : { X: Xcord, Y: Ycord },
          ];
          // moveMent algorithm
          suggestionsCord.forEach((C, index) => {
            const busyCord = allPiecesCopy.find(
              (P) => P.position[0] === C.X && P.position[1] === C.Y
            );
            let canMove;
            if (busyCord === undefined && index === 2) {
              canMove = true;
            } else if (busyCord === undefined && index !== 2) {
              canMove = false;
              if (index === 4 && suggestionsCord[2].canMoveHandler === true) {
                canMove = true;
              }
            } else if (
              busyCord !== undefined &&
              index !== 2 &&
              busyCord.color !== Cord.color
            ) {
              canMove = true;
            } else {
              canMove = false;
            }
            C.canMoveHandler = canMove;
          });

          setSuggestions(suggestionsCord);
          setAllPieces(allPiecesCopyCopy);
        },
      };
      allPiecesCopy.push(blackPawn);
    }
  }

  return (
    <contextBox.Provider
      value={{
        chessHouses,
        houseNumbers,
        alphabet,
        allPieces,
        suggestions,
        removedPieces,
        blackTimer,
        whiteTimer,
        gameMood,
        turn,
        setTurn,
        setGameMood,
        setBlackTimer,
        setWhiteTimer,
        setRemovedPieces,
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
