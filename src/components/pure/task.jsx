import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tareas creada')


        return () =>
            console.log(`${task.name} Desmontado`)

    }, [task])


    return (
        <div>
            <p>
                Name{task.name}
            </p>
            <p>
                Description {task.description}
            </p>
            <p>
                Level {task.level}
            </p>
            <p>
                Task State: {task.completed ? 'COMPLETED' : 'PENDING'}
            </p>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
