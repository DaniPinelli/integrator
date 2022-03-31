import { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task(' Example', 'Default description', false, LEVELS.NORMAL);

    const [tasks, setTasks] = useState(defaultTask)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('Tareas')
        setLoading(false)

        return () =>
            console.log('Desmonado')

    }, [tasks])

    const changeCompleted = (id) => {
        console.log('Todo: Cambiar')
    }

    return (
        <div>
            <div>
                <h1>Task List</h1>
            </div>
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    )
}


export default TaskListComponent