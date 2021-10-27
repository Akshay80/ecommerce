import { combineReducers } from "redux";
import categoriesReducer  from '../Components/Sidebar/reducer'

const allReducer = combineReducers(
    {
        categoryReducer:categoriesReducer,
}
)

export type RootState = ReturnType<typeof allReducer>

export default allReducer
