import {ProjectDataInterface} from '../../Interfaces/index'
import * as Types from "./actionType"

export interface FetchDataByCategorySuccess {
    categoriesData: ProjectDataInterface;
}

export interface FetchDataByCategoryFailure {
    error: string;
}

export interface FetchDataByCategoryRequestPayload {
    payload: string;
}

export interface FetchDataByCategoryRequest {
    type: typeof Types.FETCH_DATA_BY_CATEGORY_REQUEST;
    payload:FetchDataByCategoryRequestPayload
}
  
export type FetchDataByCategoriesRequestSuccess = {
    type: typeof Types.FETCH_DATA_BY_CATEGORY_SUCCESS;
    payload:FetchDataByCategorySuccess;
};
  
export type FetchDataByCategoryRequesFailure = {
    type: typeof Types.FETCH_DATA_BY_CATEGORY_FAILURE;
    payload: FetchDataByCategoryFailure;
};

export type categoryDataAction =  
        FetchDataByCategoryRequest |
        FetchDataByCategoriesRequestSuccess | 
        FetchDataByCategoryRequesFailure