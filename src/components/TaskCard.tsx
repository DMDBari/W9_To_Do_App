import { useState } from 'react';
import { TaskType } from '../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type TaskCardProps = {
    task: TaskType
}

export default function TaskCard({ task }: TaskCardProps) {

    const [isComplete, setIsComplete] = useState(task.complete)
    console.log(isComplete)

    return (
        <Card className='my-3' bg={isComplete ? ('danger') : ('primary')}>
            <Card.Header>{ task.dateCreated }</Card.Header>
            <Card.Body>
                <Card.Title>{ task.title }</Card.Title>
                <Card.Subtitle>{ task.dueDate }</Card.Subtitle>
                <Card.Text>{ task.description }</Card.Text>
                <Card.Text>{isComplete ? <p>Complete</p>:<p>Incomplete</p>}</Card.Text>
            </Card.Body>
            <Button onClick={() => setIsComplete( !isComplete )}>Finished</Button>
        </Card>
    )
}