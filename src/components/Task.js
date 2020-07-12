import React from 'react'
import './task.css'

const Task = (props) => {

    const { title, done, category, id, deleteTask, completeTask } = props

    return (
        <div className="card-kari mt-5">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{category}</p>
                <p>{done}</p>
                {done
                    ? <button className="btn btn-light" onClick={() => completeTask(category, title, false, id)}
                    >Deshacer
                    </button>
                    : <button className="btn btn-light" onClick={() => completeTask(category, title, true, id)}
                    >Completar
                    </button>
                }
                <button className="btn btn-secondary" onClick={() => deleteTask(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Task
