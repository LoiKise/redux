import { combineReducers } from "redux";
import filterReducer from "./fillterReducer";
import toDoListReducer from "./todoListReducer";

const reducer = combineReducers({
    filters: filterReducer,
    toDoList: toDoListReducer,
})

export default reducer;