import { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import taskForm from './../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task(' Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task(' Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task(' Example3', 'Description3', false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
        <div className='card' >
            {/* Cart Header */}
            <div className='col-12' >
                <div className='card' >
                    <div className='card-header p-3'>
                        <h1>Task List</h1>
                    </div>
                </div>
                {/* Card Body*/}
                <div className='card-body' data-mb-perfect-scrollbar='true' style={{ position: 'relative', heigth: '400px' }} >
                    <table>
                        <thead>
                            <tr>
                                <th scope='col' >Title</th>
                                <th scope='col' >Description</th>
                                <th scope='col' >Priority</th>
                                <th scope='col' >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Task */}

                            {tasks.map((task, index) => (
                                <TaskComponent key={index} task={task} />
                            )

                            )}
                        </tbody>
                    </table>
                </div>

                <taskForm />
            </div>

        </div>
    )
}


export default TaskListComponent