import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
let todos: Todo[] = [
  { id: 1, text: 'Learn NestJS', completed: false },
  { id: 2, text: 'Build API', completed: false },
];


@Controller("todos")
export class TodoController {

    @Get()
    ShowAllTodos() {
        return {data: todos , message:"age All Todos" , status:200};
    }
  @Get(":id")
  ShowTodoById(@Param('id') id: string) {
    const todo = todos.find(todo => todo.id === Number(id));
        return {data: todo , message:"age All Todos" , status:200};
  }

    @Get(":id")
  ShowTodo(@Query('id') id: string , @Query('text') text: string ) {
  const todo =  todos.filter((todo) => text.toLowerCase().includes(text.toLowerCase()));
        return {data: todo , message:"age All Todos" , status:200};
  }
  @Post()
  CreateTodo(@Body() body: { text: string }) {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: body.text,
      completed: false
    };
    todos.push(newTodo);
    return {data: newTodo , message:"Todo Created" , status:201};
  }
  @Put(":id")
  replaceTodo(
    @Param('id') id: string,
    @Body() body: {  text: string, completed: boolean }) {
    let todo = todos.find(todo => todo.id === Number(id));
    if (!todo) {
      return {data: null , message:"Todo Not Found" , status:404};
    }
    todo.text = body.text;
    todo.completed = body.completed;
    return {data: todo , message:"Todo Updated" , status:200};
  }

}