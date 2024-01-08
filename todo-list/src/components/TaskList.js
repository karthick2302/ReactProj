import React, { useState } from "react";
import DeleteSelected from "./DeleteSelected";
import MoveToTop from "./MoveToTop";

const TaskList = (props) => {
    const [selTask, setSelTask] = useState([])
    const changeChecked = null
    const handleSelect = (event) => {
        const label = document.querySelector(`label[for="${event.target.id}"]`).innerText;
        event.target.checked ? selectedTask(label) : unSelectedTask(label)
    }
    const handleEdit = () => {
        if (selTask.length == 1) {
            document.getElementById('editError').innerText = ''
            props.editATask(selTask[0])
            props.deleteSelectedTasks(selTask)
            console.log(selTask)
            setSelTask([])
            props.resetId()
        } else {
            document.getElementById('editError').innerText = 'Please select one task at a time to edit 😊'
        }
    }
    const selectedTask = task => {
        setSelTask([...selTask, task])
        console.log('selected', task)
    }
    const unSelectedTask = task => {
        setSelTask(selTask.filter(item => item !== task))
        console.log('unselected', task)
    }
    const deleteSelected = () => {
        if (selTask.length == 0) {
            document.getElementById('editError').innerText = 'Please select some task to perform this operation'
        } else {
            document.getElementById('editError').innerText = ''
            props.deleteSelectedTasks(selTask)
            console.log(selTask)
            setSelTask([])
            props.resetId()
        }
    }
    const moveToTop = () => {
        if (selTask.length == 0) {
            document.getElementById('editError').innerText = 'Please select some task to perform this operation'
        } else {
            document.getElementById('editError').innerText = ''
            props.moveToTop(selTask)
            console.log(selTask)
            setSelTask([])
            props.resetId()
        }
    }

    return (
        <div>

            <button className="edit-button" style={{ float: "right" }} onClick={handleEdit}>Edit</button>
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