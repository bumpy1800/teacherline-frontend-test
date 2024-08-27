"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { SortType, TTodo } from "../_types/todo.type";

interface TTodoContext {
  todoList: TTodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  sortTodo: (type: SortType) => void;
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

  const sortTodo = (type: SortType) => {
    const sortTodoList = [...todoList].sort((a, b) => {
      if (type === "completed") {
        return Number(b.completed) - Number(a.completed);
      } else if (type === "inComplete") {
        return Number(a.completed) - Number(b.completed);
      } else {
        return a.id - b.id;
      }
    });
    setTodoList(sortTodoList);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, toggleTodo, sortTodo }}>
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
