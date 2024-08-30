import React, { useState } from "react";
import { Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { searchFilterChange, statusFilterChange, priorityFilterChange } from "../../redux/action";
const FilterToDo = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [priority, setPriority] = useState([]);
    const dispath = useDispatch();
    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispath(searchFilterChange(e.target.value));
    };
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        dispath(statusFilterChange(e.target.value));
    };
    const handlePriorityChange = (e) => {
        setPriority(e);
        dispath(priorityFilterChange(e));
    };
    return (
        <>
            <Typography.Text
                style={{
                    marginBottom: 10,
                    marginTop: 15,
                    fontWeight: "bold",
                }}
            >
                Search
            </Typography.Text>
            <Input.Search placeholder="input search text" size="large" value={search} onChange={handleSearch} />

            <Typography.Text
                style={{
                    marginBottom: 10,
                    marginTop: 15,
                    fontWeight: "bold",
                }}
            >
                Filter By Status
            </Typography.Text>
            <Radio.Group value={status} onChange={handleStatusChange}>
                <Radio value={"All"}>All</Radio>
                <Radio value={"Completed"}>Completed</Radio>
                <Radio value={"Todo"}>To do</Radio>
            </Radio.Group>

            <Typography.Text
                style={{
                    marginBottom: 10,
                    marginTop: 15,
                    fontWeight: "bold",
                }}
            >
                Filter By Priority
            </Typography.Text>
            <Select
                mode="multiple"
                style={{
                    width: "100%",
                }}
                placeholder="Tags Mode"
                size="large"
                onChange={handlePriorityChange}
            >
                <Select.Option key="option1" value="High">
                    <Tag color="red">High</Tag>
                </Select.Option>
                <Select.Option key="option2" value="Medium">
                    <Tag color="blue">Medium</Tag>
                </Select.Option>
                <Select.Option key="option3" value="Low">
                    <Tag color="gray">Low</Tag>
                </Select.Option>
            </Select>
        </>
    );
};

export default FilterToDo;
