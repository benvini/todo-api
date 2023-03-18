import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

const todoService = new TodoService();

export class TodoController {
  async createTodo(req: Request, res: Response) {
    try {
      const todo = await todoService.createTodo(req.body);
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      console.log(todos);
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async getTodoById(req: Request, res: Response) {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async updateTodo(req: Request, res: Response) {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async deleteTodo(req: Request, res: Response) {
    try {
      const todo = await todoService.deleteTodo(req.params.id);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }
}
