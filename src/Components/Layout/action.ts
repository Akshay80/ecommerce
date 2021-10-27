import * as ActionTypes from './actionType'
import *  as Types from './type'

export const getDataByCategories = (val: string) =>({
      type: ActionTypes.FETCH_DATA_BY_CATEGORY_REQUEST,
      payload: val,
    });

export const getDataByCategoriesSuccess = (
    payload: Types.FetchDataByCategorySuccess
  ): Types.FetchDataByCategoriesRequestSuccess => ({
    type: ActionTypes.FETCH_DATA_BY_CATEGORY_SUCCESS,
    payload,
  });
  
export const getDataByCategoriesFailure = (
    payload: Types.FetchDataByCategoryFailure
  ): Types.FetchDataByCategoryRequesFailure => ({
    type: ActionTypes.FETCH_DATA_BY_CATEGORY_FAILURE,
    payload,
  });