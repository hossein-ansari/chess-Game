import React, { useContext } from "react";
import { contextBox } from "../context/context";
export default function ChangeRole() {
  const data = useContext(contextBox);
  return (
    <ul>
      <li className={`${data.changeRolePopUp[1] + "Rook"}`}>o</li>
      <li className={`${data.changeRolePopUp[1] + "Bishop"}`}></li>
      <li className={`${data.changeRolePopUp[1] + "Knight"}`}></li>
      <li className={`${data.changeRolePopUp[1] + "Queen"}`}></li>
    </ul>
  );
}
