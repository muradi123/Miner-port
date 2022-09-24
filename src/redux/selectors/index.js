import { createSelector } from "reselect";

export const isGameFinishedSelector = (state) =>
  state.navigationReducer.gameCurrent;
export const levelSelector = (state) => state.navigationReducer.level;
export const arraySelector = (state) => state.commandsReducer.allPieceString;
export const columnsSelector = (state) => state.navigationReducer.columns;

export const arrayOfCells = createSelector([arraySelector], (arraySelector) => {
  let array = Array.from(arraySelector);
  let arrayWithoutSpace = array.filter((x) => !/^\s*$/.test(x));
  return arrayWithoutSpace;
});
