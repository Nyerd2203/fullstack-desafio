import React, { useEffect, useState } from 'react';
import { TaskItem } from '../components/TaskItem';
import { Container, Title, InputRow, Input, Button } from './styles';
import { Task } from '../types/task';
import { addTask, deleteTask, editTaskTitle, loadTasks, toggleTask } from './task_actions';

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        loadTasks(tasks => setTasks(tasks));
    }, []);

    return (
        <Container>
            <Title>Lista de Tarefas</Title>
            <InputRow>
                <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Nova tarefa"
                />
                <Button onClick={() => addTask(title, setTasks, setTitle)}>Adicionar</Button>
            </InputRow>

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={(id, completed) => toggleTask(id, completed, setTasks)}
                    onDelete={(id) => deleteTask(id, setTasks)}
                    onEdit={(id, newTitle) => editTaskTitle(id, newTitle, setTasks)}
                />
            ))}
        </Container>
    );
};

export default Tasks;