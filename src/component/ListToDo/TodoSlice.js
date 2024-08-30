const initState = [
    { id: 1, name: "Learn yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn redux", completed: true, priority: "Low" },
    { id: 3, name: "Learn js", completed: false, priority: "High" },
];

const TodoReducer = (state = initState, action) => {
    // action:
    //     type: 'todolist/addTodo',
    //     payload: { id: 4, name: "Learn redux", completed: false, priority: "Low" }
    switch (action.type) {
        case "todoList/addToDo":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default TodoReducer;
