import { Router, Request, Response } from 'express';
import { Task } from '../intefaces/task';

const router = Router();

let tasks: Task[] = [];
let currentId = 1;

// GET /tasks
router.get('/', (req: Request, res: Response) => {
  res.json(tasks);
});

// POST /tasks
router.post('/', (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Campo "title" é obrigatório.' });
  }

  const newTask: Task = {
    id: currentId++,
    title,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  if (typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Campo "completed" deve ser booleano.' });
  }

  task.completed = completed;
  res.json(task);
});

// DELETE /tasks/:id
router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
});

export default router;
