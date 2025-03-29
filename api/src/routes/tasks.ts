import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const router = Router();

// GET /tasks
router.get('/', TaskController.getAllTasks);

// POST /tasks
router.post('/', TaskController.createTask);

// PUT /tasks/:id
router.put('/:id', TaskController.updateTaskCompletion);

// PATCH /tasks/:id
router.patch('/:id', TaskController.updateTaskTitle);

// DELETE /tasks/:id
router.delete('/:id', TaskController.deleteTask);

export default router;
