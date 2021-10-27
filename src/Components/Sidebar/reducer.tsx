import * as Types from "./actionType";
import { TodoActions, categoriesStateType } from "./type";

const initialState: categoriesStateType = {
  pending: false,
  categories: [],
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case Types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.categoriesData,
      };
    case Types.FETCH_CATEGORY_FAILURE:
      return {};
    default:
      return {
        ...state,
      };
  }
};
