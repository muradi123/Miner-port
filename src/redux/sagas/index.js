import { all, takeLatest } from "redux-saga/effects";
import { call, take, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { GAME_CURRENT_CHECKER } from "../actions/index";
import { UPDATED_ARRAY } from "../actions/index";

let webSocket;

// eslint-disable-next-line require-yield
function* createSocketChannel() {
  return eventChannel((emiter) => {
    let ws = new WebSocket("wss://hometask.eg1236.com/game1/");
    webSocket = ws;
    ws.onmessage = ({ data }) => {
      let table = data.split(":");
      if (table[0] === "map") {
        emiter(UPDATED_ARRAY(table[1]));
      }
      if (table[0] === "open") {
        if (table[1] === " OK") {
          emiter(GAME_CURRENT_CHECKER(true));
        } else if (table[1] === " You lose") {
          emiter(GAME_CURRENT_CHECKER(false));
        }
      }
    };
    return () => {
      return true;
    };
  });
}

function* startGame() {
  let channel = yield call(createSocketChannel);
  while (true) {
    const newAction = yield take(channel);
    yield put(newAction);
  }
}

function* newTable(action) {
  yield webSocket.send(`new ${action.payload}`);
  yield webSocket.send("map");
}

function* openCell(action) {
  yield webSocket.send(
    `open ${action.payload.xPosition} ${action.payload.yPosition}`
  );
  yield webSocket.send("map");
}

export default function* rootSaga() {
  yield all([
    takeLatest("RUN_GAME", startGame),
    takeLatest("CREATE_NEW_TABLE", newTable),
    takeLatest("OPEN_CELL", openCell),
  ]);
}
