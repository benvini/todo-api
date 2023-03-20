import { PRIORITY } from "../constants";
import mongoose from "mongoose";

export interface Todo {
  _id: string;
  message: string;
  completed: boolean;
  priority: string;
  createdAt: Date;
}

export interface TodoRequestPayload {
  message: string;
  completed: boolean;
  priority: string;
}

const todoSchema = new mongoose.Schema<Todo>({
  message: { type: String, required: true },
  completed: { type: Boolean, default: false, required: true },
  priority: { type: String, default: PRIORITY.MEDIUM, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const TodoModel = mongoose.model<Todo>("Todo", todoSchema);
