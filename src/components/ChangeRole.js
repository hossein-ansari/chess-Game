import React, { useContext } from "react";
import { contextBox } from "../context/context";
import "../style/changeRole.css";
export default function ChangeRole() {
  const data = useContext(contextBox);
  function changeRoleHandler(e) {
    console.log(e.clientX);
    let allPiecesCopy = [...data.allPieces];
    let changedPiece = allPiecesCopy.find(
      (P) =>
        P.position[0] === data.changeRolePopUp[2] &&
        P.position[1] === data.changeRolePopUp[3]
    );
    changedPiece.role = e.target.classList.value.split(
      data.changeRolePopUp[1]
    )[1];
    changedPiece.shape = e.target.classList.value;
    switch (e.target.classList.value.split(data.changeRolePopUp[1])[1]) {
      case "Rook":
        changedPiece.moveMent = (e, E) => {
          // moveMent algorithm
          data.setSuggestions([]);
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

          data.setSuggestions(suggestionsCord);
          data.setAllPieces(allPiecesCopyCopy);
        };
        break;
      case "Bishop":
        changedPiece.moveMent = (e, E) => {
          // moveMent algorithm
          data.setSuggestions([]);
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
          data.setSuggestions(suggestionsCord);
          data.setAllPieces(allPiecesCopyCopy);
        };
        break;
      case "Queen":
        changedPiece.moveMent = (e, E) => {
          // moveMent algorithm
          data.setSuggestions([]);
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
          data.setSuggestions(suggestionsCord);
          data.setAllPieces(allPiecesCopyCopy);
        };
        break;
      case "Knight":
        changedPiece.moveMent = (e, E) => {
          data.setSuggestions([]);
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
          data.setSuggestions(suggestionsCord);
          data.setAllPieces(allPiecesCopyCopy);
        };
        break;
      default:
        break;
    }

    data.setAllPieces(allPiecesCopy);
    data.setChangeRolePopUp([false, "white", 0, 0]);
  }
  return (
    <ul
      style={{top: `${data.changeRolePopUp[5]}`, left: `${data.changeRolePopUp[4]}` }}
      className="changeRoleUl"
    >
      <li
        onClick={(e) => changeRoleHandler(e)}
        className={`${data.changeRolePopUp[1] + "Rook"}`}
      ></li>
      <li
        onClick={(e) => changeRoleHandler(e)}
        className={`${data.changeRolePopUp[1] + "Bishop"}`}
      ></li>
      <li
        onClick={(e) => changeRoleHandler(e)}
        className={`${data.changeRolePopUp[1] + "Knight"}`}
      ></li>
      <li
        onClick={(e) => changeRoleHandler(e)}
        className={`${data.changeRolePopUp[1] + "Queen"}`}
      ></li>
    </ul>
  );
}
