import React, { useState } from "react";
import Task from "./Task";
import DeleteSelected from "./DeleteSelected";
import MoveToTop from "./MoveToTop";

const TaskList = (props) => {
    const [selTask, setSelTask] = useState([])
    const [checked, setChecked] = useState(false)
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
    }
    const moveToTop = () => {
        props.moveToTop(selTask)
        console.log(selTask)
        setSelTask([])
        setChecked(false)
    }
    return (
        <div>
            {props.task.map((task, index) => (
                <Task key={index} task={task} boxChecked={checked} taskId={index} selectedTask={selectedTask} unSelectedTask={unSelectedTask} />
            ))}
            <br />
            <div className="button-container">
                <MoveToTop moveToTop={moveToTop} /> <DeleteSelected deleteSelected={deleteSelected} />
            </div>
        </div>
    )
}

export default TaskList