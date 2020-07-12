import React, { useState, useEffect } from 'react'
import Task from '../components/Task'
import axios from 'axios'
import { TaskClass } from '../utils/TaskClass'

const MainContainer = () => {

    const [tasks, setTasks] = useState({})
    const URL = 'https://to-do-kari.firebaseio.com/task.json';

    const getTask = () => {
        axios.get(URL)
            .then((res) => setTasks(res.data))
            .catch((err) => alert(err))
    }

    const deleteTask = (id) => {
        axios.delete(`https://to-do-kari.firebaseio.com/task/${id}.json`)
            .then(() => getTask())
            .catch((err) => alert(err))
    }

    const completeTask = (category, title, done, id) => {
        const currentTask = new TaskClass(category, title, done, id)
        axios.patch(URL, currentTask)
            .then(() => getTask())
            .catch((err) => alert(err))
    }

    useEffect(() => {
        getTask()
    }, [])

    return (
        <main className="container">
            {Object.keys(tasks).map((id) => <Task
                key={id}
                id={id}
                title={tasks[id].title}
                done={tasks[id].done}
                category={tasks[id].category}
                deleteTask={deleteTask}
                completeTask={completeTask}
            />)}
        </main>
    )
}

export default MainContainer
