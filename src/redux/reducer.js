import { combineReducers } from "redux";

import filterReducer from "../component/FilterToDo/FilterSlice";
import TodoReducer from "../component/ListToDo/TodoSlice";

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: TodoReducer(state.todoList, action),
//     };
// };

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: TodoReducer,
});

export default rootReducer;
