import * as Types from "./actionType";
import {TodoActions} from './type'
  
interface categories {
    categoriesData: string[];
  }
  
  const initialState: categories = {
    categoriesData:[]
  };
  
  export default (state = initialState, action:TodoActions) => {
    console.log(action, 'value in reducer')
    switch (action.type) {
      case Types.FETCH_CATEGORY_SUCCESS:
        return {
            
        };
      case Types.FETCH_CATEGORY_SUCCESS:
        
        return {
          categories:action.payload.categoriesData
        };
      case Types.FETCH_CATEGORY_FAILURE:
        return {
         
        };
      default:
        return {
          ...state,
        };
    }
  };