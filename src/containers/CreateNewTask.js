import React from 'react'
import CreateForm from '../components/CreateForm'
import { useHistory } from 'react-router-dom';
import { TaskClass } from '../utils/TaskClass'
import axios from 'axios'

const CreateNewTask = () => {

    const URL = 'https://to-do-kari.firebaseio.com/task.json';
    const history = useHistory();

    const createTask = (category, title) => {
        const newTask = new TaskClass(category, title, false, 'a')
        axios.post(URL, newTask.a)
            .then(() => history.push('./'))
            .catch((err) => alert(err))
    }

    return (
        <div className="container">
            <CreateForm createTask={createTask} />
        </div>
    )
}

export default CreateNewTask
