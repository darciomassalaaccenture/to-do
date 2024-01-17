import { React, useState } from "react";
import { TodoForm } from "./todoForm";
import { Todo } from "./todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo], {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    });
    console.log(todos);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  );
};
