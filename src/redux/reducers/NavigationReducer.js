let InitialState = {
  level: 0,
  columns: 0,
  gameCurrent: true,
};

export const navigationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GAME_CURRENT_CHECKER":
      return { ...state, gameCurrent: action.payload };

    case "CHANGE_ACTIVE":
      if (action.payload === 0) {
        return { ...state, level: 1, columns: 10 };
      } else if (action.payload === 1) {
        return { ...state, level: 2, columns: 40 };
      } else if (action.payload === 2) {
        return { ...state, level: 3, columns: 100 };
      } else if (action.payload === 3) {
        return { ...state, level: 4, columns: 500 };
      }
      break;
    default:
      return state;
  }
};
