import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducer from "../reducer/reducer";
import rootSaga from "../rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
