// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search);
//     });
//     return todoRemaining;
// };

// export const searchTextSelector = (state) => state.filter.search;

import { createSelector } from "reselect";

//trường hớp nếu có 1 selector này phụ thuộc vào selector khác thì mình dùng pakage reselect để làm việc đó
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const statusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;

export const todoRemaining = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritySelector,
    (todoList, searchText, status, priority) => {
        if (status === "All") {
            return todoList.filter((todo) => {
                return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText);
            });
        } else {
            return todoList.filter((todo) => {
                return (
                    todo.name.includes(searchText) && (status === "Completed" ? todo.completed : !todo.completed) && priority.includes(todo.priority)
                );
            });
        }
    }
);
