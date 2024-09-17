import { TaskAction } from "../Context/TaskActions";
import TaskState from "../Components/TaskState";

const TaskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload] };
        case 'EDIT_TASK':
            return {...state, 
                tasks: state.tasks.map(task => task.id === action.payload.id 
                    ? {...task, ...action.payload.updates }
            : task
        )
    };
        case 'DELETE_TASK':
            return { ...state,  tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};

export default TaskReducer;