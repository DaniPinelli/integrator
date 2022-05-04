import { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from './../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task(' Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task(' Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task(' Example3', 'Description3', false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Tareas')
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () =>
            console.log('Desmonado')

    }, [tasks])

    const completeTask = (task) => {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        //Update the state
        setTasks(tempTasks)
    }


    function deleteTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        //Update the state
        setTasks(tempTasks)
    }

    const addTask = (task) => {
        const tempTasks = [...tasks]
        tempTasks.push(task)
        //Update the state
        setTasks(tempTasks)
    }


    const Table = () => {
        return (
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
                        <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask} />
                    )
                    )}

                </tbody>
            </table>
        )
    }

    let taskTable;

    if (tasks.length > 0) {
        taskTable = <Table />
    } else {
        taskTable = <div><h2>There are no tasks</h2></div>
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '2rem',
        fontWeight: 'bold'
    }

    return (
        <div className='card bg-dark' >
            {/* Cart Header */}
            <div className='col-12' >
                <div className='card bg-dark' >
                    <div className='card-header p-3'>
                        <h1>Task List</h1>
                    </div>
                </div>
                {/* Card Body*/}
                <div className='card-body' data-mb-perfect-scrollbar='true' style={{ position: 'relative', heigth: '400px' }} >
                    {loading ? <p style={loadingStyle} >Loading...</p> : taskTable}
                </div>


            </div>
            <TaskForm add={addTask} length={tasks.length} />
        </div>
    )
}


export default TaskListComponent