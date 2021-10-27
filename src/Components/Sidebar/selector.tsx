import { createSelector } from "reselect";

import { RootState}  from "../../reducer/reducer";

const getTodos = (state: RootState) => state.categoryReducer;
const getPending = (state: RootState) => state.categoryReducer;

export const getTodosSelector = createSelector(getTodos, (categories) => categories);
export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
  );