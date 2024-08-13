import { useState } from "react";

function useTodos<T>(): [T[], (value: T) => void] {
  const [todos, setTodos] = useState<T[]>([]);

  const addTodo = (value: T) => {
    setTodos((current) => [...current, value]);
  };

  return [todos, addTodo];
}

export const Todos = () => {
  const [todos, addTodo] = useTodos<number>();
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as typeof e.currentTarget.elements & {
      todo?: HTMLInputElement;
    };

    const todoValue = elements.todo?.value;

      if (!todoValue) {
        return;
      }
addTodo(Number(todoValue));

    console.log(elements);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
        };