import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as Types from './actionType'
import * as Actions from './action'

const getTodos = () => {
 return axios.get<string[]>("https://fakestoreapi.com/products/categories");
}

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchCategoriesSaga():any {
  try {
    const response = yield call(getTodos);
    console.log(response, 'value in saga ')
    yield put(
     
      Actions.getCategoriesSuccess({
       
        categoriesData: response.data,
      })
    );
   
  } catch (e) {
    
}
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* categoriesRootSaga() {
  yield all([takeLatest(Types.FETCH_CATEGORY_REQUEST, fetchCategoriesSaga)]);
}

export default categoriesRootSaga;