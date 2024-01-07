import React, { useState } from "react";
import Task from "./Task";
import DeleteSelected from "./DeleteSelected";
import MoveToTop from "./MoveToTop";

const TaskList = (props) => {
    const [selTask, setSelTask] = useState([])
    const [isChecked, setChecked] = useState(false)
    const [changeChecked, setChangeChecked] = useState(null)
    const handleSelect = (event) => {
        const label = document.querySelector(`label[for="${event.target.id}"]`).innerText;
        setChecked(event.target.checked)
        isChecked ? unSelectedTask(label) : selectedTask(label)
        // setChangeChecked(null)
    }
    const selectedTask = task => {
        setSelTask([...selTask, task])
        console.log(task)
    }
    const unSelectedTask = task => {
        setSelTask(selTask.filter(item => item !== task))
        console.log(task)
    }
    const deleteSelected = () => {
        props.deleteSelectedTasks(selTask)
        console.log(selTask)
        setSelTask([])
        setChecked(false)
        props.resetId()
        // setChangeChecked(prevState => !prevState)
    }
    const moveToTop = () => {
        props.moveToTop(selTask)
        console.log(selTask)
        setSelTask([])
        setChecked(false)
        props.resetId()
        // setChangeChecked(prevState => !prevState)
    }
    return (
        <div>
            <button className="form-button" style={{ float: "right" }}>Edit</button>
            {/* {props.task.map((task, index) => (
                <Task key={index} task={task} boxChecked={checked} taskId={index} selectedTask={selectedTask} unSelectedTask={unSelectedTask} />
            ))} */}
            {props.task.map((oneTask, index) => (
                <div className="check-container">
                    <input
                        className="custom-checkbox"
                        type="checkbox"
                        checked={changeChecked}
                        onChange={handleSelect}
                        id={index}
                        name={index} />
                    <div className="checkmark"></div> <label htmlFor={index} className="check-label">{oneTask}</label>
                </div>
            ))}
            <br />
            <div className="button-container">
                <MoveToTop moveToTop={moveToTop} />
                <DeleteSelected deleteSelected={deleteSelected} />
            </div>
        </div>
    )
}

export default TaskList