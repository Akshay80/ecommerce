import * as Types from './actionType'

export interface categoriesStateType {
  pending: boolean;
  categories: string[];
}  

export interface FetchCategoriesSuccess {
    categoriesData: string[];
}

export interface FetchCategoriesFailure {
    error: string;
}

export interface FetchCategoriesRequest {
    type: typeof Types.FETCH_CATEGORY_REQUEST;
  }
  
export type FetchCategoriesSuccessRequest = {
    type: typeof Types.FETCH_CATEGORY_SUCCESS;
    payload: FetchCategoriesSuccess;
  };
  
export type FetchCategoriesFailureRequest = {
    type: typeof Types.FETCH_CATEGORY_FAILURE;
    payload: FetchCategoriesFailure;
};


export type TodoActions =
  | FetchCategoriesRequest
  | FetchCategoriesSuccessRequest
  | FetchCategoriesFailureRequest;
