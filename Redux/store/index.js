import { createStore, combineReducers } from "redux";
import todos from "../reducers/todos";
import visibilityFilter from "../reducers/visibilityFilter";

const rootReducer = combineReducers({
	todos,
	visibilityFilter,
});

export const store = createStore(rootReducer);
