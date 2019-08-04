import { all, fork } from "redux-saga/effects";

import { watchLoadAlbum } from "./album";
import { watchLoadChart } from "./chart";

export default function* rootSaga() {
  yield all([fork(watchLoadChart), fork(watchLoadAlbum)]);
}