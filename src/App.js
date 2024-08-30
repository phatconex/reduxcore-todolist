import "./App.css";
import FilterToDo from "./component/FilterToDo/FilterToDo";
import ListToDo from "./component/ListToDo/ListToDo";

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: 20,
                boxShadow: "0 0 10px 4px #bfbfbf",
                borderRadius: 5,
            }}
        >
            <h1>TODO APP with REDUX & ANTD</h1>
            <FilterToDo></FilterToDo>
            <ListToDo></ListToDo>
        </div>
    );
}

export default App;
