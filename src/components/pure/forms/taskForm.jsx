import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskForm = ({ add, length }) => {

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
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Write a task' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Write a description' />
                <label htmlFor='selectLevel' className='form-control form-control-lg mt-2' ><p>Priority</p></label>
                <select className='form-control form-control-lg' ref={levelRef} id='selectLevel' defaultValue='NORMAL' >
                    <option className='bg-success' value={LEVELS.NORMAL} >
                        <p>Normal</p>
                    </option>
                    <option className='bg-warning' value={LEVELS.URGENT} >
                        <p>Urgent</p>
                    </option>
                    <option className='bg-danger' value={LEVELS.BLOCKING} >
                        <p>Blocking</p>
                    </option>
                </select>
                <button type='submit' className='btn btn-primary btn-lg pb-0' >
                    {length > 0 ? <p>ADD TASK</p> : <p>CREATE TASK</p>}
                </button>
            </div>

        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm