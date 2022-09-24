let InitialState = {
  allPieceString: "",
};

export const commandsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE":
      return { ...state, allPieceString: "" };
    case "UPDATED_ARRAY":
      return { ...state, allPieceString: action.payload };
    default:
      return state;
  }
};
