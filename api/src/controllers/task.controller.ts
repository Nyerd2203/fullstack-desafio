import { Request, Response } from "express";
import taskService from "../services/task.service";

class TaskController {
    getAllTasks(req: Request, res: Response): void {
        const tasks = taskService.getAllTasks();
        res.json(tasks);
    }

    createTask(req: Request, res: Response): void {
        const { title } = req.body;
        if (!title) {
            res.status(400).json({ error: "Title is required" });
            return;
        }

        const newTask = taskService.createTask(title);
        res.status(201).json(newTask);
    }

    updateTaskCompletion(req: Request, res: Response): void {
        const { id } = req.params;
        const { completed } = req.body;

        if (typeof completed !== "boolean") {
            res.status(400).json({ error: "Completed must be a boolean" });
            return;
        }

        const updatedTask = taskService.updateTaskCompletion(Number(id), completed);
        if (!updatedTask) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        res.json(updatedTask);
    }

    updateTaskTitle(req: Request, res: Response): void {
        const { id } = req.params;
        const { title } = req.body;

        if (!title) {
            res.status(400).json({ error: "Title is required" });
            return;
        }

        const updatedTask = taskService.updateTaskTitle(Number(id), title);
        if (!updatedTask) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        res.json(updatedTask);
    }

    deleteTask(req: Request, res: Response): void {
        const { id } = req.params;

        const isDeleted = taskService.deleteTask(Number(id));
        if (!isDeleted) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        res.status(204).send();
    }
}

export default new TaskController();