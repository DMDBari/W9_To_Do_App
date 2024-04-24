import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TaskFormDataType } from "../types";

type TaskFormProps = {
    addNewTask: (data: TaskFormDataType) => void
}


export default function TaskForm({ addNewTask }: TaskFormProps) {
    const [newTask, setNewTask] = useState<TaskFormDataType>({ title: '', description: '', dueDate: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({ ...newTask, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewTask(newTask)
    }

    return (
        <Card className='my-3'>
            <Card.Body>
                <h3 className='text-center'>Create New Task</h3>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control name='title' placeholder='Enter New Task title' value={newTask.title} onChange={handleInputChange} />
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control name='description' placeholder='Enter New Task Description' value={newTask.description} onChange={handleInputChange} />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name='dueDate' placeholder='Enter New Task Due Date' value={newTask.dueDate} onChange={handleInputChange} />
                    <Button className='mt-3 w-100' variant='success' type='submit'>Create Task</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}