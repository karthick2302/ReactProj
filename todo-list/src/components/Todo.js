import React, { useState, useEffect } from 'react';
import ListEntry from './ListEntry';
import TaskList from './TaskList';

const todoState = () => {
    const [tasklist, setTasklist] = useState([]);
    const textEntered = task => {
        if (task.length > 0 && !tasklist.includes(task)) {
            setTasklist([...tasklist, task])
        }
    }
    const deleteSelectedTasks = tasks => {
        setTasklist(tasklist.filter(item => !tasks.includes(item)))
    }
    const moveToTop = tasks => {
        setTasklist(tasks.concat(tasklist.filter(item => !tasks.includes(item))))
    }
    return { tasklist, textEntered, deleteSelectedTasks, moveToTop }
}

const Todo = () => {
    const {
        tasklist,
        textEntered,
        deleteSelectedTasks,
        moveToTop,
    } = todoState()

    return (
        < >
            <div>
                <h1>Welcome to New Year's Resolution todo-list🤪</h1>
                <h2>Please enter the list and add🫣</h2>
            </div>
            <ListEntry
                onSubmit={textEntered} />

            <br />
            <TaskList task={tasklist} deleteSelectedTasks={deleteSelectedTasks} moveToTop={moveToTop} />
            <br />
            <br />
        </>
    )
}

export default Todo