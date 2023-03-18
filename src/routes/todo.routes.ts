import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

const router = Router();
const todoController = new TodoController();

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoById);
router.patch("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

export default router;
