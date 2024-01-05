import React, { useState } from "react";

const Task = props => {
    const [isChecked, setIsChecked] = useState(props.boxChecked)
    const handleSelect = (event) => {
        setIsChecked(event.target.checked);
        isChecked ? props.unSelectedTask(props.task) : props.selectedTask(props.task)
        console.log(props.boxChecked)
    }
    return (
        <div className="check-container">
            <input
                className="custom-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleSelect}
                id={props.taskId}
                name={props.taskId} />
            <div className="checkmark"></div> <label htmlFor={props.taskId} className="check-label">{props.task}</label>
        </div>
    )
}

export default Task