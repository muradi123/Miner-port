export const GAME_CURRENT_CHECKER = (bolean) => {
  return {
    type: "GAME_CURRENT_CHECKER",
    payload: bolean,
  };
};

export const CHANGE_ACTIVE = (index) => {
  return {
    type: "CHANGE_ACTIVE",
    payload: index,
  };
};

export const OPEN_CELL = (position) => {
  return {
    type: "OPEN_CELL",
    payload: position,
  };
};

export const RUN_GAME = () => {
  return {
    type: "RUN_GAME",
  };
};

export const UPDATED_ARRAY = (string) => {
  return {
    type: "UPDATED_ARRAY",
    payload: string,
  };
};

export const CREATE_NEW_TABLE = (number) => {
  return {
    type: "CREATE_NEW_TABLE",
    payload: number,
  };
};
