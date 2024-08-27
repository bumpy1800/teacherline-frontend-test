"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { TTodo } from "../_types/todo.type";

interface TTodoContext {
  todoList: TTodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TTodoContext | undefined>(undefined);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  useEffect(() => {
    const storageTodoList = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    );
    setTodoList(storageTodoList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (title: string) => {
    setTodoList(prev => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodoContext는 TodoProvider안에서 사용해주세요");
  }
  return context;
};
