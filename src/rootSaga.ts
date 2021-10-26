import { all, fork } from "redux-saga/effects";

import categoriesRootSaga from "../src/Components/Sidebar/saga";

export default  function* rootSaga() {
  yield all([fork(categoriesRootSaga)]);
}