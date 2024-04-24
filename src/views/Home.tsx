import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import { TaskFormDataType, TaskType } from '../types';



type HomeProps = {}

export default function Home({}: HomeProps) {

    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState<TaskType[]>([])

    const addNewTask = (newTaskData: TaskFormDataType) => {
        const newTask: TaskType = {...newTaskData, dateCreated:new Date().toString(), complete:false}
        setTasks([...tasks, newTask]);
        setShowForm(false)
    }

    return (
        <>
            <h1>Thank you for using our Task App</h1>
                <Row>
                    <Col>
                        <Button className='w-100' variant='success' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add Task+'}</Button>
                    </Col>
                </Row>
                { showForm && <TaskForm addNewTask={addNewTask} /> }
                {tasks.filter(t => t.title.toLowerCase()).map( t => <TaskCard key={t.dateCreated} task={t}/>)}
        </>
    )
}