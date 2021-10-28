import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as Types from "./actionType";
import * as Actions from "./action";

const getTodos = () => {
  return axios.get<string[]>("https://fakestoreapi.com/products/categories");
};

function* fetchCategoriesSaga(): any {
  try {
    const response = yield call(getTodos);
    yield put(
      Actions.getCategoriesSuccess({
        categoriesData: response.data,
      })
    );
  } catch (e) {}
}
function* categoriesRootSaga() {
  yield all([takeLatest(Types.FETCH_CATEGORY_REQUEST, fetchCategoriesSaga)]);
}

export default categoriesRootSaga;
