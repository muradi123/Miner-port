import { combineReducers } from "redux";
import { navigationReducer } from "./NavigationReducer";
import { commandsReducer} from "./CommandsReducer";

export const AllReducers = combineReducers({
  navigationReducer,
  commandsReducer,
});
