import React, { useState, useEffect } from 'react';
import ListEntry from './ListEntry';
import TaskList from './TaskList';

const todoState = () => {
    const [tasklist, setTasklist] = useState([]);
    const [editTask, setEditTask] = useState('')
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
    const editATask = task => {
        setEditTask(task)
    }
    return { tasklist, editTask, textEntered, deleteSelectedTasks, moveToTop, editATask, setEditTask }
}

const Todo = () => {
    const {
        tasklist,
        editTask,
        textEntered,
        deleteSelectedTasks,
        moveToTop,
        editATask,
        setEditTask,
    } = todoState()
    const [taskListId, setTaskListId] = useState(1)
    const [tooglecomponent, setToogleComponent] = useState(taskListId % 2 == 0)

    return (
        < >
            <div>
                <h1>Welcome to New Year's Resolution todo-list🤪</h1>
                <h2>Please enter the list and add🫣</h2>
            </div>
            {taskListId % 2 == 0 ? (
                <ListEntry key={"component1"}
                    onSubmit={textEntered} editTask={editTask} setEditTask={setEditTask} />
            ) : (
                <ListEntry key={"component2"}
                    onSubmit={textEntered} editTask={editTask} setEditTask={setEditTask} />)
            }


            <br />
            <TaskList key={taskListId} task={tasklist} deleteSelectedTasks={deleteSelectedTasks} moveToTop={moveToTop} editATask={editATask} resetId={() => setTaskListId(taskListId + 1)} />
            <br />
            <br />
        </>
    )
}

export default Todo