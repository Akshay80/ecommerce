import { createSelector } from "reselect";
import { RootState } from "../../reducer/reducer";

const getProductCategories = (state: RootState) => state.categoryReducer;

export const getProductSelector = createSelector(getProductCategories, products => products);