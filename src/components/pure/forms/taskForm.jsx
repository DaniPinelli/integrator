import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskForm = ({ add }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const addTask = (e) => {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content align-items-center mb-4' >
            <div className='form-outline flex-fill' >
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required />
                <label htmlFor='selectLevel' className='sr-onñy' ><p>Priority</p></label>
                <select ref={levelRef} id='selectLevel' defaultValue={LEVELS.NORMAL} >
                    <option value={LEVELS.NORMAL} >
                        <p>Normal</p>
                    </option>
                    <option value={LEVELS.URGENT} >
                        <p>Urgentl</p>
                    </option>
                    <option value={LEVELS.BLOCKING} >
                        <p>Blocking</p>
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary btn-lg' ><p>Add</p></button>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm