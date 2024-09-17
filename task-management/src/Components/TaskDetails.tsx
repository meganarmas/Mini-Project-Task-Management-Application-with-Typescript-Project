import React, { useReducer, useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import Task from "./TaskItem";
import PageLayout from "./PageLayout";
import TaskReducer from "../Reducer/TaskReducer";

const TaskList: React.FC = () => {
    const [state, dispatch] = useReducer(TaskReducer, {tasks: [] });
    const [taskTitle, setTaskTitle] = useState('');
    const [taskBody, setTaskBody] = useState('');
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskTitle.trim() === '' || taskBody.trim() === '') return;
        const newTask: Task = { id: Date.now(), title: taskTitle, body: taskBody };
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTaskTitle('');
        setTaskBody('');
    };

    const startEditTask = (task: Task) => {
        setEditingTask(task);
        setTaskTitle(task.title);
        setTaskBody(task.body);
    };

    const editTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingTask) {
            dispatch ({
                type: 'EDIT_TASK',
                payload: { id: editingTask.id, updates: {title: taskTitle, body: taskBody } }
            });
            setEditingTask(null);
            setTaskTitle('');
            setTaskBody('');
        }
    };

    const deleteTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    };

    return(
        <PageLayout>
            <h1>Task Details Page</h1>
            <form onSubmit={editingTask ? editTask : addTask}>
                <h3>Add Task</h3>
                <Form.Group controlId="taskTitle">
                    <Form.Control
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Task Title"
                    required
                    />
                </Form.Group>

                <Form.Group controlId="taskBody">
                    <Form.Control
                    type="text"
                    value={taskBody}
                    onChange={(e) => setTaskBody(e.target.value)}
                    placeholder="Task Body"
                    required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">{editingTask ? 'Update Task' : 'Add New Task'}</Button>
                {editingTask && (
                    <Button variant="secondary" onClick={() => setEditingTask(null)}>Cancel</Button>
                )}
            </form>

            <h3>Tasks</h3>
            {state.tasks.map(task => (
                <Card key={task.id}>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.body}</Card.Text>
                        <Button variant="danger" onClick={() => deleteTask(task.id)}>Remove Task</Button>
                        <Button variant="secondary" onClick={()=> startEditTask(task)}>Edit Task</Button>
                    </Card.Body>
                </Card>
            ))}
        </PageLayout>
    );
};

export default TaskList;