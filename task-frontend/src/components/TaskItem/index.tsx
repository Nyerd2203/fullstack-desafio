// src/components/TaskItem.tsx

import { Task } from "../../types/task";
import { Button, Container, Title } from "./styles";

interface Props {
    task: Task;
    onToggle: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: Props) => {
    return (
        <Container>
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id, !task.completed)}
                />
                <Title completed={task.completed}> {task.title} </Title>
            </div>
            <Button onClick={() => onDelete(task.id)}>Excluir</Button>
        </Container>
    );
};
