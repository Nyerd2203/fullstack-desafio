// src/components/TaskItem.tsx

import { Task } from "../../types/task";
import { Container, DeleteButton, EditButton, Title } from "./styles";
import { useState } from "react";

interface Props {
    task: Task;
    onToggle: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete, onEdit }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const saveEdit = () => {
        if (editedTitle.trim() && editedTitle !== task.title) {
            onEdit(task.id, editedTitle.trim());
        }
        setIsEditing(false);
    };

    return (
        <Container>
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id, !task.completed)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editedTitle}
                        autoFocus
                        onChange={(e) => setEditedTitle(e.target.value)}
                        onBlur={saveEdit}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                    />
                ) : (
                    <Title completed={task.completed}>{task.title}</Title>
                )}
            </div>
            <div>
                {!isEditing && <EditButton onClick={handleEdit}>Editar</EditButton>}
                <DeleteButton onClick={() => onDelete(task.id)}>Excluir</DeleteButton>
            </div>
        </Container>
    );
};
