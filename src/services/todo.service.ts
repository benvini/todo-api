import { Todo, TodoModel } from "../models/todo.model";

export class TodoService {
  async createTodo(todo: Todo) {
    return await TodoModel.create(todo);
  }

  async getAllTodos() {
    return await TodoModel.find({});
  }

  async getTodoById(id: string) {
    return await TodoModel.findById(id);
  }

  async updateTodo(id: string, todo: Todo) {
    return await TodoModel.findOneAndUpdate({ _id: id }, todo, {
      new: true,
      useFindAndModify: false,
    });
  }

  async deleteTodo(id: string) {
    return await TodoModel.findByIdAndDelete(id);
  }
}
