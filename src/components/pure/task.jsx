import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from './../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Task created')
        return () =>
            console.log(`${task.name} Desmontado`)

    }, [task])

    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action'></i>)
        }
    }

    {/* Returns a Badge */ }
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.BLOCKING:
                return (<p className='mb-0' ><span className='badge bg-danger' > {task.level} </span></p>)
            case LEVELS.URGENT:
                return (<p className='mb-0' ><span className='badge bg-warning' > {task.level} </span></p>)
            case LEVELS.NORMAL:
                return (<p className='mb-0' ><span className='badge bg-success' > {task.level} </span></p>)
            default:
                break;
        }
    }


    return (

        <tr className='fw-normal bg-dark' >
            <th>
                <span className="ms-2" >{task.name}</span>
            </th>
            <td className='align-middle' >
                {/* Description */}
                <span className="ms-2" >{task.description}</span>
            </td>
            <td className='align-middle' >
                {/* Level */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle' >
                {/* Completed */}
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{ color: 'tomato' }} ></i>
            </td>
        </tr>
    );
}


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
