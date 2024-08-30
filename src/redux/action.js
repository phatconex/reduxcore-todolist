export const addToDoAction = (data) => {
    return {
        type: "todoList/addToDo",
        payload: data,
    };
};
export const searchFilterChange = (text) => {
    return {
        type: "filter/searchFilterChange",
        payload: text,
    };
};
export const statusFilterChange = (status) => {
    return {
        type: "filter/statusFilterChange",
        payload: status,
    };
};
export const priorityFilterChange = (priority) => {
    return {
        type: "filter/priorityFilterChange",
        payload: priority,
    };
};
