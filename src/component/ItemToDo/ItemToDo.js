import React, { useState } from "react";
import { Checkbox, Flex, Tag } from "antd";
const ItemToDo = ({ name, priority, completed }) => {
    const priorityColorMapping = {
        High: "red",
        Medium: "blue",
        Low: "gray",
    };
    const [checked, setChecked] = useState(completed);
    return (
        <Flex
            gap="middle"
            align="start"
            justify="space-between"
            horizontal
            style={{ marginBottom: 5, ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}) }}
        >
            <Checkbox onChange={() => setChecked(!checked)} checked={checked}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
        </Flex>
    );
};

export default ItemToDo;
