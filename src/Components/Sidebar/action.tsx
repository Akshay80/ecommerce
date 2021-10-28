import * as ActionTypes from "./actionType";
import * as Types from "./type";

export const getCategories = (): Types.FetchCategoriesRequest => ({
  type: ActionTypes.FETCH_CATEGORY_REQUEST,
});

export const getCategoriesSuccess = (
  payload: Types.FetchCategoriesSuccess
): Types.FetchCategoriesSuccessRequest => ({
  type: ActionTypes.FETCH_CATEGORY_SUCCESS,
  payload,
});

export const getCategoriesFailure = (
  payload: Types.FetchCategoriesFailure
): Types.FetchCategoriesFailureRequest => ({
  type: ActionTypes.FETCH_CATEGORY_FAILURE,
  payload,
});
