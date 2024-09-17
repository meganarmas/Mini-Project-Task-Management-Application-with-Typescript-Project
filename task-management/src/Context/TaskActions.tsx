import Task from "../Components/TaskItem";

export type TaskAction =
| { type: 'ADD_TASK'; payload: Task }
| { type: 'EDIT_TASK'; payload: { id: number, updates: Partial<Task> }}
| { type: 'DELETE_TASK'; payload: number };

