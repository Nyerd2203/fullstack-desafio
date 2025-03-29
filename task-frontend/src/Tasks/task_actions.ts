import { Dispatch, SetStateAction } from 'react';
import { api } from '../services/api';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

type SetTasks = Dispatch<SetStateAction<Task[]>>;
type SetTitle = Dispatch<SetStateAction<string>>;


export const loadTasks = async (setTasks: SetTasks) => {
    const res = await api.get('/tasks');
    setTasks(res.data);
};

export const addTask = async (
    title: string,
    setTasks: SetTasks,
    setTitle: SetTitle
): Promise<void> => {
    if (!title.trim()) return;
    const res = await api.post<Task>('/tasks', { title });
    setTasks(prev => [...prev, res.data]);
    setTitle('');
};

export const toggleTask = async (
    id: number,
    completed: boolean,
    setTasks: SetTasks
): Promise<void> => {
    await api.put(`/tasks/${id}`, { completed });
    setTasks(prev =>
        prev.map(task => (task.id === id ? { ...task, completed } : task))
    );
};

export const editTaskTitle = async (
    id: number,
    newTitle: string,
    setTasks: SetTasks
): Promise<void> => {
    await api.patch(`/tasks/${id}`, { title: newTitle });
    setTasks(prev =>
        prev.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        )
    );
};

export const deleteTask = async (
    id: number,
    setTasks: SetTasks
): Promise<void> => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (!confirmDelete) return;
    await api.delete(`/tasks/${id}`);
    setTasks(prev => prev.filter(task => task.id !== id));
};