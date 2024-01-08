import React, { useState, useEffect } from 'react';
import ListEntry from './ListEntry';
import TaskList from './TaskList';

const todoState = () => {
    const [tasklist, setTasklist] = useState([]);
    const [editTask, setEditTask] = useState('')
    let tempTask = '';
    const setTempTask = task => {
        tempTask = task
    }
    const textEntered = task => {
        if (task.length > 0 && !tasklist.includes(task)) {
            setTasklist([...tasklist, task])
            document.getElementById('editError').innerText = ''
        }
        if (tasklist.includes(task)) {
            document.getElementById('editError').innerText = 'The task you have entered already exists 😊'
        }
    }
    const deleteSelectedTasks = tasks => {
        setTasklist(tasklist.filter(item => !tasks.includes(item)))
        if (tempTask.length === 0) {
            document.getElementById('editError').innerText = '' + tasks.length + 'Task/s has/have been deleted 😊'
        } else {
            setTempTask('')
        }
    }
    const moveToTop = tasks => {
        setTasklist(tasks.concat(tasklist.filter(item => !tasks.includes(item))))
        document.getElementById('editError').innerText = '' + tasks.length + 'Task/s has/have been moved to top 😊'
    }

    return { tasklist, editTask, textEntered, deleteSelectedTasks, moveToTop, setEditTask, setTempTask }
}

const Todo = () => {
    const {
        tasklist,
        editTask,
        textEntered,
        deleteSelectedTasks,
        moveToTop,
        setEditTask,
        setTempTask,
    } = todoState()
    const [taskListId, setTaskListId] = useState(1)


    return (
        < >
            <div>
                <h1>Welcome to New Year's Resolution todo-list🤪</h1>
                <h2>Please enter the list and add🫣</h2>
            </div>
            {taskListId % 2 == 0 ? (
                <ListEntry
                    key={"component1"}
                    onSubmit={textEntered}
                    editTask={editTask}
                    setEditTask={setEditTask}
                />
            ) : (
                <ListEntry
                    key={"component2"}
                    onSubmit={textEntered}
                    editTask={editTask}
                    setEditTask={setEditTask}
                />)
            }
            <p id="editError" style={{ textAlign: "center" }}></p>

            <br />
            <TaskList
                key={taskListId}
                task={tasklist}
                deleteSelectedTasks={deleteSelectedTasks}
                moveToTop={moveToTop}
                editATask={
                    task => {
                        setEditTask(task)
                        setTempTask(task)
                    }
                }
                resetId={() => setTaskListId(taskListId + 1)}
            />
            <br />
            <br />
        </>
    )
}

export default Todo