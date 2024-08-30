import React, { useState } from "react";
import ItemToDo from "../ItemToDo/ItemToDo";
import { Input, Button, Select, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToDoAction } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { todoRemaining } from "../../redux/selector";
const ListToDo = () => {
    const [todoName, setTodoName] = useState();
    const [priority, setPriority] = useState("Medium");
    const todoList = useSelector(todoRemaining);

    const dispatch = useDispatch();
    const handleAddTodo = () => {
        dispatch(
            addToDoAction({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName("");
        setPriority("Medium");
    };
    const handlePriorityChange = (value) => {
        setPriority(value);
    };
    return (
        <div style={{ marginTop: 50 }}>
            {todoList.map((todo) => (
                <ItemToDo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}></ItemToDo>
            ))}

            <Space.Compact style={{ display: "flex", marginTop: 30 }}>
                <Input size="large" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                <Select defaultValue="Medium" size="large" value={priority} onChange={handlePriorityChange}>
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
                <Button type="primary" size="large" onClick={handleAddTodo}>
                    Add
                </Button>
            </Space.Compact>
        </div>
    );
};

export default ListToDo;
