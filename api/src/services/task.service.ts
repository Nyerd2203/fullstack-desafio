import { Task } from "../intefaces/task";

class TaskService {
    private tasks: Task[] = [];
    private currentId = 1;

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string): Task {
        const newTask: Task = {
            id: this.currentId++,
            title,
            completed: false,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updateTaskCompletion(id: number, completed: boolean): Task | null {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return null;

        task.completed = completed;
        return task;
    }

    updateTaskTitle(id: number, title: string): Task | null {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return null;

        task.title = title;
        return task;
    }

    deleteTask(id: number): boolean {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1) return false;

        this.tasks.splice(index, 1);
        return true;
    }
}

export default new TaskService();