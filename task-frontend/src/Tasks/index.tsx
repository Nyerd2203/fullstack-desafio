import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { TaskItem } from '../components/TaskItem';
import { Container, Title, InputRow, Input, Button } from './styles';
import { Task } from '../types/task';

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');

    const loadTasks = async () => {
        const res = await api.get('/tasks');
        setTasks(res.data);
    };

    const addTask = async () => {
        if (!title.trim()) return;
        const res = await api.post('/tasks', { title });
        setTasks(prev => [...prev, res.data]);
        setTitle('');
    };

    const toggleTask = async (id: number, completed: boolean) => {
        await api.put(`/tasks/${id}`, { completed });
        setTasks(prev =>
            prev.map(task => (task.id === id ? { ...task, completed } : task))
        );
    };

    const deleteTask = async (id: number) => {
        await api.delete(`/tasks/${id}`);
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    useEffect(() => {
        loadTasks();
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
                <Button onClick={addTask}>Adicionar</Button>
            </InputRow>

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            ))}
        </Container>
    );
};

export default Tasks;